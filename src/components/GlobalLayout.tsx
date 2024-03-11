import React from 'react';
// import dynamic from 'next/dynamic';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// const Navbar = dynamic(() => import('../components/Navbar'), { ssr: false });
// const Footer = dynamic(() => import('../components/Footer'), { ssr: false });

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