import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Fade, Container, Row, Col, Input } from 'reactstrap';
import "../styles/AlignCenter.css"
import Button from 'reactstrap/lib/Button';
import NextStep from '../actions/NextStep';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

class Greetings extends React.Component<Props, StateProps> {
    constructor(props: any) {
        super(props);
        this.state = { 
            fadeIn: this.props.step=="GREETINGS"? true:false
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
            fadeIn: !this.state.fadeIn
        });
        this.props.NextStep("NUMBEROFPLAYERS");
    }
    
    render() {
        return (
            <div className="container">
                <Fade in={this.props.step=="GREETINGS"? true:false} tag="h1" className="greeting" timeout={1000} >
                    <Row>
                        <Col>
                            <p>
                                Приветствую Вас!
                            </p>
                        </Col>

                    </Row>
                    <Fade in={this.state.fadeIn} className="mt-3 greeting button" timeout={2000} >
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

//
const mapStateToProps = (state: any) => ({ step:state.step });

interface DispatchProps {
    NextStep:typeof NextStep
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    ...bindActionCreators({ NextStep }, dispatch),
  });

interface Props extends StateProps, DispatchProps {
  step:string
}
interface StateProps {
    fadeIn:boolean 
}

export default connect(mapStateToProps, mapDispatchToProps)(Greetings);