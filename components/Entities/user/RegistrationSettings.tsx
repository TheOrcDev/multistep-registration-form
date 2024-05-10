import React from "react";

import { RegistrationForm } from "@/components/shared/types";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Switch,
} from "@/components/shared/ui";

interface Props {
  form: RegistrationForm;
}

export default function RegistrationSettings({ form }: Props) {
  return (
    <>
      <FormField
        control={form.control}
        name="notificationSettings"
        render={({ field: { value, onChange } }) => (
          <FormItem className="flex items-center gap-2">
            <FormControl>
              <Switch checked={value} onCheckedChange={onChange} />
            </FormControl>
            <FormLabel>Notification Settings</FormLabel>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="privacySettings"
        render={({ field: { value, onChange } }) => (
          <FormItem className="flex items-center gap-2">
            <FormControl>
              <Switch checked={value} onCheckedChange={onChange} />
            </FormControl>
            <FormLabel>Privacy Settings</FormLabel>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
