import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Fade,  Input, Table } from 'reactstrap';
import "../styles/AlignCenter.css";
import NextStep from '../actions/NextStep';
import SetPlayers from '../actions/SetPlayers';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { FiCheckSquare, FiXSquare } from "react-icons/fi";
import { IconContext } from 'react-icons';

class ScoreTable extends React.Component<Props, StateProps> {
    constructor(props: any) {
        super(props);
        this.state = {
            fadeIn: this.props.step == "GAME" ? true : false,
            playersList: (this.props.playersListProp == null || this.props.playersListProp.length == 0) ? new Array<[string, number]>() : this.props.playersListProp,
            activePlayer: 0,
            currentValue: null
        };
    }

    contentTableBuilder(playersListFromProp: Array<[string, number]>): Array<any> {

        const rows = Array();
        let count = 0;
        playersListFromProp.forEach(item => {
            rows.push(
                <tr key={count + "_row"}>
                    <td >
                        {count + 1}
                    </td>
                    <td id={count.toString()} className="playerslist table td" onClick={this.selectPlayer}>
                        {item[0]}
                    </td>
                    <td className="playerslist table td" style={{ textAlign: "right" }}>
                        {item[1]}
                    </td>
                </tr>
            );
            count++;
        });
        return rows;
    }
    changeValue = (newValue: any) => {
        let tempVal = Number.parseInt(newValue);
        if (!Number.isNaN(tempVal)) {
            this.setState({
                currentValue: tempVal
            });
        }


    };
    confirmRejectValue = (confirm: String) => {

        if (confirm == "CONFIRM") {
            let increment = this.state.currentValue;
            let tempArray = [...this.state.playersList];
            let player = this.state.activePlayer;
            if (increment!=null) {
                tempArray[player][1]=tempArray[player][1]+increment;
            }
            this.setState({
                playersList: tempArray,
                currentValue: null
            });
        } else if (confirm == "REJECT") {
            this.setState({
                currentValue: null
            });
        }
    };
    selectPlayer = (event:any) => {
        const playerNumber = Number.parseInt(event.target.id);
        if (playerNumber!=NaN) {
            this.setState({
                activePlayer: playerNumber
            });
        }
    }
    render() {
        const rows = this.contentTableBuilder(this.state.playersList);
        if (rows.length != 0) {
            return (
                <div className="container">

                    <Fade in={this.state.fadeIn} tag="h5" className="mt-3" timeout={700}>
                        <Table className="playerslist table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Игрок</th>
                                    <th style={{ textAlign: "right" }}>Счет</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows}
                            </tbody>
                        </Table>
                    </Fade>
                    <br />
                    <Fade in={this.state.fadeIn} tag="h5" className="mt-3" timeout={900}>
                        <div>
                            <table className="scorecontroller">
                                <tbody>
                                    <tr>
                                        <td colSpan={3} ><b>{this.state.playersList[this.state.activePlayer][0]}</b></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <IconContext.Provider value={{ color: "red", size: "3em" }}>
                                                <FiXSquare onClick={() => this.confirmRejectValue("REJECT")} />
                                            </IconContext.Provider>
                                        </td>
                                        <td>
                                            <Input
                                                type="number" value={this.state.currentValue!=undefined?this.state.currentValue:""}
                                                onChange={e => this.changeValue(e.target.value)}
                                            />
                                        </td>
                                        <td>
                                            <IconContext.Provider value={{ color: "green", size: "3em" }}>
                                                <FiCheckSquare onClick={() => this.confirmRejectValue("CONFIRM")} />
                                            </IconContext.Provider>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
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
    playersList: Array<[string, number]>,
    activePlayer: number,
    currentValue: number | null
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreTable);