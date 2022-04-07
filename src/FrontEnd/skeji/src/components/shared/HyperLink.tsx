import React from "react";
import { Link } from "react-router-dom";

interface Props {
  linkTo: string;
  text: string;
}

function HyperLink(props: Props) {
  return (
    <>
      <Link to= { props.linkTo } >
        <p className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
            { props.text }
        </p>
      </Link>
    </>
  );
}

export default HyperLink;
