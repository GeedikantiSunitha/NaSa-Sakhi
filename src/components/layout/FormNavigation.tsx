'use client';

interface FormNavigationProps {
  onBack?: () => void;
  onNext?: () => void;
  onSaveDraft?: () => void;
  isFirstStep?: boolean;
  isLastStep?: boolean;
  isSubmitting?: boolean;
  nextLabel?: string;
}

export function FormNavigation({
  onBack,
  onNext,
  onSaveDraft,
  isFirstStep,
  isLastStep,
  isSubmitting,
  nextLabel = 'Next',
}: FormNavigationProps) {
  return (
    <div className="flex items-center justify-between pt-6 border-t border-gray-200">
      <div>
        {!isFirstStep && onBack && (
          <button
            type="button"
            onClick={onBack}
            disabled={isSubmitting}
            className="px-6 py-2 bg-white border border-gray-300 text-gray-700 rounded-md
                       hover:bg-gray-50 active:bg-gray-100
                       focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
                       disabled:opacity-50 disabled:cursor-not-allowed
                       transition-colors duration-150"
          >
            ← Back
          </button>
        )}
      </div>

      <div className="flex items-center gap-4">
        {onSaveDraft && (
          <button
            type="button"
            onClick={onSaveDraft}
            disabled={isSubmitting}
            className="px-6 py-2 text-gray-700 hover:text-gray-900
                       focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-md
                       disabled:opacity-50 disabled:cursor-not-allowed
                       transition-colors duration-150"
          >
            Save Draft
          </button>
        )}

        {onNext && (
          <button
            type="button"
            onClick={onNext}
            disabled={isSubmitting}
            className="px-8 py-2 bg-primary-500 text-white rounded-md
                       hover:bg-primary-600 active:bg-primary-700
                       focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
                       disabled:opacity-50 disabled:cursor-not-allowed
                       transition-colors duration-150"
          >
            {isSubmitting ? 'Loading...' : isLastStep ? 'Submit' : nextLabel} →
          </button>
        )}
      </div>
    </div>
  );
}
