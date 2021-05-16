import {
  Box,
  Select,
  Tag,
  TagCloseButton,
  Button,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { usePlugin } from "../../PluginProvider";

export interface SettingsTabProps {
  data: any;
  popularGenres: any;
}

const SettingsTab = ({ data, popularGenres }: SettingsTabProps) => {
  const { api } = usePlugin();

  const onSaveClick = () => api.user.login()

  return (
    <>
      <Box mx="2">
        <Select mb="6" h="12" placeholder="Add Category">
          {data.genres?.map((item: any, index: number) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </Select>
      </Box>
      <Box mx="2" mb="6">
        {popularGenres?.map((item: any, index: number) => (
          <Tag m="1" key={index} size="lg" borderRadius="full">
            {item}
            <TagCloseButton />
          </Tag>
        ))}
        <Button
          onClick={() => onSaveClick()}
          mt="4"
          isFullWidth
          h="12"
          colorScheme="teal"
        >
          Save
        </Button>
      </Box>
      <NavLink to="/test">
        <Button colorScheme="twitter">SDK Test</Button>
      </NavLink>
    </>
  );
};

export default SettingsTab;
