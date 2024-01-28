import { validateToken } from "@/api/authApi";
import Toast from "@/components/Toast";
import { ToastMessage } from "@/types/toastMessage";
import { useQuery } from "@tanstack/react-query";
import React, { createContext, useContext, useState } from "react";

type AppContext = {
  showToast: (toastMessage: ToastMessage) => void;
  isLoggedIn: boolean;
};

const AppContext = createContext<AppContext | undefined>(undefined);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [toast, setToast] = useState<ToastMessage | undefined>(undefined);

  const { isError } = useQuery({
    queryKey: ["uservalidation"],
    queryFn: validateToken,
  });

  return (
    <AppContext.Provider
      value={{
        showToast: (toastMessage) => setToast(toastMessage),
        isLoggedIn: !isError,
      }}
    >
      {toast && (
        <Toast
          message={toast?.message}
          type={toast?.type}
          onClose={() => setToast(undefined)}
        />
      )}
      {children}
    </AppContext.Provider>
  );
};

export const useHotelContext = () => {
  const context = useContext(AppContext);
  return context as AppContext;
};
