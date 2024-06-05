import React from "react";

type Props = {
  label: string;
  message: string;
};

export const Section = ({ label, message }: Props) => {
  return (
    <div>
      <p className="text-sm font-medium">{label}</p>
      <p className="text-sm font-medium">{message}</p>
    </div>
  );
};
