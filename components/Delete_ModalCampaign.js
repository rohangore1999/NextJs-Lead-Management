import React from "react";

function Delete_ModalCampaign({ showDeleteModal, setShowDeleteModal }) {
  return (
    <>
      {showDeleteModal ? (
        <>
          <div className="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0 backdrop-blur-sm">
            <div className="bg-white px-16 py-7 rounded-md text-center space-y-2">
              <h1 className="text-xl mb-4 font-medium text-slate-500">
                Do you Want Delete
              </h1>
              <button
                className="bg-gray-500 px-4 py-2 rounded-md text-xs text-white"
                onClick={() => setShowDeleteModal(!showDeleteModal)}
              >
                Cancle
              </button>
              <button
                className="bg-indigo-500 px-7 py-2 ml-2 rounded-md text-xs text-white font-semibold"
                onClick={() => setShowDeleteModal(!showDeleteModal)}
              >
                Ok
              </button>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default Delete_ModalCampaign;
