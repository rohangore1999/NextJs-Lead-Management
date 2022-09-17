import React, { useState } from "react";
import _startCase from "lodash/startCase";
import _lowerCase from "lodash/lowerCase";
import Edit_ModalCampaign from "./Edit_ModalCampaign";
import Delete_ModalCampaign from "./Delete_ModalCampaign";
import Add_ModalCampaign from "./Add_ModalCampaign";
import FormData from "form-data";
import axios from "axios";

function TableCampaign({ data, setStatusCode }) {
  const [datas, setDatas] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [files, setFiles] = useState();

  const convertDate = (date) => {
    var mydate = new Date(date);
    return mydate.toDateString();
  };

  const handleFile = (e) => {
    let file = e.target.files[0];
    setFiles(file);
  };

  const handleUpload = (e) => {
    let file = files;

    let formData = new FormData();

    formData.append("file", file);
    formData.append("name", "csv file");

    axios({
      url: "https://5106-106-51-91-104.in.ngrok.io/v1/opportunity/bulk",
      method: "POST",
      data: formData,
    });
  };

  return (
    <div className="overflow-x-auto">
      <Edit_ModalCampaign
        datas={datas}
        setShowModal={setShowModal}
        showModal={showModal}
        setStatusCode={setStatusCode}
      />
      <Delete_ModalCampaign
        setShowDeleteModal={setShowDeleteModal}
        showDeleteModal={showDeleteModal}
        setStatusCode={setStatusCode}
      />
      <Add_ModalCampaign
        datas={datas}
        setShowAddModal={setShowAddModal}
        showAddModal={showAddModal}
        setStatusCode={setStatusCode}
      />

      <div className="bg-gray-100 min-h-screen flex justify-center font-sans overflow-hidden">
        <div className="w-full lg:w-5/6">
          <div className="bg-white shadow-md rounded my-6">
            <div className="px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t bg-gray-100 sm:grid-cols-9">
              <div className="relative w-full max-w-full flex-grow flex-1 text-right">
                <button
                  onClick={() => setShowAddModal(!showAddModal)}
                  className="bg-blue-500 text-white active:bg-blue-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  New
                </button>
              </div>
            </div>
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-200 text-gray-600 text-xs leading-normal">
                  <th className="py-3 text-center"></th>
                  <th className="py-3 px-3 text-center">ID</th>
                  <th className="py-3 px-3 text-center">Owner</th>
                  <th className="py-3 px-3 text-center">Campaign Name</th>
                  <th className="py-3 px-3 text-center">Type</th>
                  <th className="py-3 px-3 text-center">Campaign Response</th>
                  <th className="py-3 px-3 text-center">Start Date</th>
                  <th className="py-3 px-3 text-center">End Date</th>
                  <th className="py-3 px-3 text-center">File Upload</th>
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
                      <span>{data[row].owner}</span>
                    </td>

                    <td className="py-3 px-6 text-center whitespace-nowrap">
                      <span>{data[row].campaignName}</span>
                    </td>

                    <td className="py-3 px-6 text-center">
                      <span>{data[row].type}</span>
                    </td>

                    <td className="py-3 px-6 text-center">
                      <span>{data[row].campaignResponse}</span>
                    </td>

                    <td className="py-3 px-6 text-center">
                      <span>{convertDate(data[row].startDate)}</span>
                    </td>

                    <td className="py-3 px-6 text-center">
                      <span>{convertDate(data[row].endDate)}</span>
                    </td>

                    <td className="py-3 px-6 text-center">
                      <input
                        type="file"
                        name="file"
                        onChange={(e) => handleFile(e)}
                      />
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

export default TableCampaign;
