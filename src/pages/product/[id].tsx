import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";

import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "@/styles/pages/product";

import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import { useRouter } from "next/router";
import axios from "axios";
import { useState } from "react";
import Head from "next/head";

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
    defaultPriceId: string;
  };
}

export default function Product({ product }: ProductProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState<boolean>(false);

  const { isFallback } = useRouter();

  if (isFallback) {
    return <p>Carregando...</p>;
  }

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true);

      // ? por ser uma requisição para a própria API, não precisamos passar a URL completa, somente o caminho.
      const response = await axios.post("/api/checkout", {
        priceId: product.defaultPriceId,
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

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image
            src={product.imageUrl}
            width={520}
            height={480}
            alt={product.name}
          ></Image>
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>
          <p>{product.description}</p>

          <button
            disabled={isCreatingCheckoutSession}
            onClick={handleBuyProduct}
          >
            Comprar agora
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  /** 
  * ? Visando que temos que adicionar alguns produtos, e se passar demoraria horas para gerar todas as páginas estáticas,
  * ? podemos usar adicionar somente as mais vendidas, ou as mais acessadas, ou as mais recentes, etc.

  * ? Caso não tiver a informação, podemos usar o fallback: true, que vai gerar as páginas estáticas conforme o usuário acessa-las.
  * ? Só sendo importante fazer uma tratativa de loading para o usuário não ficar esperando a página carregar.
  **/

  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const paths = response.data.map((product) => ({
    params: {
      id: product.id,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params?.id;

  if (productId === undefined) {
    return { props: {} };
  }

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        description: product.description,
        price: new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(price.unit_amount! / 100),
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hours
  };
};
