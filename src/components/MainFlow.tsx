import React from "react";
import Greetings from "./Greetings";
import NumbersOfPlayers from "./NumbersOfPlayers";
import SetPlayersList from "./SetPlayersList";
import NextStep from '../actions/NextStep';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import CheckPlayers from "./CheckPlayers";

class Mainflow extends React.Component<Props, StateProps>  {

    render() {
        return (
            
                <div>
                    {this.props.step=="GREETINGS" && <Greetings />}
                    {this.props.step=="NUMBEROFPLAYERS" && <NumbersOfPlayers />}
                    {this.props.step=="NAMESOFPLAYERS" && <SetPlayersList />}
                    {this.props.step=="CHECKNAMESOFPLAYERS" && <CheckPlayers />}
                </div>
        );
    };
}


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

export default connect(mapStateToProps, mapDispatchToProps)(Mainflow);