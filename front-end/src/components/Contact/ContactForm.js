import React, {Component} from 'react';
import Axios from "axios";
import apiEndpoints from "../../api-endpoints";
import AnimateComp from "../Common/AnimateComp";

class ContactForm extends Component {
    constructor() {
        super();
        this.state = {
            isSuccess: false,
            emptyName: false,
            emptyEmail: false,
            emptyMessage: false,
        };
    }

    submitForm(params) {
        Axios.post(apiEndpoints.contactForm, params)
            .then(res => {
                this.setState({...this.state, isSuccess: true})
            })
            .catch(e => console.warn(e))
    }

    formHandle(event) {
        event.preventDefault();
        const name = event.target.name.value.trim();
        const email = event.target.email.value.trim();
        const message = event.target.message.value.trim();
        let emptyName = false;
        let emptyEmail = false;
        let emptyMessage = false;
        if (name.length === 0) {
            emptyName = true;
        }
        if (email.length === 0) {
            emptyEmail = true;
        }
        if (message.length === 0) {
            emptyMessage = true;
        }
        this.setState({...this.state, emptyName: emptyName, emptyEmail: emptyEmail, emptyMessage: emptyMessage});
        if (name.length > 0 && email.length > 0 && message.length > 0) {
            this.submitForm({name, email, message});
        }
    }

    render() {
        const {emptyName, emptyEmail, emptyMessage, isSuccess} = this.state;
        return (
            <AnimateComp>
                <div className="row">
                    <div className="col-md-4 offset-md-4 col-sm-6 offset-sm-3">
                        <div className="form-wrapper clearfix">
                            <form method="POST" onSubmit={this.formHandle.bind(this)}
                                  className="form-contact email-form">
                                <div className="inputs-wrapper">
                                    {emptyName && <p className="text-danger">Name Field is required.</p>}
                                    <input className="form-name validate-required" type="text"
                                           placeholder="Your Name" name="name"/>
                                    {emptyEmail && <p className="text-danger">Email Field is required.</p>}
                                    <input className="form-email validate-required validate-email" type="text"
                                           name="email" placeholder="Your Email Address"/>
                                    {emptyMessage && <p className="text-danger">Message Field is required.</p>}
                                    <textarea className="form-message validate-required" name="message"
                                              placeholder="Your Message">
                                                </textarea>
                                </div>
                                <input type="submit" className="send-form" value="Send Form"/>
                                {isSuccess &&
                                <div className="form-success" style={{display: "block"}}>
                                    <span className="text-white">Message sent - Thanks for your enquiry</span>
                                </div>
                                }
                            </form>
                        </div>
                    </div>
                </div>
            </AnimateComp>
        );
    }
}

export default ContactForm;