import "./globals.css";
import type { Metadata } from "next";
import RequestButton from "@/components/RequestButton";
import AssetModal from "@/components/AssetModal";

// TODO: Implement error boundary (core requirement)
// TODO: Implement loading states (core requirement)

export const metadata: Metadata = {
  title: "Asset Library",
  description: "Browse and request internal assets",
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <html lang="en">
      <body className="bg-[#f5f5f5] text-gray-900 font-sans relative">
        <div className="fixed top-6 right-6 z-50">
          <RequestButton />
        </div>
        <AssetModal />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
