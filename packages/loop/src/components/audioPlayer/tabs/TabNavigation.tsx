import { Container, Flex, Tab, TabList, VStack, Text } from "@chakra-ui/react";
import { mdiRadio, mdiHeart, mdiTuneVariant } from "@mdi/js";
import Icon from "@mdi/react";

const TabNavigation = () => {
  return (
    <Container
      p="0"
      position="fixed"
      zIndex="100"
      width="100%"
      maxW="1400px"
      bottom="0px"
    >
      <TabList>
        <Tab>
          <Flex justifyContent="center">
            <VStack>
              <Icon path={mdiRadio} size="1.4rem"></Icon>
              <Text fontSize="small">Channels</Text>
            </VStack>
          </Flex>
        </Tab>
        <Tab>
          <Flex justifyContent="center">
            <VStack>
              <Icon path={mdiHeart} size="1.4rem"></Icon>
              <Text fontSize="small">Favorites</Text>
            </VStack>
          </Flex>
        </Tab>
        <Tab>
          <Flex justifyContent="center">
            <VStack>
              <Icon path={mdiTuneVariant} size="1.4rem"></Icon>
              <Text fontSize="small">Settings</Text>
            </VStack>
          </Flex>
        </Tab>
      </TabList>
    </Container>
  );
};

export default TabNavigation;
