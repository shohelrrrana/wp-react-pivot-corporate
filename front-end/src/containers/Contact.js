import React, {Component} from 'react';
import Axios from "axios";
import apiEndpoints from "../api-endpoints";
import Loading from "../components/Common/Loading";
import AnimateComp from "../components/Common/AnimateComp";
import PageHeader from "../components/Common/PageHeader";
import ContactCenter from "../components/Contact/ContactCenter";

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            pageFields: {},
            loading: true

        }
    }

    componentDidMount() {
        if (this.props?.pageId) {
            this.loadPageFieldsById(this.props.pageId);
        }
    }

    loadPageFieldsById(id) {
        Axios.get(apiEndpoints.postFields + "/" + id)
            .then(({data}) => {
                this.setState({...this.state, pageFields: data.carbon_fields, loading: false})
            })
            .catch(e => console.warn(e))
    }

    render() {
        const {pageFields, loading} = this.state;
        const sections = pageFields?.contact_page_sections;
        if (loading) return <Loading/>
        return (
            <AnimateComp>
                <div className="main-container">
                    {
                        sections && sections.map(section => {
                            switch (section._type) {
                                case "page_header_section":
                                    return <PageHeader section={section} key={section._type}/>
                                case "contact_section":
                                    return <ContactCenter section={section} key={section._type}/>
                            }
                        })
                    }
                </div>
            </AnimateComp>
        );
    }
}

export default Contact;