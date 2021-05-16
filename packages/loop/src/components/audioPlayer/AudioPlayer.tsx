import genreData from "../../data/genreData";
import channelData from "../../data/channelData";
import popularGenreData from "../../data/popularGenreData";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Box, createStandaloneToast } from "@chakra-ui/react";
import { usePlugin } from "../PluginProvider";
import Controls from "./Controls";
import Header from "./Header";
import Visualizer from "./Visualizer";
import TabViewWrapper from "./tabs/TabViewWrapper";

interface AudioPlayerViewState {
  title: string;
  path?: string;
  imagePath?: string;
  currentIndex: number;
}

export interface ChannelItem {
  title: string;
  path: string;
  imagePath?: string;
  frequency: string;
  genres?: string[];
  tags?: string[];
}

export interface Meta {
  genres: string[];
  channels: ChannelItem[];
}

let _autoPlay: boolean = false

const AudioPlayer = () => {
  const { api } = usePlugin();

  const [state, setState] = useState<AudioPlayerViewState>({
    title: "Loop",
    currentIndex: 0,
  });

  const audioRef = useRef<HTMLAudioElement>(null);
  const [isLoading, setIsLoading] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [_filteredData, setFilteredData] = useState<ChannelItem[]>([]);
  const [isInitialized, setIsInitialized] = useState(false)
  
  let _popularGenres: string[] = popularGenreData;

  let data: Meta = {
    genres: genreData,
    channels: channelData,
  };

  useEffect(() => {
    if(_filteredData.length > 0 && !isInitialized)
    {
      loadChannel(0, false)
      setIsInitialized(true)
    }
  }, [_filteredData])

  useEffect(() => {
    filter()
  }, [searchTerm]);

  useEffect(() => {
    if(audioRef !== undefined)
    {
      audioRef.current?.addEventListener("loadeddata", (e) => onChannelLoaded(e))
      audioRef.current?.addEventListener("error", (e) => showLoadError(e));
    }
    
    return () => {
      audioRef.current?.removeEventListener("error", (e) => showLoadError(e))
      audioRef.current?.removeEventListener("loadeddata", (e) => onChannelLoaded(e))
    }
  }, [audioRef]);

  const loadChannel = (index: number, autoPlay: boolean) => {
    let channel = _filteredData[index]
 
    if (index < 0 || index >= _filteredData.length) {
      throw new Error("Invalid channel index");
    }

    setState({
      ...state,
      imagePath: channel.imagePath,
      title: channel.title,
      currentIndex: index
    });

    setIsLoading(true)

    audioRef!.current!.src = channel.path;
    _autoPlay = autoPlay
  };

  const togglePlay = () => {
    let current = audioRef?.current
    isPlaying ? current?.pause() : current?.play()
    setIsPlaying(!isPlaying)
  };

  const onChannelLoaded = (e: Event) => {
    setIsLoading(false)
    setIsPlaying(_autoPlay)

    if(_autoPlay)
    {
      audioRef?.current?.play();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const onSearchChanged = (e: ChangeEvent<HTMLInputElement>) => {
    let target = e.target as HTMLInputElement;
    setState({
      ...state,
      currentIndex: -1,
    });

    setSearchTerm(target.value)

    window.scrollTo({
      top: 360,
      behavior: "smooth",
    });
  };

  const shuffle = () => {
    loadChannel(Math.floor(Math.random() * _filteredData.length), true);
  };

  const onNextClick = () => {
    let nextIndex = state.currentIndex + 1
    if(nextIndex > _filteredData.length - 1)
    {
      nextIndex = 0
    }
    loadChannel(nextIndex, true);
  };

  const onPreviousClick = () => {
    let nextIndex = state.currentIndex - 1
    if(nextIndex < 0)
    {
      nextIndex = _filteredData.length - 1
    }
    loadChannel(nextIndex, true);
  };

  const onFavouriteClick = () => {
    console.log("CLICKED FAVOURITE");
  };

  const showLoadError = (e: ErrorEvent) => {
    console.log("Error message: ", e)
    const toast = createStandaloneToast();
    toast({
      position: "top-right",
      description: "There was an error loading the channel.",
      status: "error",
      duration: 5000,
      isClosable: true,
    });
  };

  const filter = () => {
    setFilteredData(filterChannels())
  } 

  const filterChannels = () => {
    return data.channels
      ?.filter((station) => {
        /*
      TODO: filter by categories upon changing in the settings only
      if(station.genres?.some(genre => this._popularGenres.includes(genre)) ||
        station.tags?.some(tag => this.state.searchTerm?.toLocaleLowerCase().split(" ").includes(tag)))
      {
        return station
      }
      */
        return station;
      })
      .filter((station) => {
        if (!searchTerm) {
          return station;
        }
        if (searchTerm && searchTerm.length < 2) {
          return station;
        }
        if (
          station.title
            .toLocaleLowerCase()
            .includes(searchTerm.toLocaleLowerCase()) ||
          station.tags?.some((tag) =>
            searchTerm?.toLocaleLowerCase().includes(tag)
          )
        ) {
          return station;
        }
      })
      .sort((a, b) =>
        a.title.localeCompare(b.title, "en", { sensitivity: "base" })
      )
  };
  
  return (
    <>
      <audio ref={audioRef} id="audio"></audio>
      <Header
        imagePath={state.imagePath}
        title={state.title}
        onFavouriteClick={() => onFavouriteClick()}
      />
      <Visualizer />
      <Controls
        isPlaying={isPlaying}
        isLoading={isLoading}
        onPreviousClick={() => onPreviousClick()}
        onTogglePlayClick={() => togglePlay()}
        onNextClick={() => {
          onNextClick();
        }}
        onShuffleClick={() => shuffle()}
      />
      <br />
      <TabViewWrapper
        data={data}
        popularGenres={_popularGenres}
        channelList={_filteredData}
        onSearchChanged={onSearchChanged}
        isLoading={isLoading}
        loadChannel={loadChannel}
        currentIndex={state.currentIndex}
      />
      <Box h="67px" />
    </>
  );
};

export default AudioPlayer;
