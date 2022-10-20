import Head from "next/head";

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        <div>{children}</div>
      </main>
    </>
  );
};

export default Layout;
