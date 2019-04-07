export const numberofplayers_reducer=(state: string|null=null,action: any)=>{
    switch (action.type) {
        case "playersCounter":return action.playersCounter;
        default: return state;
    }
}