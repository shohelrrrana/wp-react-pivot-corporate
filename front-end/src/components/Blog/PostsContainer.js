import React, {Component, Fragment} from 'react';
import Axios from "axios";
import apiEndpoints from "../../api-endpoints";
import {Route, Link, BrowserRouter} from "react-router-dom";
import clientConfig from "../../client-config"
import Posts from "./Posts";
import PostsByCategory from "./PostsByCategory";

class PostsContainer extends Component {

    constructor() {
        super();
        this.state = {
            categories: []
        };
    }

    render() {
        return (
            <Fragment>
                <Route path="/blog" component={Posts} exact/>
                <Route path="/blog/category/:catSlug" component={PostsByCategory} exact/>
                <Route path="/category/:catSlug" component={PostsByCategory} exact/>
            </Fragment>
        );
    }
}

export default PostsContainer;