import { useReducer } from "react";
const reducer=(state,action)=>{
    if(action.type ==="INCREMENT"){
        return state +1;
    }
    else{
        return state-1;
    }
};
export default function ReducerHook(){
    const[state,dispatch]=useReducer(reducer,0);
    return(
        <div style={{width:"100%",textAlign:"center"}}>
            <h1>ReducerHook</h1>
            <div>
                {state}
                <div>
                    <button onClick={()=>dispatch({type:"INCREMENT"})}>inc</button>
                    <button onClick={dispatch}>dec</button>
                </div>
            </div>
        </div>
    )
}