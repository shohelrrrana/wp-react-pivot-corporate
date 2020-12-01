import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import Axios from "axios";
import apiEndpoints from "../../api-endpoints";
import AnimateComp from "../Common/AnimateComp";

class Post extends Component {
    constructor() {
        super();
        this.state = {
            postImage: {},
            postCategories: [],
        };
    }

    componentDidMount() {
        if (this.props.post?.featured_media) {
            this.loadPostImage(this.props.post.featured_media);
        }
        if (this.props.post?.categories.length) {
            this.loadCategoriesByIds(this.props.post.categories);
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

    render() {
        const {title, excerpt, slug, date} = this.props.post;
        const {postImage, postCategories} = this.state;
        const _date = new Date(date).toDateString();
        return (
            <div className="blog-masonry-item branding">
                <div className="item-inner">
                    <AnimateComp>
                        {
                            postImage?.source_url && (<Link to={`/blog/${slug}`}>
                                <img alt="Blog Preview" src={postImage.source_url}/>
                            </Link>)
                        }
                        <div className="post-title">
                            <Link to={`/blog/${slug}`}>
                                <h2> {title.rendered} </h2>
                            </Link>
                            <div dangerouslySetInnerHTML={{__html: excerpt.rendered}}>
                            </div>
                            <div className="post-meta">
                                <span className="sub alt-font">Posted on {_date}</span>
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
                            <br/> <br/>
                            <Link to={`/blog/${slug}`} className="link-text">Read More</Link>
                        </div>
                    </AnimateComp>
                </div>
            </div>
        );
    }
}

export default Post;