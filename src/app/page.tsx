"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SomePage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/public/home");
  }, []);

  return <div>Redirecting...</div>;
}
