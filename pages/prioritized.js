import axios from "axios";
import { getSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import Prioritized_Account_Table from "../components/Prioritized_Account_Table";
import Prioritized_Lead_Table from "../components/Prioritized_Lead_Table";
import Prioritized_LOB_Table from "../components/Prioritized_LOB_Table";
import Prioritized_Product_Table from "../components/Prioritized_Product_Table";

function prioritized() {
  const [toggleState, setToggleState] = useState(1);
  const [leadData, setLeadsData] = useState();
  const [statusCode, setStatusCode] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  useEffect(() => {
    (async function fetchData() {
      let res = await axios.post(
        "https://5106-106-51-91-104.in.ngrok.io/v1/opportunity/search/",
        {
          method: "POST",
        }
      );
      let data = res.data;

      setLeadsData(data);
    })();
  }, [statusCode]);

  return (
    <div className="bg-white w-full">
      <nav className="flex flex-col sm:flex-row border-b">
        <button
          onClick={() => toggleTab(1)}
          className={
            toggleState === 1
              ? "py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500"
              : "text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none font-medium"
          }
        >
          Account Level
        </button>

        <button
          className={
            toggleState === 2
              ? "py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500"
              : "text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none font-medium"
          }
          onClick={() => toggleTab(2)}
        >
          Lead Level
        </button>

        <button
          className={
            toggleState === 3
              ? "py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500"
              : "text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none font-medium"
          }
          onClick={() => toggleTab(3)}
        >
          Product Level
        </button>

        <button
          onClick={() => toggleTab(4)}
          className={
            toggleState === 4
              ? "py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500"
              : "text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none font-medium"
          }
        >
          LOB Level
        </button>
      </nav>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "hidden"}
        >
          <Prioritized_Account_Table />
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "hidden"}
        >
          <Prioritized_Lead_Table data={leadData} />
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "hidden"}
        >
          <Prioritized_Product_Table />
        </div>

        <div
          className={toggleState === 4 ? "content  active-content" : "hidden"}
        >
          <Prioritized_LOB_Table />
        </div>
      </div>
    </div>
  );
}

// USING SERVER SIDE RENDERING - to get user from server side
export async function getServerSideProps() {
  // Fetch data from external API
  let res = await axios.post(
    "https://5106-106-51-91-104.in.ngrok.io/v1/opportunity/search/",
    {
      method: "POST",
    }
  );
  let data = res.data;

  // Pass data to the page via props
  return { props: { data } };
}

export default prioritized;
