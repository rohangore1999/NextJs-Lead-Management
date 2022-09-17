import React from "react";
import { getProviders } from "next-auth/react";
import SignIn from "../../components/SignIn";

function signIn({ providers }) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <SignIn key={provider.name} provider={provider} />
      ))}
    </>
  );
}

// USING SERVER SIDE RENDERING - to get providers from nextauth
export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: { providers },
  };
}

export default signIn;
