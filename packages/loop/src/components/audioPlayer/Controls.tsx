import React from "react";
import { Box, Container, Flex, IconButton, Spacer } from "@chakra-ui/react";
import {
  mdiShareVariant,
  mdiStepBackward,
  mdiPause,
  mdiPlay,
  mdiStepForward,
  mdiShuffleVariant,
} from "@mdi/js";
import { usePlugin } from "../PluginProvider";
import Icon from "@mdi/react";

interface ControlsProps {
  isPlaying: boolean;
  isLoading: boolean;
  onPreviousClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  onTogglePlayClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  onNextClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onShuffleClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

const Controls = ({
  isPlaying,
  isLoading,
  onPreviousClick,
  onTogglePlayClick,
  onNextClick,
  onShuffleClick,
}: ControlsProps) => {
  const { api, addEventListener, config } = usePlugin();

  return (
    <Container
      w="100%"
      maxW="1400px"
      position="sticky"
      zIndex="100"
      top="0px"
      p="4"
    >
      <Flex
        maxWidth="550px"
        margin="auto"
        justifyContent="center"
        alignItems="center"
      >
        <IconButton
          onClick={() => api.share.social()}
          backgroundColor="transparent"
          aria-label="Share"
          icon={<Icon size="1.8rem" path={mdiShareVariant} />}
        />
        <Spacer />
        <IconButton
          onClick={onPreviousClick}
          backgroundColor="transparent"
          aria-label="Previous"
          icon={<Icon size="2rem" path={mdiStepBackward} />}
        />
        <Box w="30px" />
        <IconButton
          w="4.5rem"
          h="4.5rem"
          backgroundColor="transparent"
          rounded="full"
          border="1px"
          onClick={onTogglePlayClick}
          aria-label="Play / pause toggle"
          disabled={isLoading}
          icon={<Icon size="2.7rem" path={isPlaying ? mdiPause : mdiPlay} />}
        />
        <Box w="30px" />
        <IconButton
          onClick={onNextClick}
          backgroundColor="transparent"
          aria-label="Next"
          icon={<Icon size="2rem" path={mdiStepForward} />}
        />
        <Spacer />
        <IconButton
          onClick={onShuffleClick}
          backgroundColor="transparent"
          aria-label="Shuffle"
          icon={<Icon size="1.8rem" path={mdiShuffleVariant} />}
        />
      </Flex>
    </Container>
  );
};

export default Controls;
