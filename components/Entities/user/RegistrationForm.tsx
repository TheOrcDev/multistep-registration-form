import React from "react";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useRegistrationStore } from "@/stores/registration-store";
import { RegistrationStep } from "@/components/shared/types";
import { registrationFormSchema } from "./schema";

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Form,
  useToast,
} from "@/components/shared/ui";

import RegistrationDetails from "./RegistrationDetails";
import RegistrationProfile from "./RegistrationProfile";
import RegistrationSettings from "./RegistrationSettings";

type RegistrationFormValues = z.infer<typeof registrationFormSchema>;

// This can come from database or API.
const defaultValues: Partial<RegistrationFormValues> = {
  privacySettings: true,
  notificationSettings: true,
};

export default function RegistrationForm() {
  const { steps, setDoneStep, setWarningStep } = useRegistrationStore();
  const { toast } = useToast();

  const form = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationFormSchema),
    defaultValues,
  });

  const onSubmit = (data: RegistrationFormValues) => {
    setDoneStep(RegistrationStep.SETTINGS);
    toast({
      title: "You submitted these values in your form:",
      description: (
        <pre className="mt-2 w-80 rounded-md bg-slate-800 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  };

  const checkForErrors = () => {
    if (!form.watch("bio") || !form.watch("profilePic")) {
      setWarningStep(RegistrationStep.PROFILE);
    } else {
      setDoneStep(RegistrationStep.PROFILE);
    }

    if (
      !form.watch("firstName") ||
      !form.watch("lastName") ||
      !form.watch("email") ||
      !form.watch("password")
    ) {
      setWarningStep(RegistrationStep.DETAILS);
    } else {
      setDoneStep(RegistrationStep.DETAILS);
    }
  };

  const activeStep = steps.find((step) => step.active);
  return (
    <Card className="relative mx-auto min-h-[420px] min-w-96 max-w-sm">
      <CardHeader>
        <CardTitle className="text-sm">Sign Up</CardTitle>
        <CardDescription>
          {activeStep?.title === RegistrationStep.DETAILS && (
            <span>Enter your information to create an account</span>
          )}
          {activeStep?.title === RegistrationStep.PROFILE && (
            <span>Enter your bio and profile picture</span>
          )}
          {activeStep?.title === RegistrationStep.SETTINGS && (
            <span>Change your settings</span>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="flex flex-col gap-3">
              {activeStep?.title === RegistrationStep.DETAILS && (
                <RegistrationDetails form={form} />
              )}
              {activeStep?.title === RegistrationStep.PROFILE && (
                <RegistrationProfile form={form} />
              )}
              {activeStep?.title === RegistrationStep.SETTINGS && (
                <RegistrationSettings form={form} />
              )}
            </div>
            <Button
              onClick={checkForErrors}
              type="submit"
              className="absolute bottom-5 right-5"
            >
              Create an account
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
