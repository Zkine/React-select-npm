import React from "react";

export default function Select(props) {
  return (
    <>
      <label htmlFor={props.htmlFor} className={props.className}>
        {props.children[0]}
      </label>
      <select name={props.name} id={props.id} className={props.className2}>
        {props.children[1]}
      </select>
    </>
  );
}
