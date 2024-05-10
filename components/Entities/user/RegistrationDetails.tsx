import React from "react";

import { RegistrationForm } from "@/components/shared/types";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@/components/shared/ui";

interface Props {
  form: RegistrationForm;
}

export default function RegistrationDetails({ form }: Props) {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={form.control}
          defaultValue={""}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <div className="flex min-h-10 items-center gap-5">
                <FormLabel>First name</FormLabel>
                <FormMessage className="text-xs" />
              </div>
              <FormControl>
                <Input placeholder="First name" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          defaultValue={""}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <div className="flex min-h-10 items-center gap-5">
                <FormLabel>Last name</FormLabel>
                <FormMessage className="text-xs" />
              </div>
              <FormControl>
                <Input placeholder="Last name" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      </div>
      <div className="grid gap-2">
        <FormField
          control={form.control}
          defaultValue={""}
          name="email"
          render={({ field }) => (
            <FormItem>
              <div className="flex min-h-5 items-center gap-5">
                <FormLabel>Email</FormLabel>
                <FormMessage className="text-xs" />
              </div>
              <FormControl>
                <Input placeholder="email@example.com" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="grid gap-2">
          <FormField
            control={form.control}
            defaultValue={""}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="flex min-h-5 items-center gap-5">
                  <FormLabel>Password</FormLabel>
                  <FormMessage className="text-xs" />
                </div>

                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
      </div>
    </>
  );
}
