import React from "react";
import Conditions from "../Conditions";

export default function SearchResult({ name, state }) {
  // const conditions = state.conditions;
  let result = {}
  result["conditions"] = state.conditions.filter(({ label }) => label === name);
  console.log("result",result)
  if(result.conditions){
    return <Conditions state={result} mode ={"SEARCH"}/>;
  }else {
    return <Conditions state={result} transition ={"ALL"}/>;
  }
}
