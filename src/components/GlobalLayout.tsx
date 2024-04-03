import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function GlobalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>
        <div className="flex flex-col justify-between min-h-screen bg-softOpal dark:bg-navySmoke">
          <Navbar />
          <main className="h-full flex flex-col flex-grow bg-softOpal dark:bg-navySmoke">
            {children}
          </main>
          <Footer/>
        </div>
      </div>
    </>
  );
}