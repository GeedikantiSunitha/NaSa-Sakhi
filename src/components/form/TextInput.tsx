'use client';

import { forwardRef, InputHTMLAttributes } from 'react';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, error, helperText, className = '', ...props }, ref) => {
    return (
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {props.required && <span className="text-error-500 ml-1">*</span>}
        </label>

        <input
          ref={ref}
          className={`
            w-full px-4 py-3 border rounded-md
            focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500
            disabled:bg-gray-100 disabled:cursor-not-allowed
            placeholder:text-gray-400
            ${error ? 'border-error-500' : 'border-gray-300'}
            ${className}
          `}
          {...props}
        />

        {error && (
          <p className="text-sm text-error-500 flex items-center gap-1">
            <span>⚠️</span>
            {error}
          </p>
        )}

        {helperText && !error && (
          <p className="text-sm text-gray-500">{helperText}</p>
        )}
      </div>
    );
  }
);

TextInput.displayName = 'TextInput';
