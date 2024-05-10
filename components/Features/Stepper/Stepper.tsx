import React from "react";

import { Step } from "@/components/shared/types";
import { useRegistrationStore } from "@/stores/registration-store";
import { Button } from "@/components/shared/ui";

export interface Props {
  steps: Step[];
}

export default function Stepper({ steps }: Props) {
  const { setActiveStep, next, previous } = useRegistrationStore();
  const currentlyActiveStep = steps.findIndex((step) => step.active);

  return (
    <>
      <div className="relative flex w-full items-center justify-center">
        {steps.map((step, index) => (
          <React.Fragment key={step.title}>
            <div
              className={`
              flex size-10 min-w-10 cursor-pointer items-center justify-center 
              rounded-full border
              ${step.warning && "bg-red-200 dark:bg-red-800"}
              ${step.done && "bg-green-200 dark:bg-green-800"}
              ${
                step.active
                  ? "border-4 border-blue-200 dark:border-blue-800"
                  : "dark:border-gray-200"
              }
            `}
              onClick={() => setActiveStep(index)}
            >
              {index + 1}
              <div className="absolute -bottom-5 text-xs text-gray-500">
                {step.title}
              </div>
            </div>
            {step !== steps[steps.length - 1] && (
              <div
                className={`h-0.5 w-full ${
                  steps[index].done ? "bg-green-200" : "bg-gray-300"
                }`}
              ></div>
            )}
          </React.Fragment>
        ))}
        <div className="absolute flex w-full items-center justify-between gap-5">
          <Button
            className="absolute left-0 size-5 -translate-x-8 rounded-full text-lg"
            variant={"ghost"}
            onClick={previous}
            disabled={currentlyActiveStep === 0}
          >
            &lt;
          </Button>
          <Button
            className="absolute right-0 size-5 translate-x-8 rounded-full text-lg"
            variant={"ghost"}
            onClick={next}
            disabled={currentlyActiveStep === steps.length - 1}
          >
            &gt;
          </Button>
        </div>
      </div>
    </>
  );
}
