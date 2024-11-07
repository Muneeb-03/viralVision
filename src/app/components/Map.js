"use client";
import { useEffect, useState } from "react";

export const Map = (props) => {
  const [Client, setClient] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      (async () => {
        const newClient = (await import("./MapClient")).default;
        setClient(() => newClient);
      })();
    }
  }, []);

  return Client ? <Client {...props} /> : null;
};
