const NextStepAction = (step:string|null)=>(
    {
        type:'step',
        step:step 
    }
);

export default NextStepAction;