import Nav from "@components/Nav";
import "@styles/globals.css";

export const metadata = {
  title: "Vrundavan",
  description: "Discover and Share Tech",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="">
          <div className="gradient"></div>
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}
