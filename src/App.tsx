import * as React from 'react';
import * as ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import NumbersOfPlayers from './Components/NumbersOfPlayers';

class App extends React.Component {
    constructor(props: String) {
        super(props);
    }
    render() {
        return (
                <NumbersOfPlayers/>
        );
    }
}
ReactDom.render(
    <div>
        <App/>
        
    </div>
    // <App />
    ,document.getElementById('App')
);