import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";

interface Props {
    buttonText: string;
    onClickHandler: () => void;
}

let classNames: string[] = ["inline-block",
    "px-6",
    "py-2.5",
    "bg-cyan-600",
    "text-white",
    "font-medium",
    "text-xs",
    "leading-tight",
    "rounded",
    "shadow-md",
    "hover:bg-cyan-700",
    "hover:shadow-lg",
    "focus:bg-cyan-700",
    "focus:shadow-lg",
    "focus:outline-none",
    "focus:ring-0",
    "active:bg-cyan-900",
    "active:shadow-lg",
    "transition",
    "duration-150",
    "ease-in-out",
]

function SingleClickButton(props: Props) {
    const [buttonClicked, setButtonClicked] = useState(false);
    
    function onClickHandler() {
        setButtonClicked(true);
        disableButton();
        props.onClickHandler();
    }

    function disableButton() {
        classNames.push("cursor-not-allowed");
        removeClass("bg-cyan-600");
        removeClass("hover:bg-cyan-700");
        removeClass("focus:bg-cyan-700");
        removeClass("active:bg-cyan-900");
        addClass("bg-gray-400");
    }

    function removeClass(className: string) {
        let index = classNames.indexOf(className);
        if (index !== -1) {
            classNames.splice(index, 1);
        }
    }

    function addClass(className: string) {
        classNames.push(className);
    }

    return (
        <>
            <div className="flex space-x-2 justify-center">
                <button
                    type="button"
                    className={classNames.join(" ")}
                    onClick={() => {onClickHandler()}}
                    disabled={buttonClicked}
                >
                    {buttonClicked && (
                        <Spinner
                        color="fill-cyan-500"
                        height="h-4"
                        width="w-4"
                       />
                    )}
                    
                    <span className="text-base">{props.buttonText}</span>
                    
                </button>
            </div>
        </>
    );
}

export default SingleClickButton;
