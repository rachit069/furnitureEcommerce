// 📁 src/hooks/use-toast.js
import { toast as sonnerToast } from 'sonner';

export const useToast = () => {
  return {
    toast: ({ title, description, variant }) =>
      sonnerToast(variant === 'destructive' ? title : description, {
        description: variant === 'destructive' ? description : undefined,
        className: variant === 'destructive' ? 'bg-red-500 text-white' : '',
      }),
  };
};
