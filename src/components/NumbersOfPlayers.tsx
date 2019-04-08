import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Fade, Container, Row, Col, Input, Jumbotron } from 'reactstrap';
import "../styles/AlignCenter.css";
import NextStep from '../actions/NextStep';
import SetNumbersOfPlayersAction from '../actions/SetNumbersOfPlayers';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { FiPlusSquare, FiMinusSquare, FiCheckSquare } from "react-icons/fi";
import { IconContext } from "react-icons";

class NumbersOfPlayers extends React.Component<Props, StateProps> {
    constructor(props: any) {
        super(props);
        this.state = {
            fadeIn: this.props.step == "NUMBEROFPLAYERS" ? true : false,
            counter: 0
        };
    }
    handleClick(type: String) {
        switch (type) {
            case "Increment":
                this.state.counter < 8 ? this.setState({ counter: this.state.counter + 1 }) : null;
                break;
            case "Decrement": 
                this.state.counter != 0 ? this.setState({ counter: this.state.counter - 1 }) :null;
                break;
            case "Confirm": 
                if (this.state.counter != 0) {
                    this.props.SetNumbersOfPlayersAction(this.state.counter);
                    this.props.NextStep("NAMESOFPLAYERS");
                }
                break;
            default:
                break;
        }
    }


    render() {
        return (
            <div className="container">
                <Fade in={this.state.fadeIn} tag="h5" className="mt-3" timeout={1000}>
                    <Row>
                        <Col>
                            <div className="playerscounter question">
                                Сколько будет игроков?
                            </div>
                        </Col>

                    </Row>
                    <Row>
                        <Col>
                            <h1 className="playerscounter counter">
                                {this.state.counter}
                            </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <IconContext.Provider value={{ color: "green", className: "playerscounter button add" }}>
                                <FiPlusSquare onClick={() => this.handleClick("Increment")} />
                            </IconContext.Provider>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <IconContext.Provider value={{ color: "green", className: "playerscounter button add" }}>
                                <FiMinusSquare onClick={() => this.handleClick("Decrement")} />
                            </IconContext.Provider>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <IconContext.Provider value={{ color: "blue", className: "playerscounter button add" }}>
                                <FiCheckSquare onClick={() => this.handleClick("Confirm")} />
                            </IconContext.Provider>
                        </Col>
                    </Row>
                </Fade>
            </div>

        );
    }
}
const mapStateToProps = (state: any) => ({ step: state.step });

interface DispatchProps {
    NextStep: typeof NextStep,
    SetNumbersOfPlayersAction: typeof SetNumbersOfPlayersAction
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    ...bindActionCreators({ NextStep,SetNumbersOfPlayersAction }, dispatch),
});

interface Props extends StateProps, DispatchProps {
    step: string
}
interface StateProps {
    fadeIn: boolean,
    counter: number
}

export default connect(mapStateToProps, mapDispatchToProps)(NumbersOfPlayers);