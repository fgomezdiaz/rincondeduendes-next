"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollToTopOnMarcaChange() {
  const pathname = usePathname();
  useEffect(() => {
    if (pathname.startsWith("/juguetes/marca/")) {
      window.scrollTo({ top: 0 });
    }
  }, [pathname]);
  return null;
} 