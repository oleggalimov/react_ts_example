import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Fade, Container, Row, Col, Input } from 'reactstrap';
import "../Styles/AlignCenter.css"
import Button from 'reactstrap/lib/Button';

export default class Greetings extends React.Component<{},{fadeIn:boolean}> {
    constructor(props: String) {
        super(props);
        this.state = { fadeIn: true };
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
            fadeIn: !this.state.fadeIn
        });
    }
    render() {
        return (
            <div className="container">
                <Fade in={this.state.fadeIn} tag="h1" className="greeting" timeout={1000} >
                    <Row>

                        <Col>
                            <p>
                            Приветствую Вас!
                            </p>
                        </Col>

                    </Row>
                    <Fade in={this.state.fadeIn} className="mt-3 greeting button"  timeout={2000} >
                    <Row>
                        <Col>
                        <Button color="primary" onClick={this.toggle} size="lg">Привет</Button>
                        </Col>
                        
                    </Row>
                    </Fade>
                    
                </Fade>
            </div>

        );
    }
}