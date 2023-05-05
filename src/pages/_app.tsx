import type { AppProps } from "next/app";
import { globalStyles } from "@/styles/global";

globalStyles();

import logoImg from "../assets/logo.svg";
import { Container, Header } from "@/styles/pages/apps";

import Image from "next/image";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="Logo da ignite shop" />
      </Header>

      <Component {...pageProps} />
    </Container>
  );
}
