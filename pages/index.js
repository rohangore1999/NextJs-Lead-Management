import { getSession } from "next-auth/react";
import PrioritiseWorkList from "../components/PrioritiseWorkList";
import StatisticCard from "../components/StatisticCard";
import TableSplit from "../components/TableSplit";

export default function Home() {
  return (
    <div>
      {/* Top Summary */}
      <StatisticCard />

      {/* LEFT SIDE */}
      {/* Pipeline Industry Percentage Split (80) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 p-4 gap-4">
        {/*  */}
        <TableSplit />

        <PrioritiseWorkList />
      </div>

      {/* RIGHT SIDE - TODO */}
    </div>
  );
}

// USING SERVER SIDE RENDERING - to get user from server side
// export async function getServerSideProps(context) {
//   // to load session on server side
//   const session = await getSession(context);
//   console.log(session);

//   if (!session) {
//     return {
//       redirect: {
//         destination: "http://localhost:3000/auth/signin",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       session,
//     },
//   };
// }
