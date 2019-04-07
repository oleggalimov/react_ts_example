const SetPlayersAction = (playersProps:Map<string, number>|null)=>(
    {
        type:'players',
        players:playersProps 
    }
);

export default SetPlayersAction;