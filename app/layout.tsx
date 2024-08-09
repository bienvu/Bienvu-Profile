import type { Metadata } from "next";

import "./globals.css";
import Root from "./components/Root";

export const metadata: Metadata = {
  title: "Bienvu Profile",
  description: "Welcome to visit my profile",
};

const RootApp = ({ children }: { children: React.ReactNode }) => {
  return <Root>{children}</Root>;
};

export default RootApp;

// export default function RootLayout({
//   children
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" className='h-full antialiased js-focus-visible'>
//       <body className="flex flex-col h-full bg-zinc-50 dark:bg-zinc-900 dark:scrollbar-thumb-violet-700 scrollbar-thin scrollbar-thumb-violet-400 scrollbar-track-violet-300 dark:scrollbar-track-violet-800">
//         <>
//           <Header />
//           <main className="max-w-2xl mx-auto lg:max-w-5xl">
//             {children}
//           </main>
//           <Footer />
//         </>
//       </body>
//     </html>
//   )
// }
