import React, {Component, Fragment} from 'react';
import Axios from "axios";
import apiEndpoints from "../../api-endpoints";
import Post from "./Post";
import Loading from "../Common/Loading";
import CategoriesNav from "./CategoriesNav";
import AnimateComp from "../Common/AnimateComp";
import Masonry from "react-responsive-masonry"

class Posts extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            posts: [],
        };
    }

    componentDidMount() {
        this.loadPosts();
    }

    loadPosts() {
        Axios.get(apiEndpoints.posts)
            .then(res => {
                this.setState({...this.state, posts: res.data, isLoading: false})
            })
            .catch(e => console.warn(e))
    }

    render() {
        const {isLoading, posts} = this.state;
        return (
            <AnimateComp>
                <section className="blog-masonry bg-muted">

                    <CategoriesNav/>

                    <div className="container">
                        <div className="blog-masonry-container">
                            <Masonry columnsCount={3} gutter={"30px"}>
                                {
                                    isLoading && <Loading/>
                                }
                                {
                                    posts && posts.map(post => (
                                        <Post post={post} key={post.id}/>
                                    ))
                                }
                            </Masonry>
                        </div>
                    </div>

                </section>
            </AnimateComp>
        );
    }
}

export default Posts;