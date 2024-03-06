import { CSSProperties, ReactNode } from "react";

export default function Header({ children }: { children: string | undefined }) {
  return (
    <>
      <div style={headerStyles}>{children}</div>
    </>
  );
}

const headerStyles: CSSProperties = {
  display: "flex",
  justifyContent:"center"
};
