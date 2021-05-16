import { TabPanel, TabPanels, Tabs as ChakraTabs } from "@chakra-ui/react";
import ChannelSelectionTab, {
  ChannelSelectionTabProps,
} from "./ChannelSelectionTab";
import FavoritesTab, { FavoritesTabProps } from "./FavoritesTab";
import SettingsTab, { SettingsTabProps } from "./SettingsTab";
import TabNavigation from "./TabNavigation";

interface TabViewWrapperProps extends ChannelSelectionTabProps,
    FavoritesTabProps,
    SettingsTabProps {}

const TabViewWrapper = ({
  data,
  popularGenres,
  onSearchChanged,
  channelList,
  isLoading,
  loadChannel,
  currentIndex
}: TabViewWrapperProps) => {
  return (
    <ChakraTabs isFitted>
      <TabPanels>
        <TabPanel p="0">
          <ChannelSelectionTab
            channelList={channelList}
            isLoading={isLoading}
            loadChannel={loadChannel}
            onSearchChanged={onSearchChanged}
            currentIndex={currentIndex}
          />
        </TabPanel>
        <TabPanel p="0">
          <FavoritesTab />
        </TabPanel>
        <TabPanel p="0">
          <SettingsTab data={data} popularGenres={popularGenres} />
        </TabPanel>
      </TabPanels>
      <TabNavigation />
    </ChakraTabs>
  );
};

export default TabViewWrapper;
