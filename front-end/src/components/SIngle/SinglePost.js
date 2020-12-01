import React, {Component, Fragment} from 'react';
import Axios from "axios";
import apiEndpoints from "../../api-endpoints";
import {Link} from "react-router-dom";
import AnimateComp from "../Common/AnimateComp";

class SinglePost extends Component {
    constructor() {
        super();
        this.state = {
            postImage: {},
            postCategories: [],
            author: {},
        }
    }

    componentDidMount() {
        if (this.props.post?.featured_media) {
            this.loadPostImage(this.props.post.featured_media);
        }
        if (this.props.post?.categories.length) {
            this.loadCategoriesByIds(this.props.post.categories);
        }
        if (this.props.post?.author) {
            this.loadAuthorById(this.props.post.author);
        }
    }

    loadPostImage(imageId) {
        Axios.get(apiEndpoints.media + "/" + imageId)
            .then(res => {
                this.setState({...this.state, postImage: res.data})
            })
            .catch(e => console.warn(e))
    }

    loadCategoriesByIds(ids) {
        Axios.get(apiEndpoints.categories, {params: {include: ids}})
            .then(res => {
                this.setState({...this.state, postCategories: res.data})
            })
            .catch(e => console.warn(e))
    }

    loadAuthorById(id) {
        Axios.get(apiEndpoints.users + "/" + id)
            .then(res => {
                this.setState({...this.state, author: res.data})
            })
            .catch(e => console.warn(e))
    }

    render() {
        const {title, content, date} = this.props.post;
        const {postImage, postCategories, author} = this.state;
        const _date = new Date(date).toDateString();

        return (
            <AnimateComp>
                <div className="main-container">
                    <header className="title">
                        <div className="background-image-holder parallax-background">
                            <img className="background-image" alt="Background Image"
                                 src={postImage?.source_url}/>
                        </div>

                        <div className="container align-bottom d-flex align-items-center" style={{height: "80vh"}}>
                            <div className="row">
                                <div className="col-xs-12">
                                    <h1 className="text-white">
                                        {title.rendered}
                                    </h1>
                                    <span className="sub alt-font text-white">
                                    {_date}
                                </span>
                                    <br/>
                                    <span className="sub alt-font">
                                {
                                    postCategories && postCategories.map(category => (
                                        <Fragment key={category.slug}>
                                            <Link to={"/blog/category/" + category.slug}>
                                                {category.name}
                                            </Link>
                                            &nbsp;
                                        </Fragment>
                                    ))
                                }
                            </span>
                                </div>
                            </div>
                        </div>
                    </header>

                    <section className="article-single">
                        <div className="container">
                            <div className="row">

                                <div className="col-sm-4 col-md-3">
                                    <div className="author-details no-pad-top">
                                        <img alt="Author" src={author.avatar_urls ? author.avatar_urls[96] : ""}/>
                                        <h5>{author.name}</h5>
                                    </div>
                                </div>

                                <div className="col-sm-8">
                                    <div className="article-body" dangerouslySetInnerHTML={{__html: content.rendered}}>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>

                </div>
            </AnimateComp>
        );
    }
}

export default SinglePost;