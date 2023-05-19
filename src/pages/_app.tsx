import type { AppProps } from "next/app";
import { globalStyles } from "@/styles/global";

globalStyles();

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Container } from "@/styles/pages/apps";
import { Header } from "@/components/Header";
import { Cart } from "@/components/Cart";
import { CartProvider } from "@/hooks/Cart";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Container>
        <Component {...pageProps} />

        <Cart />

        <ToastContainer />
      </Container>
    </CartProvider>
  );
}
