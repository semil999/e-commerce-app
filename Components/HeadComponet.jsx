import Head from "next/head";

const HeadComponet = ({title}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images.png" />
      </Head>
    </>
  );
};

export default HeadComponet;
