import React, {Component} from 'react';

class Cta extends Component {
    render() {
        const {section_title, button_title, button_url} = this.props.section;
        return (
            <section className="strip bg-secondary-1">
                <div className="container">
                    <div className="row clearfix">
                        <div className="col-sm-6 col-xs-12 pull-left">
                            <h3 className="text-white">
                                {section_title}
                            </h3>
                        </div>

                        <div className="col-sm-4 col-xs-12 pull-right text-right">
                            <a href={button_url} className="btn btn-primary btn-white">
                                {button_title}
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Cta;