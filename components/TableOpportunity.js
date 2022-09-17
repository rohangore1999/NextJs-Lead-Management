import React, { useEffect, useState } from "react";
import Edit_ModalOpportunity from "./Edit_ModalOpportunity";
import Range_ModalOpportunity from "./Range_ModalOpportunity";

function TableOpportunity({ data, setStatusCode }) {
  const [showRangeModal, setShowRangeModal] = useState(false);
  const [progressBar, setProgressBar] = useState(1);
  const [datas, setDatas] = useState({});
  const [showModal, setShowModal] = useState(false);

  const opportunity = [
    "QUALIFICATION",
    "DISQUALIFIED",
    "NO_RESPONSE",
    "PITCHED",
    "FOLLOW_UP_REQUIRED",
    "AGREEMENT",
    "ONBOARD",
    "CLOSED_WON",
    "CLOSED_LOST",
  ];

  const opportunityMap = {
    QUALIFICATION: "20%",
    DISQUALIFIED: "0",
    NO_RESPONSE: "20%",
    PITCHED: "50",
    FOLLOW_UP_REQUIRED: "60%",
    AGREEMENT: "80%",
    ONBOARD: "90%",
    CLOSED_WON: "0%",
    CLOSED_LOST: "0%",
  };

  useEffect(() => {
    setProgressBar(progressBar);
  }, [progressBar, showRangeModal]);

  const handleChange = (e) => {
    setDatas(e);
  };

  return (
    <div className="overflow-x-auto">
      <Range_ModalOpportunity
        data={data}
        datas={datas}
        setShowRangeModal={setShowRangeModal}
        showRangeModal={showRangeModal}
        setProgressBar={setProgressBar}
        progressBar={progressBar}
        opportunity={opportunity}
      />

      <Edit_ModalOpportunity
        datas={datas}
        setShowModal={setShowModal}
        showModal={showModal}
        setStatusCode={setStatusCode}
      />

      <div className="bg-gray-100 min-h-screen flex justify-center font-sans overflow-hidden">
        <div className="w-full lg:w-5/6">
          <div className="bg-white shadow-md rounded my-6">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-200 text-gray-600 text-xs leading-normal">
                  <th className="py-3 px-3 text-center"></th>
                  <th className="py-3 px-3 text-center">Lead Email</th>
                  <th className="py-3 px-3 text-center">Lead Type</th>
                  <th className="py-3 px-3 text-center">Opportunity</th>
                  <th className="py-3 px-3 text-center">Stage</th>
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
                      <div className="flex item-center justify-center">
                        <div
                          className="w-4 mr-2 transform hover:text-gray-500 hover:scale-110"
                          onClick={() => {
                            setShowModal(!showModal);
                            handleChange(data[row]);
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                            />
                          </svg>
                        </div>
                        <div
                          className="w-4 mr-2 transform hover:text-gray-500 hover:scale-110"
                          onClick={() => {
                            setShowDeleteModal(!showDeleteModal);
                            // handleChange(data[row]);
                          }}
                        ></div>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <span>{data[row].email}</span>
                    </td>

                    <td className="py-3 px-6 text-center">
                      <span>{data[row].leadType}</span>
                    </td>

                    <td className="py-3 px-6 text-center whitespace-nowrap">
                      <span>{data[row].product}</span>
                    </td>

                    <td
                      className="py-3 px-6 text-center"
                      onClick={() => {
                        setShowRangeModal(!showRangeModal);
                        handleChange(data[row]);
                      }}
                    >
                      <div className="flex items-center">
                        <span className="mr-2">
                          {opportunityMap[data[row].stage]}
                        </span>
                      </div>
                    </td>

                    <td className="py-3 px-6 text-center">{data[row].score}</td>
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

export default TableOpportunity;
