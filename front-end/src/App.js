import React, {Fragment} from "react";
import './lib/fontAwesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./asstes/css/flexslider.min.css";
import "./asstes/css/theme-blues.css";
import "./App.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/Common/Header";
import Home from "./containers/Home";
import Blog from "./containers/Blog";
import Contact from "./containers/Contact";
import Axios from "axios";
import apiEndpoints from "./api-endpoints";
import Single from "./containers/Single";
import Footer from "./components/Common/Footer";

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            headerMenuItems: [],
            themeOptions: {},
        };
    }

    componentDidMount() {
        this.loadHeaderMenu();
        this.loadThemeOptions();
    }

    loadHeaderMenu() {
        Axios.get(apiEndpoints.headerMenu)
            .then(res => {
                this.setState({...this.state, headerMenuItems: res.data})
            })
            .catch(e => console.warn(e))
    }

    loadThemeOptions() {
        Axios.get(apiEndpoints.themeOptions)
            .then(res => {
                this.setState({...this.state, themeOptions: res.data})
            })
            .catch(e => console.warn(e))
    }

    render() {
        const {headerMenuItems, themeOptions} = this.state;
        return (
            <Router>
                <Header headerMenuItems={headerMenuItems} header={themeOptions.header}/>
                <Route path="/blog/:slug" component={Single} exact/>
                <Route path="/:slug" component={Single} exact/>
                {
                    headerMenuItems && headerMenuItems.map(page => {
                        switch (page?.page_type) {
                            case "home":
                                return (
                                    <Route path="/" key={page.page_id} exact>
                                        <Home pageId={page.page_id}/>
                                    </Route>
                                )
                            case "blog":
                                return (
                                    <Fragment key={page.page_id}>
                                        <Route path="/blog" exact>
                                            <Blog pageId={page.page_id}/>
                                        </Route>
                                        <Route path="/blog/category">
                                            <Blog pageId={page.page_id}/>
                                        </Route>
                                        <Route path="/category">
                                            <Blog pageId={page.page_id}/>
                                        </Route>
                                    </Fragment>
                                )
                            case "contact":
                                return (
                                    <Route path="/contact" key={page.page_id} exact>
                                        <Contact pageId={page.page_id}/>
                                    </Route>
                                )
                        }
                    })
                }
                <Footer footer={themeOptions.footer}/>
            </Router>
        )
    };
}

export default App;