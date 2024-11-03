"use client";
import { useEffect, useState } from 'react';

export const Map = (props) => {
  const [Client, setClient] = useState(null);

  useEffect(() => {
    (async () => {
      if (typeof window !== 'undefined') {
        const newClient = (await import('./MapClient')).default;
        setClient(() => newClient);
      }
    })();
  }, []);

  if (typeof window === 'undefined' || !Client) {
    return null;
  }

  return Client ? <Client {...props} /> : null;
};
