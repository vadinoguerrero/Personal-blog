import { useState } from 'react';

export default function useToast() {
  const [toast, setToast] = useState(null);

  function showToast(message, duration = 3000) {
    setToast(message);

    setTimeout(() => {
      setToast(null);
    }, duration);
  }

  return { toast, showToast };
}
