const SetPlayersAction = (playersProps:Array<[string,number]>|null)=>(
    {
        type:'players',
        players:playersProps 
    }
);

export default SetPlayersAction;