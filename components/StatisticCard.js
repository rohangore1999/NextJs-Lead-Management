import React from "react";

function StatisticCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
      <div className="bg-blue-500 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 text-white font-medium group">
        <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
          <svg
            width="30"
            height="30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="stroke-current text-black transform transition-transform duration-500 ease-in-out"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            ></path>
          </svg>
        </div>
        <div className="text-right">
          <p className="text-2xl">100</p>
          <p>Total Accounts Managed</p>
        </div>
      </div>
      <div className="bg-blue-500 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 text-white font-medium group">
        <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
          <svg
            width="30"
            height="30"
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 1.5c-4.69 0-8.497 3.807-8.497 8.497s3.807 8.498 8.497 8.498 8.498-3.808 8.498-8.498-3.808-8.497-8.498-8.497zm4.253 7.75h-8.5c-.414 0-.75.336-.75.75s.336.75.75.75h8.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"
              fillRule="nonzero"
            />
          </svg>
        </div>
        <div className="text-right">
          <p className="text-2xl">80</p>
          <p>Accounts in Pipeline</p>
        </div>
      </div>
      <div className="bg-blue-500 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 text-white font-medium group">
        <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            className="text-black transform transition-transform duration-500 ease-in-out"
          >
            <path d="M21.062 13.875l-1.625-5.979 3.367-1.092c-1.939-4.022-6.04-6.804-10.804-6.804-4.779 0-8.894 2.801-10.824 6.845l3.386 1.051-1.625 5.979-2.937-.767c.56 6.108 5.747 10.892 12 10.892s11.439-4.784 12-10.892l-2.938.767zm-14.826 1.845c-.314-.231-.382-.673-.151-.987l.806-1.088c.23-.313.67-.383.986-.151.316.231.383.672.152.987l-.807 1.087c-.217.298-.687.37-.986.152zm1.424 1.04c-.313-.232-.387-.664-.156-.978l.812-1.096c.229-.313.67-.381.984-.151.315.23.385.673.152.986l-.812 1.097c-.212.292-.672.366-.98.142zm1.426 1.04c-.313-.231-.383-.673-.151-.988l.805-1.086c.233-.315.674-.382.987-.152.314.231.383.673.151.987l-.805 1.088c-.218.296-.686.372-.987.151zm3.217-.201l-.807 1.092c-.215.294-.682.374-.986.151-.314-.231-.383-.672-.152-.986l.809-1.092c.229-.311.67-.382.986-.149.314.228.382.671.15.984zm.743 1.401c-.142 0-.296-.033-.451-.113.235-.318.579-.742.707-1.044l.159.159c.487.487.127.998-.415.998zm4.922-2.979c-.275.276-.723.276-.998 0l-2.025-2.025c-.065-.067-.174-.069-.243-.005-.075.067-.078.184-.006.255l1.875 1.876c.276.276.276.722 0 .998-.275.276-.723.276-.998 0l-1.523-1.524c-.068-.068-.178-.069-.247-.002-.072.069-.072.183-.003.252l1.264 1.265c.276.276.276.722 0 .999-.274.275-.722.276-.997 0l-.654-.654c.17-1.042-.595-1.891-1.53-1.972-.248-.591-.803-.985-1.422-1.039-.238-.571-.784-.984-1.424-1.04-.506-1.208-2.158-1.432-2.95-.351l-.44.595c-.449-.169-.934-.31-1.489-.441l1.273-4.685c1.899-.017 3.396-1.817 5.149-.709-.574.71-1.045 1.277-1.755 1.691-.567.332-.833.981-.66 1.616.216.797 1.024 1.354 1.968 1.354 1.248 0 2.54-1.025 3.521-1.761.578.577 3.831 3.775 4.315 4.31.274.274.274.72-.001.997zm.495-1.954s-3.125-3.084-4.053-4.013c-.496-.494-.838-.562-1.41-.101-.728.586-1.619 1.182-2.277 1.413-1.291.452-1.996-.647-1.396-.999 1.22-.711 1.814-1.737 2.839-2.898.284-.322.623-.441.969-.441.376 0 .761.14 1.095.312 1.517.784 2.897 1.319 4.351 1.212l1.296 4.768c-.464.208-.931.45-1.414.747z" />
          </svg>
        </div>
        <div className="text-right">
          <p className="text-2xl">30</p>
          <p>Opportunity Closed</p>
        </div>
      </div>
      <div className="bg-blue-500 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 text-white font-medium group">
        <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
          <svg
            width="30"
            height="30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="stroke-current text-black transform transition-transform duration-500 ease-in-out"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
        <div className="text-right">
          <p className="text-2xl">60</p>
          <p>Opportunity Closed in Pipeline</p>
        </div>
      </div>
    </div>
  );
}

export default StatisticCard;
