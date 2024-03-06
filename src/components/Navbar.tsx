import { CSSProperties } from "react";

export default function Navbar() {
  return (
    <>
      <ul style={navbarStyles}>
        <b>navbar</b>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
      </ul>
    </>
  );
}

const navbarStyles: CSSProperties = {
  width: "12%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  borderRight: "1px solid lightgray",
  padding:'1em 2em'
};
