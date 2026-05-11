import React from "react";
import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();

  const message = error?.data || error?.message || "Unknown error";
  const status = error?.status || "Error";
  const statusText = error?.statusText || "";

  return (
    <div>
      <h1>Something Went Wrong...</h1>
      <h4>{message}</h4>
      <p>
        {status} <span>{statusText}</span>
      </p>
    </div>
  );
}