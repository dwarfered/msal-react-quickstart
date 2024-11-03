import { ReactNode } from "react";
import { MsalProvider } from "@azure/msal-react";
import { msalInstance } from "@/lib/msalConfig";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  return <MsalProvider instance={msalInstance}>{children}</MsalProvider>;
};