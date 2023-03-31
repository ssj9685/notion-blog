import Header from "@/components/Header/Header";
import "./globals.css";
import Providers from "./Providers";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <div className="max-w-6xl mx-auto">{children}</div>
        </Providers>
        <Header />
      </body>
    </html>
  );
}
