import React, { useEffect, useState } from "react";
import axios from "axios";
import { getSession } from "next-auth/react";
import TableOpportunity from "../components/TableOpportunity";

function oportunity({ data }) {
  const [opportunityData, setOpportunity] = useState(data);
  const [statusCode, setStatusCode] = useState(0);

  useEffect(() => {
    (async function fetchData() {
      let res = await axios.post(
        "https://5106-106-51-91-104.in.ngrok.io/v1/opportunity/search",
        {
          method: "POST",
          body: {},
        }
      );
      let data = res.data;
      setOpportunity(data);
    })();
  }, [statusCode]);

  return (
    <div>
      <TableOpportunity data={opportunityData} setStatusCode={setStatusCode} />
    </div>
  );
}

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
    "https://5106-106-51-91-104.in.ngrok.io/v1/opportunity/search",
    {
      method: "POST",
      body: {},
    }
  );
  let data = res.data;

  // Pass data to the page via props
  return { props: { data } };
}

export default oportunity;
