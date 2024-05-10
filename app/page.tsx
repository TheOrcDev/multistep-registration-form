"use client";

import { useRegistrationStore } from "@/stores/registration-store";

import { RegistrationForm } from "@/components/Entities";
import { Stepper } from "@/components/Features";

export default function MultiStep() {
  const { steps } = useRegistrationStore();

  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="hidden md:block">
          <Stepper steps={steps} />
        </div>
        <RegistrationForm />
      </div>

      <div className="absolute bottom-5 w-full border-t px-10 py-5 md:hidden">
        <Stepper steps={steps} />
      </div>
    </>
  );
}
