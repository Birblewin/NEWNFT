// IMPORTING NECESSARY FILES
// IMPORTING NECESSARY MODULES
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ClerkProvider, MultisessionAppSupport } from "@clerk/clerk-react";
// IMPORTING NECESSARY CONTEXTS
import ThemeContextProvider from "./contexts/ThemeProvider.jsx";

// IMPORTING A CSS FILE
import "./css/index.css";

// A CHECK FOR THE CLERK PROVIDER
if (!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const clerkPublishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* DIDNT PROVIDE REDIRECTS AS THEY CAN DIFFER */}
    <ClerkProvider 
      publishableKey={clerkPublishableKey}
      supportEmail="ronniedenzel0@gmail.com"
      allowedRedirectOrigins={["http://localhost:5173", "https://saved-yeti-32.clerk.accounts.dev"]}
      signInUrl="/auth/sign-in"
    >
      <MultisessionAppSupport>
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
      </MultisessionAppSupport>
    </ClerkProvider>
  </React.StrictMode>
);
