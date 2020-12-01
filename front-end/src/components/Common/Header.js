import React from 'react';
import {Link, NavLink} from "react-router-dom";
import clientConfig from "../../client-config";
import AnimateComp from "./AnimateComp";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Header extends React.Component {

    render() {
        const {headerMenuItems, header} = this.props;
        return (
            <AnimateComp>
                <div className="nav-container">
                    <nav className="top-bar overlay-bar">
                        <div className="container">

                            <div className="row utility-menu">
                                <div className="col-sm-12">
                                    <div className="utility-inner clearfix">
                                        <div className="top_header_left"
                                             dangerouslySetInnerHTML={{__html: header?.top_header_left}}>
                                        </div>

                                        <div className="pull-right top_header_right"
                                             dangerouslySetInnerHTML={{__html: header?.top_header_right}}>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row nav-menu">
                                <div className="col-sm-3 col-md-2 columns">
                                    <Link to="/">
                                        <img className="logo logo-light" alt="Logo"
                                             src={header?.site_logo}/>
                                        <img className="logo logo-dark" alt="Logo"
                                             src={header?.site_logo}/>
                                    </Link>
                                </div>

                                <div className="col-sm-9 col-md-10 columns">
                                    <ul className="menu">
                                        {
                                            headerMenuItems && headerMenuItems.map(item => (
                                                <li key={item.ID}>
                                                    <NavLink to={item.url.replace(clientConfig.siteUrl, '')}>
                                                        {item.title}
                                                    </NavLink>
                                                </li>
                                            ))
                                        }
                                    </ul>

                                    <ul className="social-icons text-right">
                                        {header?.facebook_link &&
                                        <li>
                                            <a href={header?.facebook_link}>
                                                <FontAwesomeIcon icon={["fab", "facebook"]}/>
                                            </a>
                                        </li>
                                        }
                                        {header?.facebook_link &&
                                        <li>
                                            <a href={header?.twitter_link}>
                                                <FontAwesomeIcon icon={["fab", "twitter"]}/>
                                            </a>
                                        </li>

                                        }
                                        {header?.facebook_link &&
                                        <li>
                                            <a href={header?.instagram_link}>
                                                <FontAwesomeIcon icon={["fab", "instagram"]}/>
                                            </a>
                                        </li>

                                        }
                                        {header?.facebook_link &&
                                        <li>
                                            <a href={header?.youtube_link}>
                                                <FontAwesomeIcon icon={["fab", "youtube"]}/>
                                            </a>
                                        </li>
                                        }
                                    </ul>
                                </div>
                            </div>

                            <div className="mobile-toggle">
                                <FontAwesomeIcon icon={["fab", "bars"]}/>
                            </div>

                        </div>
                    </nav>
                </div>
            </AnimateComp>
        );
    }
};

export default Header;