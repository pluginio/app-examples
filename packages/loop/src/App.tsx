import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SdkTest from "./views/SdkTest";
import AudioPlayerView from "./views/AudioPlayerView";
import { Flex } from "@chakra-ui/react";

const App = () => {
  return (
    <Flex justifyContent="center" w="100%" maxW="1400px" margin="auto">
      <Router>
        <Switch>
          <Route exact path="/" component={AudioPlayerView} />
          <Route exact path="/test" component={SdkTest} />
        </Switch>
      </Router>
    </Flex>
  );
};

export default App;
