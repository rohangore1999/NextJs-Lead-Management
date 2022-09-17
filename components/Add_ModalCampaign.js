import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useState } from "react";

function Add_ModalCampaign({ setShowAddModal, showAddModal, setStatusCode }) {
  const [owner, setOwner] = useState("");
  const [campaignName, setCampaignName] = useState("");
  const [type, setType] = useState("");
  const [campaignResponse, setCampaignResponse] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const { data: session } = useSession();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const queryCampaignObj = {
      owner: owner,
      ownerEmail: session.user.email,
      campaignName: campaignName,
      type: type,
      campaignResponse: campaignResponse,
      startDate: startDate,
      endDate: endDate,
    };

    let res = await axios.post(
      "https://5106-106-51-91-104.in.ngrok.io/v1/campaign",
      queryCampaignObj,
      {
        method: "POST",
      }
    );

    let data = res.data;
    setStatusCode(200);

    setOwner("");
    setCampaignName("");
    setType("");
    setCampaignResponse("");
    setStartDate("");
    setEndDate("");

    setShowAddModal(false);
  };

  return (
    <>
      {showAddModal ? (
        <>
          <div
            className="py-12 transition duration-150 ease-in-out z-10 absolute right-0 bottom-0 top-10 left-0 backdrop-blur-sm"
            id="modal"
          >
            <div
              role="alert"
              className="container mx-auto w-11/12 md:w-2/3 max-w-lg"
            >
              <form onSubmit={handleSubmit}>
                <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                  <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">
                    Enter Details
                  </h1>

                  <label
                    htmlFor="name"
                    className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                  >
                    Campaign Name
                  </label>
                  <input
                    id="campaignName"
                    name="campaignName"
                    className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm
                       border-gray-300 rounded border"
                    placeholder="James"
                    value={campaignName}
                    onChange={(e) => setCampaignName(e.target.value)}
                  />

                  <label
                    htmlFor="type"
                    className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                  >
                    Type
                  </label>
                  <input
                    id="type"
                    name="type"
                    className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm
                       border-gray-300 rounded border"
                    placeholder="James"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  />

                  <label
                    htmlFor="name"
                    className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                  >
                    Campaign Response
                  </label>
                  <input
                    id="campaignName"
                    name="campaignName"
                    className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm
                       border-gray-300 rounded border"
                    placeholder="James"
                    value={campaignResponse}
                    onChange={(e) => setCampaignResponse(e.target.value)}
                  />

                  <label
                    htmlFor="start"
                    className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                  >
                    Start Date
                  </label>
                  <div className="relative mb-5 mt-2">
                    <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-calendar-event"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <rect x="4" y="5" width="16" height="16" rx="2" />
                        <line x1="16" y1="3" x2="16" y2="7" />
                        <line x1="8" y1="3" x2="8" y2="7" />
                        <line x1="4" y1="11" x2="20" y2="11" />
                        <rect x="8" y="15" width="2" height="2" />
                      </svg>
                    </div>
                    <input
                      id="start"
                      className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                      placeholder="DD/MM/YY"
                      name="start"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                  </div>

                  <label
                    htmlFor="expiry"
                    className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                  >
                    End Date
                  </label>
                  <div className="relative mb-5 mt-2">
                    <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-calendar-event"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <rect x="4" y="5" width="16" height="16" rx="2" />
                        <line x1="16" y1="3" x2="16" y2="7" />
                        <line x1="8" y1="3" x2="8" y2="7" />
                        <line x1="4" y1="11" x2="20" y2="11" />
                        <rect x="8" y="15" width="2" height="2" />
                      </svg>
                    </div>
                    <input
                      id="endDate"
                      className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                      placeholder="DD/MM/YY"
                      name="endDate"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                    />
                  </div>

                  <label
                    htmlFor="name"
                    className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                  >
                    Owner
                  </label>
                  <input
                    id="owner"
                    className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm
                       border-gray-300 rounded border"
                    placeholder="James"
                    name="owner"
                    value={owner}
                    onChange={(e) => setOwner(e.target.value)}
                  />

                  <div className="flex items-center justify-start w-full">
                    <button
                      type="submit"
                      className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600
                       bg-indigo-700 rounded text-white px-8 py-2 text-sm"
                    >
                      Submit
                    </button>
                    <button
                      className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out
                         hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                      onClick={() => setShowAddModal(!showAddModal)}
                    >
                      Cancel
                    </button>
                  </div>
                  <button
                    className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2
                       focus:outline-none focus:ring-gray-600"
                    onClick={() => setShowAddModal(!showAddModal)}
                    aria-label="close modal"
                    role="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-x"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default Add_ModalCampaign;
