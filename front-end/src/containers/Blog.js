import React, {Fragment} from "react";
import Axios from "axios";
import apiEndpoints from "../api-endpoints";
import Loading from "../components/Common/Loading";
import PostsContainer from "../components/Blog/PostsContainer";
import AnimateComp from "../components/Common/AnimateComp";
import PageHeader from "../components/Common/PageHeader";

class Blog extends React.Component {

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
        const sections = pageFields?.blog_page_sections;
        if (loading) return <Loading/>
        return (
            <AnimateComp>
                {
                    sections && sections.map(section => {
                        switch (section._type) {
                            case "header_section":
                                return <PageHeader section={section} key={section._type}/>
                        }
                    })
                }
                <PostsContainer/>
            </AnimateComp>
        );
    }
}

export default Blog;