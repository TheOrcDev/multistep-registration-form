import { create } from "zustand";

import { RegistrationStep, Step } from "@/components/shared/types";

interface RegistrationStore {
  steps: Step[];
  updateRegistration: (steps: Step[]) => void;
  setActiveStep: (stepIndex: number) => void;
  setDoneStep: (regStep: RegistrationStep) => void;
  setWarningStep: (regStep: RegistrationStep) => void;
  next: () => void;
  previous: () => void;
}

// Steps can come from some API
export const defaultInitState: Step[] = [
  {
    title: RegistrationStep.DETAILS,
    active: true, // By default first step is active
  },
  {
    title: RegistrationStep.PROFILE,
  },
  {
    title: RegistrationStep.SETTINGS,
  },
];

export const useRegistrationStore = create<RegistrationStore>((set) => ({
  steps: defaultInitState,
  updateRegistration: (steps) => set(() => ({ steps })),
  setActiveStep: (stepIndex: number) =>
    set((state) => ({
      steps: state.steps.map((step, index) => ({
        ...step,
        active: index === stepIndex,
      })),
    })),
  setDoneStep: (regStep: RegistrationStep) =>
    set((state) => ({
      steps: state.steps.map((step) => ({
        ...step,
        done: step.title === regStep ? true : step.done,
        warning: step.title === regStep && !step.done ? false : step.warning,
      })),
    })),
  setWarningStep: (regStep: RegistrationStep) =>
    set((state) => ({
      steps: state.steps.map((step) => ({
        ...step,
        warning: step.title === regStep || step.warning,
        done: step.title === regStep && !step.warning ? false : step.done,
      })),
    })),
  next: () =>
    set((state) => {
      const currentlyActive = state.steps.findIndex((step) => step.active);
      return {
        steps: state.steps.map((step, index) => ({
          ...step,
          active: index === currentlyActive + 1,
        })),
      };
    }),
  previous: () =>
    set((state) => {
      const currentlyActive = state.steps.findIndex((step) => step.active);
      return {
        steps: state.steps.map((step, index) => ({
          ...step,
          active: index === currentlyActive - 1,
        })),
      };
    }),
}));
