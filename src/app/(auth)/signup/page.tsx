"use client";

import React, { useState, useEffect, useRef } from 'react';

// Declare the global Ravepay object to tell TypeScript about the external library.
// This prevents "Ravepay is not defined" errors during type checking.
declare global {
  interface Ravepay {
    onReady: (callback: () => void) => void;
    encrypt: (cardDetails: {
      card_number: string;
      cvv: string;
      expiry_month: string;
      expiry_year: string;
    }, publicKey: string) => string;
  }
  const Ravepay: Ravepay;
}

export default function PaymentPage() {
  const [cardNumber, setCardNumber] = useState<string>('');
  const [expiryMonth, setExpiryMonth] = useState<string>('');
  const [expiryYear, setExpiryYear] = useState<string>('');
  const [cvv, setCvv] = useState<string>('');
  const [cardHash, setCardHash] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Use a ref to hold the Ravepay object once it's available
  const RavepayRef = useRef<Ravepay | null>(null);

  // This useEffect hook runs once when the component mounts to ensure
  // the external library is loaded and ready before we proceed.
  useEffect(() => {
    // We assume the Flutterwave script is already loaded by a parent component or the index.html.
    if (typeof Ravepay !== 'undefined' && Ravepay.onReady) {
      Ravepay.onReady(() => {
        RavepayRef.current = Ravepay;
        console.log("Ravepay library is ready.");
      });
    } else {
      console.error('Ravepay library not found. Please ensure the script is included in your index.html.');
      setError('Payment service is temporarily unavailable.');
    }
  }, []);

  const FLUTTERWAVE_PUBLIC_KEY = 'FLWPUBK_TEST-c658ba9d8af6c822a18e83c3751a58dc-X';

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setCardHash('');
    setError('');
    
    // Check if Ravepay is available before proceeding
    if (!RavepayRef.current) {
        setError('Payment service is not ready. Please try again.');
        return;
    }

    if (!cardNumber || !expiryMonth || !expiryYear || !cvv) {
      setError('Please fill in all fields.');
      return;
    }

    const currentYear = new Date().getFullYear().toString().substr(-2);
    if (expiryMonth.length !== 2 || parseInt(expiryMonth) < 1 || parseInt(expiryMonth) > 12) {
      setError('Please enter a valid expiry month (MM).');
      return;
    }
    if (expiryYear.length !== 2 || parseInt(expiryYear) < parseInt(currentYear)) {
      setError('Please enter a valid expiry year (YY) that is not in the past.');
      return;
    }
    if (cvv.length < 3 || cvv.length > 4) {
      setError('Please enter a valid CVV.');
      return;
    }

    setIsLoading(true);

    try {
      const encryptedHash = RavepayRef.current.encrypt({
        card_number: cardNumber.replace(/\s/g, ''),
        cvv: cvv,
        expiry_month: expiryMonth,
        expiry_year: expiryYear,
      }, FLUTTERWAVE_PUBLIC_KEY);

      setCardHash(encryptedHash);
      console.log('Generated Card Hash (client_data):', encryptedHash);
    } catch (err) {
      setError('Encryption failed. Please check your card details.');
      console.error('Encryption Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 flex items-center justify-center min-h-screen p-4 font-sans">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm border border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Encrypt Card Details</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">Card Number</label>
            <input 
              type="text" 
              id="card-number" 
              required 
              value={cardNumber}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCardNumber(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 text-sm focus:ring-blue-500 focus:border-blue-500 transition-colors" 
              placeholder="4242 4242 4242 4242"
            />
          </div>

          <div className="flex space-x-4">
            <div className="flex-1">
              <label htmlFor="expiry-month" className="block text-sm font-medium text-gray-700">Expiry Month</label>
              <input 
                type="text" 
                id="expiry-month" 
                required 
                value={expiryMonth}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setExpiryMonth(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 text-sm focus:ring-blue-500 focus:border-blue-500" 
                placeholder="MM"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="expiry-year" className="block text-sm font-medium text-gray-700">Expiry Year</label>
              <input 
                type="text" 
                id="expiry-year" 
                required 
                value={expiryYear}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setExpiryYear(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 text-sm focus:ring-blue-500 focus:border-blue-500" 
                placeholder="YY"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
              <input 
                type="text" 
                id="cvv" 
                required 
                value={cvv}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCvv(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 text-sm focus:ring-blue-500 focus:border-blue-500" 
                placeholder="123"
              />
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
            disabled={isLoading}
          >
            {isLoading ? 'Encrypting...' : 'Encrypt and Show Hash'}
          </button>
        </form>

        {error && (
            <div className="mt-4 p-3 rounded-md text-sm bg-red-100 text-red-800">
                {error}
            </div>
        )}

        {cardHash && (
            <div id="output" className="mt-6">
                <h3 className="text-sm font-semibold text-gray-800 mb-2">Encrypted Card Hash:</h3>
                <div className="bg-gray-100 p-3 rounded-md overflow-x-auto text-sm text-gray-700">
                    <pre id="card-hash" className="whitespace-pre-wrap break-words">{cardHash}</pre>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                    Copy this hash and use it to test your backend `direct_charge` endpoint.
                </p>
            </div>
        )}
      </div>
    </div>
  );
}
