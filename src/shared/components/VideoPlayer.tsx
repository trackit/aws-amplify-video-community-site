import React from 'react';
import 'video.js/dist/video-js.css';
import './VideoPlayer.css'
import videojs from 'video.js';

interface VideoPlayerPropsInferface extends videojs.PlayerOptions {
    videoJsOptions: videojs.PlayerOptions;
    sources: Array<{src: string, type: string}>
}

export default class VideoPlayer extends React.Component<any> {
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
        const { src } = this.props.sources[0]
        console.log("src:", this.props.token)
        //  instantiate video.js
        this.player = videojs(this.videoNode, this.options).ready(function() {
            console.log('onPlayerReady', this);
        });
        videojs.xhr({
            url: src,
            beforeSend: function (options: any) {
                options.url = `${options.url}${videojs.getAllPlayers()[0].options(null).token}`;
                console.log(options)
                return options;
            }
        }, (res) => {
            console.log('Player res: ', res);
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
            <div className='video-player'>
                <div data-vjs-player>
                    <video ref={(node: HTMLVideoElement) => { this.videoNode = node; }} className="vjs-fluid video-js vjs-default-skin vjs-big-play-centered"/>
                </div>
            </div>
        );
    }
}
