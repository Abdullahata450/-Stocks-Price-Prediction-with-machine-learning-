import React from "react";

const Pluscard = () => {
  return (
    <div
      className="w-full max-w-sm p-3  border rounded-lg shadow sm:p-8  "
      style={{ backgroundColor: "#131C40" }}
    >
      <h5 className="mb-4 text-5xl font-extrabold tracking-tighter text-white">
        Plus
      </h5>
      <span className="text-white">
        Great for investors who need advanced functionality to manage their
        portfolios and research stocks{" "}
      </span>

      <div className="flex mt-4 items-baseline text-green-500">
        <span className="text-3xl font-semibold">$</span>
        <span className="text-5xl font-extrabold tracking-tight">39</span>
        <span className="ms-1 text-xl font-normal text-white">
          /month
        </span>
      </div>
      <ul role="list" className="space-y-5 my-7">
        <li className="flex items-center">
          <svg
            className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-300 dark:text-gray-400 ms-3">
            Trade Automation
          </span>
        </li>
        <li className="flex">
          <svg
            className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-300 dark:text-gray-400 ms-3">
            Effortless Execution
          </span>
        </li>
        <li className="flex">
          <svg
            className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-300 dark:text-gray-400 ms-3">
            Security and Reliability{" "}
          </span>
        </li>
        <li className="flex">
          <svg
            className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-300 dark:text-gray-400 ms-3">
            Customer Support
          </span>
        </li>
      </ul>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
      >
        Choose plan
      </button>
    </div>
  );
};

export default Pluscard;
