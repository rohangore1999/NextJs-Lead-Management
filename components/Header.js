import React from "react";
import {
  BoltIcon,
  ChartPieIcon,
  HomeIcon,
  LinkIcon,
  MagnifyingGlassIcon,
  SpeakerWaveIcon,
  TrophyIcon,
  UserIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

function Header() {
  // to get session if we logged in

  // const { data: session } >> renaming data by session
  const { data: session } = useSession();

  // buildin nextjs router
  const router = useRouter();

  return (
    <div className="flex bg-white px-4 py-2 shadow-md sticky top-0 z-50 justify-between items-center">
      {/* icons */}
      <div
        onClick={() => router.push("/")}
        className={
          router.pathname == "/"
            ? "flex items-center mx-7 cursor-pointer text-xs font-bold scale-110"
            : "flex items-center mx-7 cursor-pointer text-xs font-light hover:scale-110 transistion transform ease-out duration-150 active:scale-90"
        }
      >
        <HomeIcon className="h-5 w-5" />
        <p className=" ml-2 hidden lg:inline">Home</p>
      </div>

      <div
        onClick={() => router.push("/prioritized")}
        className={
          router.pathname == "/prioritized"
            ? "flex items-center mx-7 cursor-pointer text-xs font-bold scale-110"
            : "flex items-center mx-7 cursor-pointer text-xs font-light hover:scale-110 transistion transform ease-out duration-150 active:scale-90"
        }
      >
        <BoltIcon className="h-5 w-5" />
        <p className=" ml-2 hidden lg:inline">Prioritized</p>
      </div>

      <div
        onClick={() => router.push("/accounts")}
        className={
          router.pathname == "/accounts"
            ? "flex items-center mx-7 cursor-pointer text-xs font-bold scale-110"
            : "flex items-center mx-7 cursor-pointer text-xs font-light hover:scale-110 transistion transform ease-out duration-150 active:scale-90"
        }
      >
        <UserIcon className="h-5 w-5" />
        <p className=" ml-2 hidden lg:inline">Accounts</p>
      </div>

      <div
        onClick={() => router.push("/leads")}
        className={
          router.pathname == "/leads"
            ? "flex items-center mx-7 cursor-pointer text-xs font-bold scale-110"
            : "flex items-center mx-7 cursor-pointer text-xs font-light hover:scale-110 transistion transform ease-out duration-150 active:scale-90"
        }
      >
        <UserPlusIcon className="h-5 w-5" />
        <p className=" ml-2 hidden lg:inline">Leads</p>
      </div>

      <div
        onClick={() => router.push("/campaingns")}
        className={
          router.pathname == "/campaingns"
            ? "flex items-center mx-7 cursor-pointer text-xs font-bold scale-110"
            : "flex items-center mx-7 cursor-pointer text-xs font-light hover:scale-110 transistion transform ease-out duration-150 active:scale-90"
        }
      >
        <SpeakerWaveIcon className="h-5 w-5" />
        <p className=" ml-2 hidden lg:inline">Campaingns</p>
      </div>

      <div
        onClick={() => router.push("/opportunity")}
        className={
          router.pathname == "/opportunity"
            ? "flex items-center mx-7 cursor-pointer text-xs font-bold scale-110"
            : "flex items-center mx-7 cursor-pointer text-xs font-light hover:scale-110 transistion transform ease-out duration-150 active:scale-90"
        }
      >
        <TrophyIcon className="h-5 w-5" />
        <p className=" ml-2 hidden lg:inline">Opportunity</p>
      </div>

      {/* Search box */}
      <form className="hidden lg:flex w-1/5 items-center space-x-2 border rounded-sm px-3 py-1 shadow-md">
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
        <input
          className="flex flex-1 outline-none rounded-md"
          type={"text"}
          placeholder="Search"
        />
        {/* its hidden and when submit value submit */}
        <button type="submit" hidden />
      </form>

      {/* sign in/out */}
      {session ? (
        // if we already signed in then signout logic below
        <div
          className="flex items-center space-x-2 border-gray-100 p-2 cursor-pointer "
          onClick={() => signOut()}
        >
          {/* Profile Pic */}
          <img
            src={session?.user?.image}
            className="h-10 w-10 rounded-full cursor-pointer  object-contain"
            alt="Profile Pic"
          />

          {/* Title */}
          <div className="flex-1 text-xs">
            <p className="truncate">{session?.user?.name}</p>
            <p className="text-gray-400">{session?.user?.email}</p>
          </div>
        </div>
      ) : (
        // if we already signed out then signin logic below
        <div
          className="flex items-center space-x-2 border-gray-100 p-2 cursor-pointer "
          onClick={() => signIn()}
        >
          <p className="text-gray-500">Sign In</p>
        </div>
      )}
    </div>
  );
}

export default Header;
