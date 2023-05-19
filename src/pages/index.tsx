import { HomeContainer, Product } from "@/styles/pages/home";

import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { GetStaticProps } from "next";

import { useKeenSlider } from "keen-slider/react";

import "keen-slider/keen-slider.min.css";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import { Handbag } from "phosphor-react";
import { useCart } from "@/hooks/Cart";
import { useEffect } from "react";
import { Header } from "@/components/Header";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[];
}

export default function Home({ products }: HomeProps) {
  const { addItemToCart, setProductList } = useCart();

  useEffect(() => {
    setProductList(products);
  }, [products]);

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2.3,
      spacing: 48,
    },
  });

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <Header />

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => (
          // ? prefetch={false} faz com que o next não pre-carregue só por existir o link,
          // ? mas o hover ainda funciona para pre-carregar.
          <Link
            href={`/product/${product.id}`}
            key={product.id}
            prefetch={false}
          >
            <Product className="keen-slider__slide">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={520}
                height={480}
              />

              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <p>{product.price}</p>
                </div>

                <span>
                  <Handbag />
                </span>
              </footer>
            </Product>
          </Link>
        ))}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(price.unit_amount! / 100),
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 horas
  };
};
