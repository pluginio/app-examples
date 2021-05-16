import React from "react";
import { Box, Image, Heading, IconButton } from "@chakra-ui/react";
import Icon from "@mdi/react";
import { mdiHeartOutline } from "@mdi/js";

interface HeaderProps {
  imagePath?: string;
  title: string;
  onFavouriteClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

const Header = ({ imagePath, title, onFavouriteClick }: HeaderProps) => {
  return (
    <Box w="100%" position="relative" m="0px" p="0px">
      <Image
        w="100%"
        h="360px"
        fit="cover"
        src={imagePath}
        fallbackSrc="https://via.placeholder.com/150"
      />
      <Heading
        color="white"
        fontWeight="semibold"
        position="absolute"
        bottom="4"
        px="4"
        py="4"
        as="h1"
        size="3xl"
      >
        {title}
      </Heading>
      <IconButton
        style={{ position: "absolute", top: "20px", right: "20px" }}
        onClick={(e) => onFavouriteClick(e)}
        backgroundColor="transparent"
        aria-label="Previous"
        icon={<Icon size="2rem" path={mdiHeartOutline} />}
      />
    </Box>
  );
};

export default Header;
