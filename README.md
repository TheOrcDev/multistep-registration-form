# Multistep Registration Form

This project implements a multi-step registration form built with Next.js and styled using Shadcn UI library and Tailwind CSS Framework.

# Form Validation

Validation within the form is facilitated by the `react-hook-form` library, ensuring data integrity and accuracy throughout the registration process.

The required data for registration includes:
- First name
- Last name
- Email
- Password
- Bio
- Profile picture

Additionally, the following settings are defaulted to true:
- Notification settings is by default set to true
- Security settings is by default set to true

# Components

Feature sliced design is used for the component structure. TODO

# State Management

For managing state across multiple steps, this project uses the `Zustand` state management library.

There are two methods inside the registration store:
- `updateRegistration`: This method is utilized to update the progression of steps within the registration process.
- `setActiveStep`: This method allows for the activation of a specific step while deactivating others, facilitating seamless navigation through the registration flow.
- `setDoneStep`: Indicates if a step in the registration process is completed.
- `setWarningStep`: Alerts users about incomplete or problematic steps.
- `next`: Proceeds to the next step in the registration process.
- `previous`: Returns to the previous step in the registration process.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
