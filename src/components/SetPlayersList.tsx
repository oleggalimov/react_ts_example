import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Fade, Container, Row, Col, Input, Jumbotron, Table } from 'reactstrap';
import "../styles/AlignCenter.css";
import NextStep from '../actions/NextStep';
import SetPlayers from '../actions/SetPlayers';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import Button from 'reactstrap/lib/Button';

class SetPlayersList extends React.Component<Props, StateProps> {
    constructor(props: any) {
        super(props);
        this.state = {
            fadeIn: this.props.step == "NAMESOFPLAYERS" ? true : false,
            countOfPlayers: this.props.players,
            playersList:(this.props.playersListProp==null || this.props.playersListProp.length==0 )? new Array<[string,number]>():this.props.playersListProp
        };
    }
    confirm = () => {
        this.props.SetPlayers(this.state.playersList);
        console.log(this.state.playersList);
        this.props.NextStep("CHECKNAMESOFPLAYERS");
    }
    handleChange = (e: any) => {

        const player_id = e.target.id;
        if (player_id != null && player_id != undefined && player_id.length != 0) {
            const player_name = (e.target.value as string).trim();
            if (player_name.length != 0) {
                const tempArray = [...this.state.playersList];
                tempArray[player_id] = [player_name,0];
                this.setState({
                    playersList: tempArray
                });
            }
        }
    }

    buildTableOfImages(numberOfPlayers: number|null, playersListFromProp:Array<[string,number]>|null): Array<any> {

        const rows = Array();
        let count = 0;
        if (numberOfPlayers!=null) {
            while (count < numberOfPlayers) {
                rows.push(
                    <tr key={count + "_row"}>
                        <td>
                            {count + 1}
                        </td>
                        <td>
                            <Input id={count.toString()} />
                        </td>
                    </tr>
                );
                count++;
            }
            
        } else if (playersListFromProp!=null) {
            playersListFromProp.forEach(item=>{
                rows.push(
                    <tr key={count + "_row"}>
                        <td>
                            {count + 1}
                        </td>
                        <td>
                            <Input id={count.toString()} defaultValue={item[0]} />
                        </td>
                    </tr>
                );
                count++;
            });
        }
        return rows;
    }

    render() {
        let rows:Array<any>;
        if (this.props.playersListProp!=null) {
            rows = this.buildTableOfImages(null, this.props.playersListProp);
        } else {
            rows = this.buildTableOfImages(this.state.countOfPlayers, null);
        }
        if (rows.length != 0) {
            return (
                <div className="container">
                    <p className="playerslist text">
                        <b>Введи имена игроков и нажми "Ok"</b>
                    </p>

                    <Fade in={this.state.fadeIn} tag="h5" className="mt-3" timeout={1000}>
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Игрок</th>
                                </tr>
                            </thead>
                            <tbody onChange={this.handleChange}>
                                {rows}
                                <tr style={{ textAlign: "right" }}>
                                    <td colSpan={2}>
                                        {this.state.playersList.length == this.state.countOfPlayers && <Button color="success" onClick={this.confirm} >Ok</Button>}
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
const mapStateToProps = (state: any) => ({ step: state.step, players: state.players,playersListProp:state.playersList  });

interface DispatchProps {
    NextStep: typeof NextStep,
    SetPlayers: typeof SetPlayers
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    ...bindActionCreators({ NextStep, SetPlayers }, dispatch),
});

interface Props extends StateProps, DispatchProps {
    step: string,
    players: number,
    playersListProp:Array<[string,number]>
}
interface StateProps {
    fadeIn: boolean,
    countOfPlayers: number,
    playersList: Array<[string,number]>
}

export default connect(mapStateToProps, mapDispatchToProps)(SetPlayersList);