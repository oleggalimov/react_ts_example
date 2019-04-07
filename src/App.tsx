import * as React from 'react';
import * as ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import MainFlow from './components/MainFlow';
import Configstore from './store/Configstore';
import NextStep from './actions/NextStep';
import { Provider } from 'react-redux';

const store = Configstore();
store.subscribe(() => {
    console.log(`Current store: ${JSON.stringify(store.getState())}`);
});

class App extends React.Component {
    constructor(props: String) {
        super(props);
    }
    render() {
        if (store.getState().step == null) {
            console.log(`First time`);
            store.dispatch(NextStep("GREETINGS"));
        }
        return (
            <Provider store={store}>
                <MainFlow />
            </Provider>
        );
    }
}
ReactDom.render(<App />, document.getElementById('App')
);