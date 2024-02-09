import React from "react";
import { useLoginData } from "../hooks/useCustomApiData";

export default function CancelQuery() {
  const { data, isLoading, isFetching, isFetched, error, refetch, cancel } =
    useLoginData();

  if (isLoading || isFetching) {
    console.log("Loading . . . .");
  } else if (isFetched) {
    console.log(data?.data);
  } else {
    console.log(error);
  }

  //   const handleCancelQuery = () => {
  //     cancel();
  //     console.log("query request cancelled");
  //   };

  //   const handleRefetch = () => {
  //     refetch();
  //   };

  return (
    <div>
      <button onClick={refetch}>Refetch</button>
      <button onClick={cancel}>Cancel</button>
    </div>
  );
}
