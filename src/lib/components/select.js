import React from "react";

export default function Select({
  htmlFor,
  className,
  children,
  name,
  id,
  className2,
}) {
  return (
    <>
      <label htmlFor={htmlFor} className={className}>
        {children[0]}
      </label>
      <select name={name} id={id} className={className2}>
        {children[1]}
      </select>
    </>
  );
}
