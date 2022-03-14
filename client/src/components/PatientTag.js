import React from "react";

export default function PatientTag({name, action}) {
  return (
    <>
      <span>{action} {name} </span>
      <span>Please check if all information if valid and correct.</span>
    </>
  );
}