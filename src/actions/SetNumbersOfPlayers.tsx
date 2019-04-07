const SetNumbersOfPlayersAction = (playersCount:number|null)=>(
    {
        type:'playersCounter',
        playersCounter:playersCount 
    }
);

export default SetNumbersOfPlayersAction;