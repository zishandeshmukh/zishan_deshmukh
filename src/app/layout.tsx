import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zishan Deshmukh | Mechanical Engineer & Robotics Expert",
  description: "Professional portfolio of Zishan Deshmukh - Mechanical Engineering student specializing in Drone Systems, Embedded Controls, and Robotics. Expert in KK2.1.5, APM 2.5, Mission Planner, MATLAB, and CAD.",
  keywords: ["Mechanical Engineer", "Drone Expert", "Robotics", "Embedded Systems", "UAV", "Flight Controllers", "MATLAB", "CAD"],
  authors: [{ name: "Zishan Deshmukh" }],
  openGraph: {
    title: "Zishan Deshmukh | Mechanical Engineer & Robotics Expert",
    description: "Professional portfolio showcasing expertise in Drone Systems, Embedded Controls, and Robotics",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased bg-[#030712] text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
