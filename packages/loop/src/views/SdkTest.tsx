import React, { useEffect } from "react";
import { EventType } from "@pluginio/sdk";
import { NavLink } from "react-router-dom";
import { Button, Heading, Link, Text } from "@chakra-ui/react";
import Activity from "../components/Activity";
import { usePlugin } from "../components/PluginProvider";

const SdkTest = () => {
  const { api, addEventListener, config } = usePlugin();

  useEffect(() => {
    console.log("CONFIG THEME: ", config.getString("theme"));

    // misc
    addEventListener(EventType.CAMERA_RESPONSE, (e: MessageEvent) => {
      console.log(EventType.CAMERA_RESPONSE, e.data);
    });

    addEventListener(EventType.UPLOAD_RESPONSE, (e: MessageEvent) => {
      console.log(EventType.UPLOAD_RESPONSE, e.data);
    });

    // ad
    addEventListener(EventType.AD_BANNER_RESPONSE, (e: MessageEvent) => {
      console.log(EventType.AD_BANNER_RESPONSE, e.data);
    });

    addEventListener(EventType.AD_IMAGE_RESPONSE, (e: MessageEvent) => {
      console.log(EventType.AD_IMAGE_RESPONSE, e.data);
    });

    addEventListener(EventType.AD_VIDEO_RESPONSE, (e: MessageEvent) => {
      console.log(EventType.AD_VIDEO_RESPONSE, e.data);
    });

    addEventListener(EventType.AD_VIDEO_REWARD_RESPONSE, (e: MessageEvent) => {
      console.log(EventType.AD_VIDEO_REWARD_RESPONSE, e.data);
    });

    // data
    addEventListener(EventType.DATA_LOAD_RESPONSE, (e: MessageEvent) => {
      console.log(EventType.DATA_LOAD_RESPONSE, e.data);
    });

    addEventListener(EventType.DATA_SAVE_RESPONSE, (e: MessageEvent) => {
      console.log(EventType.DATA_SAVE_RESPONSE, e.data);
    });

    // purchase
    addEventListener(EventType.PURCHASE_BUY_RESPONSE, (e: MessageEvent) => {
      console.log(EventType.PURCHASE_BUY_RESPONSE, e.data);
    });

    addEventListener(
      EventType.PURCHASE_IS_SUBSCRIBED_RESPONSE,
      (e: MessageEvent) => {
        console.log(EventType.PURCHASE_IS_SUBSCRIBED_RESPONSE, e.data);
      }
    );

    addEventListener(
      EventType.PURCHASE_SUBSCRIBE_RESPONSE,
      (e: MessageEvent) => {
        console.log(EventType.PURCHASE_SUBSCRIBE_RESPONSE, e.data);
      }
    );

    addEventListener(EventType.PURCHASE_STORE_RESPONSE, (e: MessageEvent) => {
      console.log(EventType.PURCHASE_STORE_RESPONSE, e.data);
    });

    // share
    addEventListener(EventType.SHARE_SOCIAL_RESPONSE, (e: MessageEvent) => {
      console.log(EventType.SHARE_SOCIAL_RESPONSE, e.data);
    });

    addEventListener(EventType.SHARE_INVITE_RESPONSE, (e: MessageEvent) => {
      console.log(EventType.SHARE_INVITE_RESPONSE, e.data);
    });

    // user
    addEventListener(EventType.USER_USERNAME_RESPONSE, (e: MessageEvent) => {
      console.log(EventType.USER_USERNAME_RESPONSE, e.data);
    });

    addEventListener(EventType.USER_FRIENDS_RESPONSE, (e: MessageEvent) => {
      console.log(EventType.USER_FRIENDS_RESPONSE, e.data);
    });

    addEventListener(EventType.USER_FOLLOWERS_RESPONSE, (e: MessageEvent) => {
      console.log(EventType.USER_FOLLOWERS_RESPONSE, e.data);
    });

    addEventListener(EventType.USER_FOLLOWING_RESPONSE, (e: MessageEvent) => {
      console.log(EventType.USER_FOLLOWING_RESPONSE, e.data);
    });

    addEventListener(
      EventType.USER_IS_LOGGED_IN_RESPONSE,
      (e: MessageEvent) => {
        console.log(EventType.USER_IS_LOGGED_IN_RESPONSE, e.data);
      }
    );
  }, []);

  return (
    <Activity>
      <Heading py="4" as="h1" size="3xl">
        Loop - SDK testing
      </Heading>

      <NavLink to="/">
        <Button colorScheme={config.getString("theme") ?? "green"}>Home</Button>
      </NavLink>

      {/* Advert */}
      <Heading py="2" as="h3" size="1xl">
        Advert
      </Heading>
      <Link onClick={() => api.advert.showBanner()}>
        advert.showBanner
      </Link>
      <br />
      <Link onClick={() => api.advert.showImage()}>
        advert.showImage
      </Link>
      <br />
      <Link onClick={() => api.advert.showVideo()}>
        advert.showVideo
      </Link>
      <br />
      <Link onClick={() => api.advert.showVideoReward("id")}>
        advert.showReward
      </Link>
      <br />

      {/* Analytics */}
      <Heading py="2" as="h3" size="1xl">
        Analytics
      </Heading>
      <Link onClick={() => api.analytics.startup()}>
        analytics.startup
      </Link>
      <br />
      <Link onClick={() => api.analytics.contentView()}>
        analytics.contentView
      </Link>
      <br />
      <Link onClick={() => api.analytics.purchase("1")}>
        analytics.purchase
      </Link>
      <br />
      <Link onClick={() => api.analytics.addToCart()}>
        analytics.addToCart
      </Link>
      <br />
      <Link onClick={() => api.analytics.startCheckout()}>
        analytics.startCheckout
      </Link>
      <br />
      <Link onClick={() => api.analytics.search()}>
        analytics.search
      </Link>
      <br />
      <Link onClick={() => api.analytics.share()}>
        analytics.share
      </Link>
      <br />
      <Link onClick={() => api.analytics.rating()}>
        analytics.rating
      </Link>
      <br />
      <Link onClick={() => api.analytics.signup()}>
        analytics.signup
      </Link>
      <br />
      <Link onClick={() => api.analytics.login()}>
        analytics.login
      </Link>
      <br />
      <Link onClick={() => api.analytics.invite()}>
        analytics.invite
      </Link>
      <br />
      <Link onClick={() => api.analytics.levelStart()}>
        analytics.levelStart
      </Link>
      <br />
      <Link onClick={() => api.analytics.levelComplete()}>
        analytics.levelComplete
      </Link>
      <br />
      <Link onClick={() => api.analytics.userInfo()}>
        analytics.userInfo
      </Link>
      <br />

      {/* Camera */}
      <Heading py="2" as="h3" size="1xl">
        Camera
      </Heading>
      <Link onClick={() => api.camera.show()}>
        camera.show
      </Link>

      {/* Console */}
      <Heading py="2" as="h3" size="1xl">
        Console
      </Heading>
      <Link onClick={() => api.console.log("LOG", "Test log")}>
        console.log
      </Link>
      <br />
      <Link onClick={() => api.console.info("INFO", "Test info")}>
        console.info
      </Link>
      <br />
      <Link onClick={() => api.console.warn("WARN", "Test warn")}>
        console.warn
      </Link>
      <br />
      <Link onClick={() => api.console.error("ERROR", "Test error")}>
        console.error
      </Link>
      <br />

      {/* Data */}
      <Heading py="2" as="h3" size="1xl">
        Data
      </Heading>
      <Link onClick={() => api.data.load()}>
        data.load
      </Link>
      <br />
      <Link onClick={() => api.data.save({})}>
        data.save
      </Link>

      {/* Purchase */}
      <Heading py="2" as="h3" size="1xl">
        Purchase
      </Heading>
      <Link onClick={() => api.purchase.buy("id")}>
        purchase.buy
      </Link>
      <br />
      <Link onClick={() => api.purchase.isSubscribed()}>
        purchase.isSubscribed
      </Link>
      <br />
      <Link onClick={() => api.purchase.subscribe("id")}>
        purchase.subscribe
      </Link>
      <br />
      <Link onClick={() => api.purchase.showStore("id")}>
        purchase.showStore
      </Link>

      {/* Share */}
      <Heading py="2" as="h3" size="1xl">
        Share
      </Heading>
      <Link onClick={() => api.share.social()}>
        share.social
      </Link>
      <br />
      <Link onClick={() => api.share.invite()}>
        share.invite
      </Link>

      {/* User */}
      <Heading py="2" as="h3" size="1xl">
        User
      </Heading>
      <Link onClick={() => api.user.username()}>
        user.username
      </Link>
      <br />
      <Link onClick={() => api.user.friends()}>
        user.friends
      </Link>
      <br />
      <Link onClick={() => api.user.followers()}>
        user.followers
      </Link>
      <br />
      <Link onClick={() => api.user.following()}>
        user.following
      </Link>
      <br />
      <Link onClick={() => api.user.isLoggedIn()}>
        user.isLoggedIn
      </Link>
      <br />
      <Link onClick={() => api.user.login()}>
        user.login
      </Link>
      <br />
    </Activity>
  );
};

export default SdkTest;
