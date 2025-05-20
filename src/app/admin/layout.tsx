import HeaderAdmin from "./components/headerAdmin";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
        <body className="admin-page">
            <HeaderAdmin/>
            {children}
        </body>
    </html>
  );
}
