import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLenis } from "@/hooks/useLenis";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Loader } from "@/components/layout/Loader";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { ScrollProgressBar } from "@/components/layout/ScrollProgressBar";
import { FloatingButtons } from "@/components/layout/FloatingButtons";

export function RootLayout() {
  useLenis();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ivory text-inkdark">
      <Loader />
      <CustomCursor />
      <ScrollProgressBar />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
