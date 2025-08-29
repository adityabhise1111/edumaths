"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ConditionalLayout = ({ children }) => {
  const pathname = usePathname();
  
  // Don't show Navbar and Footer on dashboard pages
  const isDashboardPage = pathname.startsWith('/dashboard');
  
  return (
    <>
      {!isDashboardPage && <Navbar />}
      {children}
      {!isDashboardPage && <Footer />}
    </>
  );
};

export default ConditionalLayout;
