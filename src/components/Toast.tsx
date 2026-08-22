import React, { createContext, useContext, useState, useCallback } from 'react';
import { Check, Copy } from 'lucide-react';

interface ToastContextType {
  showToast: (message: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = useCallback((message: string) => {
    setToastMessage(message);
    const timer = setTimeout(() => {
      setToastMessage(null);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-20 sm:bottom-8 start-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-4 py-2.5 bg-[#171513] text-[#F3EEE6] border border-[#D8B477] shadow-2xl animate-in fade-in slide-in-from-bottom-3 duration-200 text-xs sm:text-sm font-medium tracking-wide pointer-events-none rounded-none"
        >
          <span className="w-5 h-5 rounded-full bg-[#D8B477] text-[#211D1A] flex items-center justify-center shrink-0">
            <Check size={12} strokeWidth={3} />
          </span>
          <span>{toastMessage}</span>
        </div>
      )}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
