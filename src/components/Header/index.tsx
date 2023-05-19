import { Container } from "./styles";

import logoImg from "@/assets/logo.svg";
import { useCart } from "@/hooks/Cart";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Handbag } from "phosphor-react";

interface HeaderProps {
  justLogo?: boolean;
}

export function Header({ justLogo = false }: HeaderProps) {
  const { toggleCart, cart } = useCart();
  const { pathname } = useRouter();

  return (
    <Container justLogo={justLogo}>
      <Link href={"/"}>
        <Image src={logoImg} alt="Logo da ignite shop" />
      </Link>

      <button type="button" onClick={() => toggleCart(false)}>
        <Handbag />
        {cart.length > 0 && <span className="badge">{cart.length}</span>}
      </button>
    </Container>
  );
}
