import * as React from "react";
type IProps = {
  label: string;
  action: Function;
  sideMargin: boolean;
};
export default function ButtonWrap({
  action,
  label,
  sideMargin = false
}: IProps) {
  const buttonClassName = sideMargin ? "marginLR5" : "";
  return (
    <button
      className={buttonClassName}
      aria-label={label}
      onClick={() => action()}
    >
      {label}
    </button>
  );
}
