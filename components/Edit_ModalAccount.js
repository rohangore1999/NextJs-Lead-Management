import { useSession } from "next-auth/react";
import React, { useState } from "react";

function Edit_ModalAccount({ setShowModal, showModal, datas, setStatusCode }) {
  const [accountName, setAccountName] = useState("");
  const [accountOwner, setAccountOwner] = useState("");
  const [accountEmail, setAccountEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [accountSize, setAccountSize] = useState("");
  const [accountLOB, setAccountLOB] = useState("");
  const [grossMonthlyVolume, setGrossMonthlyVolume] = useState("");
  const [accountType, setAccountType] = useState("");
  const [remarks, setRemarks] = useState("");

  const { data: session } = useSession();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const queryCampaignObj = {
      id: datas.id,
      owner: owner,
      ownerEmail: session.user.email,
      campaignResponse: campaignResponse,
      startDate: startDate,
      endDate: endDate,
    };

    let res = await axios.put(
      "https://5106-106-51-91-104.in.ngrok.io/v1/campaign",
      queryCampaignObj,
      {
        method: "PUT",
      }
    );

    setStatusCode(200);
    let data = res.data;

    setOwner("");
    setCampaignName("");
    setType("");
    setCampaignResponse("");
    setStartDate("");
    setEndDate("");

    setShowModal(false);
  };

  return (
    <>
      {showModal ? (
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
                    Account Name
                  </label>
                  <input
                    id="accountName"
                    name="accountName"
                    className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm
                   border-gray-300 rounded border"
                    placeholder="James"
                    value={accountName}
                    onChange={(e) => setAccountName(e.target.value)}
                  />

                  <label
                    htmlFor="type"
                    className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                  >
                    Account Owner
                  </label>
                  <input
                    id="accountOwner"
                    name="accountOwner"
                    className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm
                   border-gray-300 rounded border"
                    placeholder="James"
                    value={accountOwner}
                    onChange={(e) => setAccountOwner(e.target.value)}
                  />

                  <label
                    htmlFor="name"
                    className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                  >
                    Account Email
                  </label>
                  <input
                    id="accountEmail"
                    name="accountEmail"
                    className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm
                   border-gray-300 rounded border"
                    placeholder="James"
                    value={accountEmail}
                    onChange={(e) => setAccountEmail(e.target.value)}
                  />

                  <label
                    htmlFor="start"
                    className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                  >
                    Phone
                  </label>
                  <div className="relative mb-5 mt-2">
                    <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer"></div>
                    <input
                      id="phone"
                      className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                      placeholder=""
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  <label
                    htmlFor="expiry"
                    className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                  >
                    Account Size
                  </label>
                  <div className="relative mb-5 mt-2">
                    <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer"></div>
                    <input
                      id="accountSize"
                      className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                      placeholder=""
                      name="accountSize"
                      value={accountSize}
                      onChange={(e) => setAccountSize(e.target.value)}
                    />
                  </div>

                  <label
                    htmlFor="name"
                    className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                  >
                    Account LOB
                  </label>
                  <input
                    id="accountLOB"
                    className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm
                   border-gray-300 rounded border"
                    placeholder="James"
                    name="accountLOB"
                    value={accountLOB}
                    onChange={(e) => setAccountLOB(e.target.value)}
                  />

                  <label
                    htmlFor="name"
                    className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                  >
                    Gross Monthly Volume
                  </label>
                  <input
                    id="grossMonthlyVolume"
                    className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm
                   border-gray-300 rounded border"
                    placeholder="James"
                    name="grossMonthlyVolume"
                    value={grossMonthlyVolume}
                    onChange={(e) => setGrossMonthlyVolume(e.target.value)}
                  />

                  <label
                    htmlFor="name"
                    className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                  >
                    Account Type
                  </label>
                  <input
                    id="accountType"
                    className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm
                   border-gray-300 rounded border"
                    placeholder="James"
                    name="owner"
                    value={accountType}
                    onChange={(e) => setAccountType(e.target.value)}
                  />

                  <label
                    htmlFor="name"
                    className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                  >
                    Remark
                  </label>
                  <input
                    id="remarks"
                    className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm
                   border-gray-300 rounded border"
                    placeholder="James"
                    name="remarks"
                    value={remarks}
                    onChange={(e) => setRemarks(e.target.value)}
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
                      onClick={() => setShowModal(!showModal)}
                    >
                      Cancel
                    </button>
                  </div>
                  <button
                    className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2
                   focus:outline-none focus:ring-gray-600"
                    onClick={() => setShowModal(!showModal)}
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

export default Edit_ModalAccount;
