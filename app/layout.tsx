import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ui/common/header";
import Footer from "@/components/ui/common/footer";
import { ClerkProvider } from "@clerk/nextjs";

// export const metadata: Metadata = {
//   title: " iBuiltThis - Share Your Creations, Discover New Launches",
//   description:
//     "A community platform for creators to showcase their apps, AI tools, SaaS products, and creative projects. Authentic launches, real builders, genuine feedback.",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        style={{
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Outfit', sans-serif",
        }}
      >
        <body className="antialiased">
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
