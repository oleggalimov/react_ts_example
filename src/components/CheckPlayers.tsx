import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Fade, Container, Row, Col, Input, Jumbotron, Table } from 'reactstrap';
import "../styles/AlignCenter.css";
import NextStep from '../actions/NextStep';
import SetPlayers from '../actions/SetPlayers';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import Button from 'reactstrap/lib/Button';
import { FiCheckSquare, FiXSquare } from "react-icons/fi";
import { IconContext } from 'react-icons';

class CheckPlayers extends React.Component<Props, StateProps> {
    constructor(props: any) {
        super(props);
        this.state = {
            fadeIn: this.props.step == "CHECKNAMESOFPLAYERS" ? true : false,
            playersList: (this.props.playersListProp == null || this.props.playersListProp.length == 0) ? new Array<[string, number]>() : this.props.playersListProp
        };
    }

    reject = () => {
        this.props.NextStep("NAMESOFPLAYERS");
    }
    confirm = () => {
        this.props.SetPlayers(this.state.playersList);
    }

    buildTableOfImages(playersListFromProp: Array<[string, number]>): Array<any> {

        const rows = Array();
        let count = 0;
        playersListFromProp.forEach(item => {
            rows.push(
                <tr key={count + "_row"}>
                    <td >
                        {count + 1}
                    </td>
                    <td className="playerslist table td">
                        {item[0]}
                    </td>
                </tr>
            );
            count++;
        });
        return rows;
    }

    render() {
        const rows = this.buildTableOfImages(this.state.playersList);
        if (rows.length != 0) {
            return (
                <div className="container">
                    <p className="playerslist text">
                        <b>Список игроков верный?</b>
                    </p>

                    <Fade in={this.state.fadeIn} tag="h5" className="mt-3" timeout={1000}>
                        <Table className="playerslist table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Игрок</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows}
                                <tr style={{ textAlign: "right" }}>
                                    <td>
                                        <IconContext.Provider value={{ color: "red", size: "3em" }}>
                                            <FiXSquare onClick={this.reject} />
                                        </IconContext.Provider>
                                        </td>
                                        <td>
                                        <IconContext.Provider value={{ color: "green", size: "3em" }}>
                                            <FiCheckSquare onClick={this.confirm}/>
                                        </IconContext.Provider>

                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Fade>
                </div>

            );
        } else {
            return (<div>No elements...</div>);
        }
    }
}
const mapStateToProps = (state: any) => ({ step: state.step, players: state.players, playersListProp: state.playersList });

interface DispatchProps {
    NextStep: typeof NextStep,
    SetPlayers: typeof SetPlayers
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    ...bindActionCreators({ NextStep, SetPlayers }, dispatch),
});

interface Props extends StateProps, DispatchProps {
    step: string,
    playersListProp: Array<[string, number]>
}
interface StateProps {
    fadeIn: boolean,
    playersList: Array<[string, number]>
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckPlayers);