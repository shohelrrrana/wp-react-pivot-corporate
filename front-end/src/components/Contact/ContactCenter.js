import React, {Component} from 'react';
import ContactForm from "./ContactForm";

class ContactCenter extends Component {
    render() {
        const {section_title, section_desc} = this.props.section;
        return (
            <section className="contact-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 col-sm-8 offset-sm-2 text-center">
                            <div className="section_title" dangerouslySetInnerHTML={{__html: section_title}}>
                            </div>
                            <div className="section_desc" dangerouslySetInnerHTML={{__html: section_desc}}>
                            </div>
                        </div>
                    </div>

                    <ContactForm/>

                </div>
            </section>
        );
    }
}

export default ContactCenter;