import { useUser } from "@auth0/nextjs-auth0";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { PageLayout } from "../components";

export default function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <PageLayout>
        <Head>
          <title>Hackeando a Vigilância</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </PageLayout>
    )
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["navbar", "footer"])),
    },
  };
}
