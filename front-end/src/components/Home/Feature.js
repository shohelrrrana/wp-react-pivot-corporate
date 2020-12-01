import React, {Component} from 'react';
import Axios from "axios";
import apiEndpoints from "../../api-endpoints";

class Feature extends Component {
    constructor() {
        super();
        this.state = {
            bgImages: []
        }
    }

    componentDidMount() {
        let {features} = this.props.section;
        features.map(feature => {
            Axios.get(apiEndpoints.media + "/" + feature.bg_image)
                .then(res => {
                    let bgImages = this.state.bgImages;
                    bgImages.push(res.data);
                    this.setState({...this.state, bgImages: bgImages})
                })
                .catch(e => console.warn(e))
        })
    }

    render() {
        const {features} = this.props.section;
        return (
            <section className="no-pad clearfix">
                <div className="row">

                    {
                        features && features.map(feature => (
                            <div className="col-md-6 col-sm-12 no-pad" key={feature._type}>
                                <div className="feature-box">
                                    <div className="background-image-holder overlay">
                                        {
                                            this.state.bgImages && this.state.bgImages.map(image => {
                                                if (image.id == feature.bg_image) {
                                                    return <img key={image.id} className="background-image"
                                                                alt="Background Image"
                                                                src={image.source_url}/>
                                                }
                                            })
                                        }
                                    </div>

                                    <div className="inner">
                                    <span className="alt-font text-white">
                                        {feature.sub_title}
                                    </span>
                                        <h1 className="text-white">
                                            {feature.title}
                                        </h1>
                                        <div className="text-white" dangerouslySetInnerHTML={{__html: feature.desc}}>
                                        </div>
                                        <a href={feature.button_url} className="btn btn-primary btn-white">
                                            {feature.button_title}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </section>
        );
    }
}

export default Feature;