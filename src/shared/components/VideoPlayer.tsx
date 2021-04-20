import React from 'react';
import 'video.js/dist/video-js.css';
import './VideoPlayer.css'
/*
interface VideoPlayerPropsInferface {
    videoJsOptions: videojs.PlayerOptions;
}

export default class VideoPlayer extends React.Component {
    private player?: videojs.Player;
    private videoNode?: HTMLVideoElement;
    private options?: videojs.PlayerOptions

    constructor(props: videojs.PlayerOptions) {
        super(props);
        this.options = props;
        this.player = undefined;
        this.videoNode = undefined;
    }

    componentDidMount() {
//        videojs.Hls.xhr.beforeRequest = function (options: any) {
//            options.uri = `${options.uri}${videojs.getAllPlayers()[0].options(null).token}`;
//            return options;
//        };
        // instantiate video.js
        this.player = videojs(this.videoNode, this.options).ready(function() {
            // console.log('onPlayerReady', this);
        });
    }

    // destroy player on unmount
    componentWillUnmount() {
        if (this.player) {
            this.player.dispose();
        }
    }

    // wrap the player in a div with a `data-vjs-player` attribute
    // so videojs won't create additional wrapper in the DOM
    // see https://github.com/videojs/video.js/pull/3856
    render() {
        return (
            <div className="c-player video-player">
                <div className="c-player__screen" data-vjs-player="true">
                    <video ref={(node: HTMLVideoElement) => this.videoNode = node} className="vjs-fluid video-js vjs-default-skin vjs-big-play-centered" />
                </div>
                <div className="c-player__controls">
                    <button>Play</button>
                    <button>Pause</button>
                </div>
            </div>
        );
    }
}*/
