import { Box, Input } from "@chakra-ui/react";
import React, { ChangeEvent } from "react";
import { ChannelItem } from "../AudioPlayer";
import TableRow from "../TableRow";

export interface ChannelSelectionTabProps {
  onSearchChanged: (event: React.ChangeEvent<HTMLInputElement>) => void
  loadChannel: (index: number, autoplay: boolean) => void
  channelList: ChannelItem[]
  isLoading: boolean
  currentIndex: number
}

const ChannelSelectionTab = ({
  onSearchChanged,
  loadChannel,
  channelList,
  isLoading,
  currentIndex
}: ChannelSelectionTabProps) => {
  const onSearchFocus = (e: ChangeEvent<HTMLInputElement>) => {
    window.scrollTo({
      top: 360,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Box mx="2">
        <Input
          onFocus={(e) => {
            onSearchFocus(e);
          }}
          onChange={(e) => onSearchChanged(e)}
          h="12"
          mb="6"
          placeholder="Search"
        />
      </Box>
      {
        channelList?.map((item, index) => {
          return (
            <TableRow
              isLoading={isLoading && index === currentIndex}
              active={index === currentIndex}
              onClick={() => loadChannel(index, true)}
              key={index}
              name={item.title}
              path={item.path}
            />)
        })
      }
    </>
  );
};

export default ChannelSelectionTab;
