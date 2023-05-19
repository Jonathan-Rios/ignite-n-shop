import { Container } from "./styles";

import Image from "next/image";

import { IProduct, useCart } from "@/hooks/Cart";

interface ProductProps {
  product: IProduct | undefined;
}

export function Product({ product }: ProductProps) {
  const { removeItemToCart } = useCart();

  return (
    <Container>
      {product ? (
        <>
          <span>
            <Image
              src={product.imageUrl}
              alt="produto"
              width={80}
              height={80}
            />
          </span>

          <div>
            <h4>{product.name}</h4>
            <h3>{product.price}</h3>

            <button onClick={() => removeItemToCart(product.id)}>
              Remover
            </button>
          </div>
        </>
      ) : (
        <>Não encontrado</>
      )}
    </Container>
  );
}
