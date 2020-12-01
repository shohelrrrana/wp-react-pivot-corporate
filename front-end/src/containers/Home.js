import React, {Fragment} from "react";
import Banner from "../components/Home/Banner";
import Cta from "../components/Home/Cta";
import Video from "../components/Home/Video";
import Feature from "../components/Home/Feature";
import ClientLogo from "../components/Home/ClientLogo";
import Axios from "axios";
import apiEndpoints from "../api-endpoints";
import Loading from "../components/Common/Loading";
import AnimateComp from "../components/Common/AnimateComp";

class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            pageFields: {},
            loading: true

        }
    }

    componentDidMount() {
        Axios.get(apiEndpoints.postFields + "/" + this.props.pageId)
            .then(({data}) => {
                this.setState({...this.state, pageFields: data.carbon_fields, loading: false})
            })
            .catch(e => console.warn(e))
    }

    render() {
        const {pageFields, loading} = this.state;
        const sections = pageFields.home_page_sections;
        if (loading) return <Loading/>
        return (
            <AnimateComp>
                <Fragment>
                    {
                        sections && sections.map(section => {
                            switch (section._type) {
                                case "hero_section":
                                    return <Banner section={section} key={section._type}/>
                                case "cta_section":
                                    return <Cta section={section} key={section._type}/>
                                case "video_section":
                                    return <Video section={section} key={section._type}/>
                                case "feature_section":
                                    return <Feature section={section} key={section._type}/>
                                case "client_logo_section":
                                    return <ClientLogo section={section} key={section._type}/>
                            }
                        })
                    }
                </Fragment>
            </AnimateComp>
        );
    }
}

export default Home;