import '../styles/globals.css';

export const metadata = {
  title: 'Plarena Sport',
  description: 'Booking lapangan olahraga Plarena',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}