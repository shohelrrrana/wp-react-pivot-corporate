import React, {Component} from 'react';
import {Link} from "react-router-dom";
import clientConfig from "../../client-config";
import Axios from "axios";
import apiEndpoints from "../../api-endpoints";

class CategoriesNav extends Component {

    constructor() {
        super();
        this.state = {
            categories: []
        };
    }

    componentDidMount() {
        this.loadCategories();
    }

    loadCategories() {
        Axios.get(apiEndpoints.categories)
            .then(res => {
                this.setState({...this.state, categories: res.data})
            })
            .catch(e => console.warn(e))
    }

    render() {
        const {categories} = this.state;
        const {urlSlug} = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <ul className="blog-filters">
                            <li className={urlSlug === undefined ? "active" : ""}>
                                <Link to="/blog">All</Link>
                            </li>
                            {
                                categories && categories.map(category => (
                                    <li key={category.id} className={category.slug === urlSlug ? "active" : ""}>
                                        <Link to={"/blog" + category.link.replace(clientConfig.siteUrl, '')}>
                                            {category.name}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default CategoriesNav;