import Profil from "@/components/layout/Profil";
import Header from "@/components/layout/Header";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="big-cadr">
          <Profil />
            <main className="main-content">
              {children}
            </main>
        </div>
      </body>
    </html>
  );
}
