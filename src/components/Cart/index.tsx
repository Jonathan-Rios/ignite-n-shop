import { Container } from "./styles";
import { IProduct, useCart } from "@/hooks/Cart";
import { X } from "phosphor-react";
import { Product } from "./Product";
import { useEffect, useState } from "react";
import axios from "axios";
import { currencyBRLFormat } from "@/utils/format";

export function Cart() {
  const { isCartOpen, toggleCart, cart } = useCart();
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState<boolean>(false);

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true);

      const productList = cart.map((product) => product.defaultPriceId);

      // ? por ser uma requisição para a própria API, não precisamos passar a URL completa, somente o caminho.
      const response = await axios.post("/api/checkout", {
        productList,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (error) {
      // O certo, seria conectar com uma ferramenta de observabilidade, como o Sentry, DataDog e etc.

      setIsCreatingCheckoutSession(false);
      console.log(`-handleBuyProduct:ERROR------------`, error);
      alert("Falha ao redirecionar para o checkout");
    }
  }

  function getValue() {
    return cart.reduce((acc, product) => {
      return acc + Number(product.unit_amount);
    }, 0);
  }
  return (
    <Container open={isCartOpen}>
      <div className="header">
        <h3>Sacola de compras</h3>

        <button onClick={() => toggleCart(false)}>
          <X />
        </button>
      </div>

      <section>
        {cart.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </section>

      <footer>
        <div>
          <p>Quantidade</p>
          <p>{cart.length} itens</p>
        </div>

        <div className="total">
          <strong>Valor total</strong>
          <h2>{currencyBRLFormat.format(getValue())}</h2>
        </div>

        <button type="button" onClick={handleBuyProduct}>
          Finalizar Compra
        </button>
      </footer>
    </Container>
  );
}
