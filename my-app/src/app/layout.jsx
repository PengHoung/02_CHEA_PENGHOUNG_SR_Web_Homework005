import NavComponent from "./component/NavComponent";
import { BookmarkProvider } from "./context/BookMarkContext";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0f1117] text-gray-300 flex-col h-screen">
        <BookmarkProvider>
          <NavComponent/>
          {children}
        </BookmarkProvider>
      </body>
    </html>
  );
}