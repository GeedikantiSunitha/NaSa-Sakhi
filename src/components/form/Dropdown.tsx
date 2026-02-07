'use client';

import { forwardRef, SelectHTMLAttributes } from 'react';

interface Option {
  value: string;
  label: string;
}

interface DropdownProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: Option[];
  error?: string;
  helperText?: string;
  placeholder?: string;
}

export const Dropdown = forwardRef<HTMLSelectElement, DropdownProps>(
  ({ label, options, error, helperText, placeholder, className = '', ...props }, ref) => {
    return (
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {props.required && <span className="text-error-500 ml-1">*</span>}
        </label>

        <select
          ref={ref}
          className={`
            w-full px-4 py-3 border rounded-md
            focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500
            disabled:bg-gray-100 disabled:cursor-not-allowed
            ${error ? 'border-error-500' : 'border-gray-300'}
            ${className}
          `}
          {...props}
        >
          {placeholder && (
            <option value="">{placeholder}</option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

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

Dropdown.displayName = 'Dropdown';
