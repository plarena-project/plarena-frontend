import '../styles/globals.css';
import Navbar from '../components/navbar';

export const metadata = {
  title: 'Plarena Sport',
  description: 'Booking lapangan olahraga Plarena',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
