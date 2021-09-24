import React from "react";
interface IProps {
    children?: React.ReactNode;
    callback: () => any;
}
declare const Sentineler: ({ children, callback }: IProps) => JSX.Element;
export default Sentineler;
