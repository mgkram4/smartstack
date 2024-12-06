import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { PaymentIntent, StripeError } from '@stripe/stripe-js';
import { useState } from 'react';

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setProcessing(true);

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
    }

    setProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <PaymentElement />
      {error && <div className="text-red-500">{error}</div>}
      <button
        type="submit"
        disabled={!stripe || processing}
        className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg disabled:opacity-50"
      >
        {processing ? 'Processing...' : `Pay $${amount}`}
      </button>
    </form>
  );
}