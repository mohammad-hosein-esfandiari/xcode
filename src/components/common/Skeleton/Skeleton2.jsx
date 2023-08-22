const Skeleton2 = () => {
  return (
    <div
      role="status"
      className="flex bg-mode-color  h-[250px] rounded-[4px] shadow-boxShadow2 animate-pulse overflow-hidden dark:border-gray-700">
      <div className="flex items-center justify-center  ss:w-1/2  overflow-hidden relative  bg-gray-300  ">
        <svg
          className="h-full w-full text-gray-200 "
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 640 512">
          <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
        </svg>
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="px-5">
            <div className="h-2.5 bg-gray-200 rounded-[4px]  w-2/3 my-6"></div>
            <div className="h-4 bg-gray-200 rounded-[4px]  mb-2.5"></div>
            <div className="h-4 w-1/4 bg-gray-200 rounded-[4px]  mb-2.5"></div>
          </div>
          <div className="flex px-5 ">
            <div className="h-2.5 w-2/4 bg-gray-200 mt-8 rounded-[4px] ml-4 "></div>
          </div>
        </div>

        <div className=" px-5  ">
          <div className="border-t-[1px] mt-[-64px] flex items-center pt-6 justify-between w-full border-gray-200">
            <div className="h-3 w-1/4 bg-gray-200 rounded-[4px]"></div>
            <div className="w-1/4 h-3 bg-gray-200 rounded-[4px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton2;
