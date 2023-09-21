import { Toaster } from 'react-hot-toast';
import Navbar from './auth/Navbar';
import QueryWrapper from './auth/QueryWrapper';
import './globals.css';
import { Metadata } from 'next';
import LoadingBar from './components/LoadingBar';

export const metadata: Metadata = {
  title: {
    template: '%s | ThoughtHub ',
    default: 'ThoughtHub',
  },
  description: 'A thoughts sharing app.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col gap-7 bg-white containerLayout rounded-lg min-h-screen relative shadow-lg">
          <QueryWrapper>
            <LoadingBar />
            <Navbar />
            <Toaster />
            {children}
          </QueryWrapper>
        </div>
      </body>
    </html>
  );
}
