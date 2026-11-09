'use client';

import { useState } from 'react';
import Header from '../components/section/Header';
import Footer from '../components/section/Footer';
import QRGenerate from '../components/section/QRGenerate';
import About from '../components/section/About';
import FAQ from '../components/section/FAQ';

export default function Home() {
  const [dark, setDark] = useState(false);

  return (
    <div
      style={{
        minHeight: '100vh',
        background: dark ? '#fff' : '#000',
        position: 'relative',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      <div
        className="theme-grid-bg"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          pointerEvents: 'none',
          backgroundImage:
            dark
              ? `repeating-linear-gradient(0deg, #e0e0e0 0px, #e0e0e0 1px, transparent 1px, transparent 64px), repeating-linear-gradient(90deg, #e0e0e0 0px, #e0e0e0 1px, transparent 1px, transparent 64px)`
              : `repeating-linear-gradient(0deg, #222 0px, #222 1px, transparent 1px, transparent 64px), repeating-linear-gradient(90deg, #222 0px, #222 1px, transparent 1px, transparent 64px)`,
        }}
      />
      <style jsx>{`
        @media (max-width: 768px) {
          .theme-grid-bg {
            display: none;
          }
        }
      `}</style>
      <Header dark={dark} setDark={setDark} />
      <main>
        <QRGenerate dark={dark} />
        <About dark={dark} />
        <FAQ dark={dark} />
      </main>
      <Footer dark={dark} />
    </div>
  );
}