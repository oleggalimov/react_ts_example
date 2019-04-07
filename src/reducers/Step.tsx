export const step_reducer=(state: string|null=null,action: any)=>{
    switch (action.type) {
        case "step":return action.step;
        default: return state;
    }
}