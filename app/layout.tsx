import React from 'react';
import './globals.css';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

// Define metadata for the app
export const metadata = {
  title: 'RAG LLM Website',
  description: 'A RAG-powered LLM for financial statement insights',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className="flex min-h-screen">
        {/* Sidebar for large screens */}
        <Sidebar />
        <div className="flex-1">
          {/* Navbar for small/medium screens */}
          <Navbar />
          {/* Main content */}
          <main className="p-5">{children}</main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
