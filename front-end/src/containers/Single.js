import React, {Component} from 'react';
import Axios from "axios";
import apiEndpoints from "../api-endpoints";
import SinglePost from "../components/SIngle/SinglePost";
import SinglePage from "../components/SIngle/SinglePage";

class Single extends Component {
    constructor() {
        super();
        this.state = {
            post: [],
            page: [],
        };
    }

    componentDidMount() {
        const slug = this.props?.match?.params?.slug;
        if (slug) {
            this.loadPostBySlug(slug);
            this.loadPageBySlug(slug);
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match !== this.props.match) {
            const slug = this.props?.match?.params?.slug;
            if (slug) {
                this.loadPostBySlug(slug);
                this.loadPageBySlug(slug);
            }
        }
    }

    loadPostBySlug(slug) {
        Axios.get(apiEndpoints.posts, {params: {slug: slug}})
            .then(res => {
                this.setState({...this.state, post: res.data})
            })
            .catch(e => console.warn(e))
    }

    loadPageBySlug(slug) {
        Axios.get(apiEndpoints.pages, {params: {slug: slug}})
            .then(res => {
                this.setState({...this.state, page: res.data})
            })
            .catch(e => console.warn(e))
    }

    render() {
        if (this.state.page.length === 1 && this.state.page[0].page_type === "default") {
            return <SinglePage page={this.state.page[0]}/>
        } else if (this.state.post.length === 1) {
            return <SinglePost post={this.state.post[0]}/>
        }
        return (
            <div>

            </div>
        );
    }
}

export default Single;