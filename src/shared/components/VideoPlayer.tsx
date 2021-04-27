import React from "react";
import "video.js/dist/video-js.css";
import "./VideoPlayer.css";
import videojs from "video.js";

interface VideoPlayerPropsInferface extends videojs.PlayerOptions {
    token: string;
}

export default class VideoPlayer extends React.Component<VideoPlayerPropsInferface> {
  private player?: videojs.Player;
  private videoNode?: HTMLVideoElement;
  private options?: VideoPlayerPropsInferface;

  constructor(props: VideoPlayerPropsInferface) {
    super(props);
    this.options = props;
    this.player = undefined;
    this.videoNode = undefined;
  }

  componentDidMount() {
    // @ts-ignore
    videojs.Vhs.xhr.beforeRequest = (
      options: any
    ) => {
      options.uri = `${options.uri}${this.options?.token}`
      return options;
    };

    this.player = videojs(this.videoNode, this.options).ready(function () {
      console.log("onPlayerReady", this);
    });
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  render() {
    return (
      <div className="video-player">
        <div data-vjs-player>
          <video
            ref={(node: HTMLVideoElement) => {
              this.videoNode = node;
            }}
            className="vjs-fluid video-js vjs-default-skin vjs-big-play-centered"
          />
        </div>
      </div>
    );
  }
}
