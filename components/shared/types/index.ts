import { UseFormReturn } from "react-hook-form";

export interface Step {
  title: RegistrationStep;
  active?: boolean;
  done?: boolean;
  warning?: boolean;
  action?: () => void;
}

export type RegistrationForm = UseFormReturn<
  {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    bio: string;
    profilePic: File | null;
    privacySettings: boolean;
    notificationSettings: boolean;
  },
  any,
  undefined
>;

export const RegistrationStep = {
  DETAILS: "Details",
  PROFILE: "Profile",
  SETTINGS: "Settings",
} as const;
export type RegistrationStep =
  (typeof RegistrationStep)[keyof typeof RegistrationStep];
