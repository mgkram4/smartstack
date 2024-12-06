import { Alert, AlertDescription } from '@/components/ui/alert';
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { PaymentIntent, StripeError } from '@stripe/stripe-js';
import { AlertCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

interface PaymentFormProps {
  amount: number;
  onSuccess: (paymentIntent: PaymentIntent) => void;
}

interface PaymentConfirmation {
  error?: StripeError;
  paymentIntent?: PaymentIntent;
}

export default function PaymentForm({ amount, onSuccess }: PaymentFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);
  const [configError, setConfigError] = useState<string | null>(null);

  useEffect(() => {
    // Check for missing configuration
    if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
      setConfigError('Stripe is not properly configured. Payment functionality is disabled.');
      return;
    }

    // Validate stripe initialization
    if (!stripe) {
      setConfigError('Payment system is initializing...');
      return;
    }
  }, [stripe]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Early return if stripe isn't configured or elements aren't loaded
    if (!stripe || !elements) {
      setError('Payment system is not ready. Please try again.');
      return;
    }

    setProcessing(true);
    setError(null);

    try {
      const { error: stripeError, paymentIntent }: PaymentConfirmation =
        await stripe.confirmPayment({
          elements,
          confirmParams: {
            return_url: `${window.location.origin}/booking/success`,
          },
        });

      if (stripeError) {
        setError(stripeError.message ?? 'Payment failed');
      } else if (paymentIntent?.status === 'succeeded') {
        onSuccess(paymentIntent);
      } else {
        setError('Payment status unknown. Please check your email for confirmation.');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
      console.error('Payment error:', err);
    } finally {
      setProcessing(false);
    }
  };

  // Show configuration error if present
  if (configError) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>{configError}</AlertDescription>
      </Alert>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <PaymentElement />
      
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      
      <button
        type="submit"
        disabled={!stripe || !elements || processing}
        className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg 
                 disabled:opacity-50 disabled:cursor-not-allowed
                 hover:from-blue-600 hover:to-indigo-600 
                 transition-all duration-200"
      >
        {processing ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </span>
        ) : (
          `Pay $${amount}`
        )}
      </button>
    </form>
  );
}