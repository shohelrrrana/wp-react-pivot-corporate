import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Footer extends Component {
    render() {
        const {footer} = this.props;
        return (
            <div className="footer-container">
                <footer className="bg-primary short-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <span className="text-white" dangerouslySetInnerHTML={{__html: footer?.footer_one}}>
                                </span>
                                <span className="text-white" dangerouslySetInnerHTML={{__html: footer?.footer_two}}>
                                </span>
                                <span className="text-white" dangerouslySetInnerHTML={{__html: footer?.footer_three}}>
                                </span>
                                <span className="text-white" dangerouslySetInnerHTML={{__html: footer?.footer_four}}>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="contact-action">
                        <div className="align-vertical" style={{paddingTop: "80px"}}>
                            <FontAwesomeIcon icon={"envelope"}/>&nbsp;
                            <Link to="/contact" className="text-white">
                                <span className="text-white">
                                    Get in touch with us &nbsp; <FontAwesomeIcon icon={"arrow-right"}/>
                                </span>
                            </Link>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;