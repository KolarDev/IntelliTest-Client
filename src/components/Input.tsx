import React, { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, className = '', ...props }, ref) => {
    return (
      <div className="space-y-1">
        {label && (
          <label className="block text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <div className="text-gray-400">{icon}</div>
            </div>
          )}
          <input
            ref={ref}
            className={`
              block w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm 
              placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 
              focus:border-transparent transition-all duration-200
              ${icon ? 'pl-10' : 'pl-3'}
              ${error ? 'border-red-500' : 'border-gray-300'}
              ${className}
            `}
            {...props}
          />
        </div>
        {error && (
          <p className="text-sm text-red-600">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
