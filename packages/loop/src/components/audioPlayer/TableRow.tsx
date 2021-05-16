import React from "react";
import { Button } from "@chakra-ui/react";

interface TableRowProps {
  onClick: (path: string) => void;
  name: string;
  path: string;
  active: boolean;
  isLoading: boolean;
}

const TableRow = ({
  onClick,
  name,
  path,
  active,
  isLoading,
}: TableRowProps) => {
  return (
    <Button
      isLoading={isLoading}
      dir={isLoading ? "rtl" : "ltr"}
      isActive={active}
      loadingText={name}
      style={{ height: "65px" }}
      onClick={() => onClick(path)}
      fontWeight="light"
      fontSize="xl"
      justifyContent="start"
      iconSpacing="auto"
      isFullWidth
      rounded="false"
      bgColor="transparent"
    >
      {name}
    </Button>
  );
};

export default TableRow;
