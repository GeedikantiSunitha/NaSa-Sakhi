'use client';

interface Step {
  number: number;
  title: string;
  path: string;
}

interface ProgressIndicatorProps {
  steps: Step[];
  currentStep: number;
}

export function ProgressIndicator({ steps, currentStep }: ProgressIndicatorProps) {
  return (
    <div className="w-full py-6 bg-white border-b">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center flex-1">
              {/* Step Circle */}
              <div className="flex flex-col items-center">
                <div
                  className={`
                    w-10 h-10 rounded-full flex items-center justify-center
                    font-semibold text-sm transition-colors
                    ${
                      step.number < currentStep
                        ? 'bg-success-500 text-white' // Completed
                        : step.number === currentStep
                        ? 'bg-primary-600 text-white' // Active
                        : 'bg-gray-200 text-gray-500' // Inactive
                    }
                  `}
                >
                  {step.number < currentStep ? '✓' : step.number}
                </div>

                <p className={`text-xs mt-2 text-center ${
                  step.number < currentStep
                    ? 'text-gray-600'
                    : step.number === currentStep
                    ? 'text-gray-900 font-medium'
                    : 'text-gray-500'
                }`}>
                  {step.title}
                </p>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div
                  className={`
                    flex-1 h-1 mx-2 transition-colors
                    ${step.number < currentStep ? 'bg-success-500' : 'bg-gray-200'}
                  `}
                />
              )}
            </div>
          ))}
        </div>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Step {currentStep} of {steps.length}
          </p>
        </div>
      </div>
    </div>
  );
}
