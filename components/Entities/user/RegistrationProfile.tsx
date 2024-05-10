import React from "react";

import { RegistrationForm } from "@/components/shared/types";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Textarea,
} from "@/components/shared/ui";

interface Props {
  form: RegistrationForm;
}

export default function RegistrationProfile({ form }: Props) {
  return (
    <>
      <FormField
        control={form.control}
        defaultValue={""}
        name="bio"
        render={({ field }) => (
          <FormItem>
            <div className="flex min-h-5 items-center gap-5">
              <FormLabel>Bio</FormLabel>
              <FormMessage className="text-xs" />
            </div>
            <FormControl>
              <Textarea placeholder="My bio..." {...field} />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="profilePic"
        render={({ field: { ref, name, onBlur, onChange } }) => (
          <FormItem>
            <div className="flex min-h-5 items-center gap-5">
              <FormLabel>Profile Picture</FormLabel>
              <FormMessage className="text-xs" />
            </div>
            <FormControl>
              <Input
                type="file"
                ref={ref}
                name={name}
                onBlur={onBlur}
                onChange={(e) => onChange(e.target.files?.[0])}
              />
            </FormControl>
          </FormItem>
        )}
      />
    </>
  );
}
