import React, {Component, Fragment} from 'react';
import Axios from "axios";
import apiEndpoints from "../../api-endpoints";
import Post from "./Post";
import Loading from "../Common/Loading";
import CategoriesNav from "./CategoriesNav";
import AnimateComp from "../Common/AnimateComp";
import Masonry from "react-responsive-masonry"

class PostsByCategory extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            posts: [],
            category: {},
            catSlug: "",
        };
    }

    loadCategoryBySlug(slug) {
        Axios.get(apiEndpoints.categories + "/?slug=" + slug)
            .then(res => {
                this.setState({...this.state, category: res.data})
            })
            .catch(e => console.warn(e))
    }

    loadPostsByCategory(id) {
        Axios.get(apiEndpoints.posts, {params: {categories: id}})
            .then(res => {
                this.setState({...this.state, posts: res.data, isLoading: false})
            })
            .catch(e => console.warn(e))
    }

    componentDidMount() {
        const {catSlug} = this.props.match.params;
        this.loadCategoryBySlug(catSlug);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props !== prevProps) {
            this.loadCategoryBySlug(this.props.match.params.catSlug);
        }
        if (this.state.category !== prevState.category && this.state.category[0].id) {
            this.loadPostsByCategory(this.state.category[0].id)
        }
    }

    render() {
        const {isLoading, posts} = this.state;
        return (
            <AnimateComp>
                <section className="blog-masonry bg-muted">

                    <CategoriesNav urlSlug={this.props.match.params.catSlug}/>

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

export default PostsByCategory;