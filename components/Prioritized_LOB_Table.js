import axios from "axios";
import React, { useEffect, useState } from "react";

function Prioritized_LOB_Table() {
  const [datas, setDatas] = useState({});
  const [showModal, setShowModal] = useState(false);

  const [toggleState, setToggleState] = useState(1);
  const [data, setLobData] = useState({});
  const [statusCode, setStatusCode] = useState(0);

  useEffect(() => {
    (async function fetchData() {
      let res = await axios.post(
        "https://5106-106-51-91-104.in.ngrok.io/v1/opportunity/account/",
        {
          method: "POST",
        }
      );
      let data = res.data;

      setLobData(data);
    })();
  }, [statusCode]);

  return (
    <div className="overflow-x-auto">
      <div className="bg-gray-100 min-h-screen flex justify-center font-sans overflow-hidden">
        <div className="w-full lg:w-5/6">
          <div className="bg-white shadow-md rounded my-6">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-200 text-gray-600 text-xs leading-normal">
                  <th className="py-3 px-3 text-center">Line of Business</th>
                  <th className="py-3 px-3 text-center">Account Name</th>
                  <th className="py-3 px-3 text-center">Account Owner</th>
                  <th className="py-3 px-3 text-center">Score</th>
                </tr>
              </thead>

              {/* body */}
              <tbody className="text-gray-600 text-sm font-light">
                {Object.keys(data).map((row) => (
                  <tr
                    key={row}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="py-3 px-6 text-center">
                      <span>{data[row].lob}</span>
                    </td>

                    <td className="py-3 px-6 text-center">
                      <span>{data[row].companyName}</span>
                    </td>

                    <td className="py-3 px-6 text-center whitespace-nowrap">
                      <span>{data[row].accountOwner}</span>
                    </td>

                    <td className="py-3 px-6 text-center">
                      <span>{data[row].score}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prioritized_LOB_Table;
