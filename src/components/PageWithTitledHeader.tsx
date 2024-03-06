import { FC, ReactNode } from "react";
import Header from "./Header";

interface PageWithTitledHeaderProps {
  children: ReactNode;
  title: string;
}

export const PageWithTitledHeader: FC<PageWithTitledHeaderProps> = ({
  title,
  children,
}) => {
  return (
    <>
      <main>
        <Header>{title}</Header>
        {children}
      </main>
    </>
  );
};
