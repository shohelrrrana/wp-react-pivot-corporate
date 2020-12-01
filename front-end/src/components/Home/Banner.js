import React, {Component} from 'react';
import Axios from "axios";
import apiEndpoints from "../../api-endpoints";

class Banner extends Component {
    constructor() {
        super();
        this.state = {
            heroBgImage: ""
        }
    }

    componentDidMount() {
        Axios.get(apiEndpoints.media + '/' + this.props.section.hero_bg)
            .then(res => {
                this.setState({...this.state, heroBgImage: res.data})
            })
            .catch(e => console.warn(e))
    }

    render() {
        const {hero_title, hero_desc, button_one_title, button_one_url, button_two_title, button_two_url, hero_bg} = this.props.section;
        const heroBgImage = this.state.heroBgImage ? this.state.heroBgImage.source_url : "";
        return (
            <header className="page-header">
                <div className="background-image-holder parallax-background">
                    <img className="background-image" alt="Background Image"
                         src={heroBgImage}/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <h1 className="text-white space-bottom-medium font-weight-bold" style={{fontSize: "70px"}}>
                                {hero_title}
                            </h1>
                            <h2 className="text-white space-bottom-medium"
                                dangerouslySetInnerHTML={{__html: hero_desc}}>
                            </h2>
                            <a target="_blank" href={button_one_url} className="btn btn-primary btn-white">
                                {button_one_title}
                            </a>
                            <a href={button_two_url} className="btn btn-primary btn-filled">
                                {button_two_title}
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Banner;