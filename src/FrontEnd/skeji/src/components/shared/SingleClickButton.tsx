import React from "react";

interface Props {
    buttonText: string;
}

function SingleClickButton(props: Props) {
  return (
    <>
      <div className="flex space-x-2 justify-center">
        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-cyan-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-cyan-700 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          {props.buttonText}
        </button>
      </div>
    </>
  );
}

export default SingleClickButton;
