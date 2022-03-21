import React from "react";

interface EmailInputProps {
    keyUpHandler: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

function EmailInput(props: EmailInputProps) {
    return (
        <>
        <div className="mb-3 xl:w-96">
                  <label className="form-label inline-block mb-2 text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    className="
                  form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-cyan-600 focus:outline-none
                "
                    placeholder="email@domain.com"
                    onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) => {
                        props.keyUpHandler(event);
                      }}
                  />
                </div>
        </>
    )
}

export default EmailInput;