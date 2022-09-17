import React, { useState } from "react";
import Edit_ModalAccount from "./Edit_ModalAccount";

function TableAccount({ data, setStatusCode }) {
  const [datas, setDatas] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setDatas(e);
  };
  return (
    <div className="overflow-x-auto">
      <Edit_ModalAccount
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
                  <th className="py-3 text-center"></th>
                  <th className="py-3 px-3 text-center">ID</th>
                  <th className="py-3 px-3 text-center">Account Name</th>
                  <th className="py-3 px-3 text-center">Account Email</th>
                  <th className="py-3 px-3 text-center">
                    Account Phone Number
                  </th>
                  <th className="py-3 px-3 text-center">Account LOB</th>
                  <th className="py-3 px-3 text-center">Account Owner</th>
                  <th className="py-3 px-3 text-center">Account Score</th>
                </tr>
              </thead>

              {/* body */}
              <tbody className="text-gray-600 text-sm font-light">
                {Object.keys(data).map((row) => (
                  <tr
                    key={data[row].id}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    {/* Action Icons */}
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
                      <span value={data[row].id}>{data[row].id}</span>
                    </td>

                    <td className="py-3 px-6 text-center">
                      <span>{data[row].accountName}</span>
                    </td>

                    <td className="py-3 px-6 text-center whitespace-nowrap">
                      <span>{data[row].accountOwner}</span>
                    </td>

                    <td className="py-3 px-6 text-center">
                      <span>{data[row].phone}</span>
                    </td>

                    <td className="py-3 px-6 text-center">
                      <span>{data[row].accountLOB}</span>
                    </td>

                    <td className="py-3 px-6 text-center">
                      <span>{data[row].accountOwner}</span>
                    </td>

                    <td className="py-3 px-6 text-center">
                      {/* <span>{data[row].endDate}</span> */}
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

export default TableAccount;
