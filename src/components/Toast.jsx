import React, { useEffect } from 'react';
import { CheckCircle2, AlertTriangle, Info, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [toast, onClose]);

  if (!toast) return null;

  const isSuccess = toast.type === 'success';
  const isError = toast.type === 'error';
  const isInfo = toast.type === 'info';

  const bgStyles = isSuccess
    ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
    : isError
    ? 'bg-rose-50 border-rose-200 text-rose-900'
    : 'bg-blue-50 border-blue-200 text-blue-900';

  const Icon = isSuccess ? CheckCircle2 : isError ? AlertTriangle : Info;
  const iconColor = isSuccess ? 'text-emerald-500' : isError ? 'text-rose-500' : 'text-blue-500';

  return (
    <div className="fixed bottom-5 right-5 z-50 transition-all duration-300 transform translate-y-0 max-w-sm w-full px-4">
      <div className={`flex items-start gap-3 p-4 rounded-xl border shadow-lg ${bgStyles} backdrop-blur-sm`}>
        <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${iconColor}`} />
        <div className="flex-1 text-sm font-medium">{toast.message}</div>
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-slate-700 transition-colors p-0.5 rounded-lg"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
