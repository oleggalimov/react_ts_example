import * as React from 'react';
import * as ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Footer from './Components/Footer';
import { Alert } from 'reactstrap';

class App extends React.Component {
    constructor(props: String) {
        super(props);
    }
    render() {
        return (
            <Alert>
                <Footer />
                </Alert>
        );
    }
}


ReactDom.render(
    // <div>
    //     <App/>
    //     <Footer/>
    // </div>
    <App />
    ,document.getElementById('App')
);