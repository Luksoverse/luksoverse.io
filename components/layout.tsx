import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";
import { Analytics } from "@vercel/analytics/react";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
        <Analytics />
      </div>
      <Footer />
    </>
  );
}
