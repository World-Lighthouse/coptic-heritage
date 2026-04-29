import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { LatticePattern } from "../ornaments/LatticePattern";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="layout">
      <div className="layout__top-pattern" aria-hidden="true">
        <LatticePattern />
      </div>
      <Header />
      <main className="layout__main" id="main">
        {children}
      </main>
      <Footer />
    </div>
  );
}
