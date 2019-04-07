import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Fade, Container, Row, Col, Input, Jumbotron, Table } from 'reactstrap';
import "../styles/AlignCenter.css";
import NextStep from '../actions/NextStep';
import SetPlayers from '../actions/SetPlayers';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

class SetPlayersLIst extends React.Component<Props, StateProps> {
    constructor(props: any) {
        super(props);
        this.state = {
            fadeIn: this.props.step == "NAMESOFPLAYERS" ? true : false,
            countOfPlayers: this.props.players
        };
    }
    handleClick(type: String) {
        switch (type) {
            case "Confitm":
                //todo null-check
                break;
            case "Confirm":
                //todo confirm
                break;
            default:
                break;
        }
    }

    buildTableOfImages(numberOfPlayers:number): Array<any> {
        
        const rows = Array();
        let count=0;
        while (count < numberOfPlayers) {
            rows.push(
                <tr key={count}>
                    <td>
                        {count+1}
                    </td>
                    <td>
                        <Input id={`player_${count}`}/>
                    </td>
                </tr>
            );
            count++;
        }
        return rows;
    }

    render() {
        const rows=this.buildTableOfImages(this.state.countOfPlayers);
        if (rows.length!=0) {
            return (
                <div className="container">
                    <Fade in={this.state.fadeIn} tag="h5" className="mt-3" timeout={1000}>
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Игрок</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows}
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
const mapStateToProps = (state: any) => ({ step: state.step, players:state.players });

interface DispatchProps {
    NextStep: typeof NextStep,
    SetPlayers: typeof SetPlayers
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    ...bindActionCreators({ NextStep, SetPlayers }, dispatch),
});

interface Props extends StateProps, DispatchProps {
    step: string,
    players:number
}
interface StateProps {
    fadeIn: boolean,
    countOfPlayers: number
}

export default connect(mapStateToProps, mapDispatchToProps)(SetPlayersLIst);