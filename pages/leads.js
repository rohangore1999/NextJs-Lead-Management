import axios from "axios";
import { getSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import TableLeads from "../components/TableLeads";

function leads({ data }) {
  const [leadData, setLeadsData] = useState(data);
  const [statusCode, setStatusCode] = useState(0);

  useEffect(() => {
    (async function fetchData() {
      let res = await axios.post(
        "https://5106-106-51-91-104.in.ngrok.io/v1/opportunity/lead",
        {
          method: "POST",
        }
      );
      let data = res.data;

      setLeadsData(data);
    })();
  }, [statusCode]);

  return (
    <div>
      <TableLeads data={leadData} setStatusCode={setStatusCode} />
    </div>
  );
}

// // This gets called on every request
export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "http://localhost:3000/auth/signin",
        permanent: false,
      },
    };
  }
  // Fetch data from external API
  let res = await axios.post(
    "https://5106-106-51-91-104.in.ngrok.io/v1/opportunity/lead",
    {
      method: "POST",
    }
  );
  let data = res.data;

  // Pass data to the page via props
  return { props: { data } };
}

export default leads;
