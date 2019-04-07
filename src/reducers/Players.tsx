export const players_reducer=(state: Map<string, number>|null=null,action: any)=>{
    switch (action.type) {
        case "players":return action.players;
        default: return state;
    }
}