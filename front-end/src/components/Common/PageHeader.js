import React, {Component} from 'react';
import Axios from "axios";
import apiEndpoints from "../../api-endpoints";

class PageHeader extends Component {
    constructor() {
        super();
        this.state = {
            sectionBgImage: {},
            loading: true

        }
    }

    componentDidMount() {
        if (this.props.section?.section_bg) {
            this.loadSectionBgImage(this.props.section.section_bg);
        }
    }

    loadSectionBgImage(id) {
        Axios.get(apiEndpoints.media + "/" + id)
            .then((res) => {
                this.setState({...this.state, sectionBgImage: res.data, loading: false})
            })
            .catch(e => console.warn(e))
    }

    render() {
        const {sub_heading, heading} = this.props.section;
        return (
            <header className="page-header">
                <div className="background-image-holder parallax-background">
                    <img className="background-image" alt="Background Image"
                         src={this.state.sectionBgImage?.source_url}/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <span className="text-white alt-font">
                                {sub_heading}
                            </span>
                            <h1 className="text-white">
                                {heading}
                            </h1>

                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default PageHeader;