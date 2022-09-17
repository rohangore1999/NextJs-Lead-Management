import React from "react";
import { signIn as SignIntoProvider } from "next-auth/react";
import Image from "next/image";

function SignIn({ provider }) {
  return (
    <div className="relative flex h-full w-full">
      <div className="h-screen w-1/2 bg-black">
        <div className="mx-auto flex h-full w-2/3 flex-col justify-center text-white xl:w-1/2">
          <div>
            <p className="text-2xl">Login</p>
            <p>please login to continue</p>
          </div>
          <div className="my-6">
            <button
              className="flex w-full justify-center rounded-3xl border-none bg-white p-1 text-black hover:bg-gray-200 sm:p-2"
              onClick={() =>
                SignIntoProvider(provider.id, {
                  callbackUrl: "http://localhost:3000/",
                })
              }
            >
              <div className="relative h-6 w-10 flex-shrink-0 cursor-pointer">
                <Image
                  alt="google-icon"
                  src="https://freesvg.org/img/1534129544.png"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-1/3 mb-auto ml-auto mr-auto">
        <img src="/Generating new leads-amico.png" />
        <h1 className="text-4xl font-bold mt-auto text-left">Lead Shake</h1>
        <span className="mt-5 font-light">WE ANALYSE - WE PRIORTIZE</span>
        <span className="font-light">
          YOU JUST <span className="text-green-500">CAPITALIZE</span>
        </span>
      </div>
    </div>
  );
}

export default SignIn;
