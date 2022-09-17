import React, { useState } from "react";

function Range_ModalOpportunity({
  showRangeModal,
  setShowRangeModal,
  opportunity,
  progressBar,
  setProgressBar,
  data,
  datas,
}) {
  const [rangeval, setRangeval] = useState(data.stage);

  const handleSubmit = async () => {
    const queryOpportunityObj = {
      opportunityId: opportunity,
      stage: rangeval,
    };
  };

  return (
    <>
      {showRangeModal ? (
        <div className="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0 backdrop-blur-sm z-10">
          <div className="bg-white px-8 py-7 rounded-md text-center space-y-2 w-9/12">
            <h1 className="text-left mb-5 font-bold text-xl"> Lead Stages</h1>
            <input
              type="range"
              className="w-full"
              defaultValue={progressBar}
              min="1"
              max="9"
              step="1"
              onChange={(event) => setRangeval(event.target.value)}
            />
            <div className="flex flex-row justify-between w-full px-2 pl-2">
              {opportunity.map((i) => (
                <div key={i}>
                  <div
                    className="w-full text-sm mr-0"
                    onChange={(event) => setRangeval(event.target.value)}
                  >
                    {i}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-5 space-x-5">
              <button
                className="bg-gray-500 px-4 py-2 rounded-md text-xs text-white"
                onClick={() => setShowRangeModal(!showRangeModal)}
              >
                Cancle
              </button>

              <button
                className="bg-indigo-500 px-7 py-2 ml-2 rounded-md text-xs text-white font-semibold"
                onClick={() => {
                  setShowRangeModal(!showRangeModal);
                  setProgressBar(rangeval);
                  handleSubmit;
                }}
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Range_ModalOpportunity;
