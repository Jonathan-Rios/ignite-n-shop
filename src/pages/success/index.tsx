import Link from "next/link";
import Image from "next/image";

import { ImageContainer, SuccessContainer } from "@/styles/pages/success";
import { GetServerSideProps } from "next";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import Head from "next/head";
import { Header } from "@/components/Header";

interface SuccessProps {
  customerName: string;
  products: {
    name: string;
    imageUrl: string;
  }[];
}

export default function Success({ customerName, products }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
        {
          // ? Não indexar essa página
        }
      </Head>

      <Header justLogo />

      <SuccessContainer>
        <h1>Compra efetuada!</h1>

        <section>
          {products &&
            products.map((product) => (
              <ImageContainer key={product.name}>
                <Image
                  src={product.imageUrl}
                  width={120}
                  height={110}
                  alt={product.name}
                />
              </ImageContainer>
            ))}
        </section>

        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de{" "}
          <strong>{products.length}</strong> já está a caminho da sua casa.
        </p>

        <Link href="/">Voltar ao catalogo</Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  query,
  params,
}) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
        // ? Se permanent for definido como true, significa que o redirecionamento
        // ? é permanente e os motores de busca como Google considerarão a nova página
        // ? como a nova página oficial para aquela rota.

        // ? Por outro lado, se permanent for definido como false
        // ? (como no exemplo de código fornecido), o redirecionamento será
        // ? temporário e o motor de busca continuará a considerar a página
        // ? antiga como a oficial.
      },
    };
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const customerName = session?.customer_details?.name;
  /*   const product = session?.line_items?.data[0]?.price
    ?.product as Stripe.Product; */

  const products = session?.line_items?.data.map(
    (item) => item!.price!.product as Stripe.Product
  );

  const formattedProducts = products!.map((product) => {
    return {
      name: product.name,
      imageUrl: product.images[0],
    };
  });

  return {
    props: {
      customerName,
      products: formattedProducts,
    },
  };
};
