import React, {Component} from 'react';
import AnimateComp from "../Common/AnimateComp";

class SinglePage extends Component {
    render() {
        const {page} = this.props;
        return (
            <AnimateComp>
                <div className="main-container">
                    <header className="page-header">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 text-center">
                                    <h1>{page.title.rendered}</h1>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div className="container">
                        <div className="content" dangerouslySetInnerHTML={{__html: page.content.rendered}}>
                        </div>
                    </div>
                </div>
            </AnimateComp>
        );
    }
}

export default SinglePage;