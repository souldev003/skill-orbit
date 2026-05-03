"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "react-toastify";

export default function ToastHandler() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const action = searchParams.get("action");
    if (action === "enroll") {
      toast.success("Successfully logged in! You are now enrolled.");

      const newUrl = window.location.pathname;
      window.history.replaceState({}, "", newUrl);
    }
  }, [searchParams]);

  return null;
}
