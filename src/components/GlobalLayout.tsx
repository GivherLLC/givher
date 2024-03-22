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
        <div className="flex flex-col justify-between min-h-screen bg-off-white dark:bg-dark-blue">
          <Navbar />
          <main className="block min-h-[100vh - 291px] bg-off-white dark:bg-dark-blue">
            {children}
          </main>
          <Footer/>
        </div>
      </div>
    </>
  );
}