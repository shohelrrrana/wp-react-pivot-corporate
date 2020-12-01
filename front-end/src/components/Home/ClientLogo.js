import React, {Component} from 'react';
import Axios from "axios";
import apiEndpoints from "../../api-endpoints";

class ClientLogo extends Component {
    constructor() {
        super();
        this.state = {
            clientLogos: []
        }
    }

    componentDidMount() {
        let {client_logos} = this.props.section;
        client_logos.map(logo => {
            Axios.get(apiEndpoints.media + "/" + logo)
                .then(res => {
                    let clientLogos = this.state.clientLogos;
                    clientLogos.push(res.data);
                    this.setState({...this.state, clientLogos: clientLogos})
                })
                .catch(e => console.warn(e))
        })
    }

    render() {
        const {clientLogos} = this.state;
        return (
            <section className="clients-2">
                <div className="container">
                    <div className="row">
                        {
                            clientLogos && clientLogos.map(logo => (
                                <div className="col-md-2 col-sm-4" key={logo.id}>
                                    <img alt="Client Logo" src={logo.source_url}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        );
    }
}

export default ClientLogo;