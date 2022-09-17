import React, { useEffect, useState } from "react";
import axios from "axios";

function PrioritiseWorkList() {
  const [statusCode, setStatusCode] = useState(0);
  const [data, setDatas] = useState({});

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
      setDatas(data);
    })();
  }, [statusCode]);

  const opportunityMap = {
    QUALIFICATION: "20%",
    DISQUALIFIED: "0",
    NO_RESPONSE: "20%",
    PITCHED: "50%",
    FOLLOW_UP_REQUIRED: "60%",
    AGREEMENT: "80%",
    ONBOARD: "90%",
    CLOSED_WON: "0%",
    CLOSED_LOST: "0%",
  };

  return (
    <div className="w-full overflow-hidden rounded-lg shadow-xs">
      <div className="w-full overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50">
              <th className="px-4 py-3">Account</th>
              <th className="px-4 py-3">Opportunity</th>
              <th className="px-4 py-3">Stage</th>
              <th className="px-4 py-3">Score</th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y">
            {Object.keys(data).map((row) => (
              <tr
                key={row}
                className="bg-gray-50 hover:bg-gray-100 text-gray-700"
              >
                <td className="px-4 py-3">
                  <div className="flex items-center text-sm">
                    <div>
                      <p className="font-semibold">{data[row].email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm">{data[row].product}</td>
                <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 w-1/3">
                  <div className="flex items-center">
                    <span className="mr-2">
                      {opportunityMap[data[row].stage]}
                    </span>
                    {/* <div className="relative w-full">
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                        <div
                          className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600 w-[${
                            opportunityMap[data[row].stage]
                          }]`}
                        ></div>
                      </div>
                    </div> */}
                  </div>
                </td>

                <td className="px-4 py-3">
                  <div className="flex items-center text-sm">
                    <div>
                      <p className="font-semibold">{data[row].score}</p>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t bg-gray-50 sm:grid-cols-9">
        <div className="relative w-full max-w-full flex-grow flex-1 text-right">
          <button
            className="bg-blue-500 text-white active:bg-blue-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            See all
          </button>
        </div>
      </div>
    </div>
  );
}

export default PrioritiseWorkList;
