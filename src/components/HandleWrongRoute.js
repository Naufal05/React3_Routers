import React from "react";
import { Link } from "react-router-dom";

function HandleWrongRoute() {
  return (
    <>
      <Link to="/">Home</Link>
      <p>This page is not prepared</p>
    </>
  );
}

export default HandleWrongRoute;
