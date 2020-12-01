import React, {Component} from 'react';
import ReactPlayer from "react-player";

class Video extends Component {
    render() {
        const {section_title, section_desc, button_title, button_url, video_url} = this.props.section;
        return (
            <section className="video-inline">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <h1 className="space-bottom-medium">
                                {section_title}
                            </h1>
                            <div className="desc" dangerouslySetInnerHTML={{__html: section_desc}}>

                            </div>
                            <a href={button_url} className="btn btn-primary">
                                {button_title}
                            </a>
                        </div>

                        <div className="col-md-6 col-sm-12">
                            <div className="inline-video-wrapper">
                                <ReactPlayer controls playing url={video_url}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Video;