import { FC } from 'react';
import { Head as HeadComponent } from 'next/document';

const Head: FC = () => (
  <HeadComponent lang="pt-BR">
    <title>Localiza | Aluguel de carros com a maior frota do Brasil</title>
    <meta
      name="title"
      content="Localiza | Aluguel de carros com a maior frota do Brasil"
    />
    <meta name="description" content="Já pensou em alugar um carro hoje?" />

    <link rel="shortcut icon" href="/images/favicon.jpg" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://localiza.vercel.app/" />
    <meta
      property="og:title"
      content="Localiza | Aluguel de carros com a maior frota do Brasil"
    />
    <meta
      property="og:description"
      content="Já pensou em alugar um carro hoje?"
    />
    <meta
      property="og:image"
      content="https://localiza.vercel.app/images/og-image.png"
    />

    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://localiza.vercel.app/" />
    <meta
      property="twitter:title"
      content="Localiza | Aluguel de carros com a maior frota do Brasil"
    />
    <meta
      property="twitter:description"
      content="Já pensou em alugar um carro hoje?"
    />
    <meta
      property="twitter:image"
      content="https://localiza.vercel.app/images/og-image.png"
    />
  </HeadComponent>
);

export default Head;
