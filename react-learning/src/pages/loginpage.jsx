import { useReducer } from "react";

const render=(state,action)=>{
    if(action,type=="username"){
        return {...state,username:action.payload}
    }
    else{
        if(action.hello=="password"){
            window.alert("insecure password");
            return state;
        }
        else{
            return{...state ,password:action.hello}
        }
    }
};
const initialState={
    username:"nabin",
    password:"ddd",
};

export default function Loginpage(){
    const [formdata,dispatch]=useReducer(render,initialState);
    console.log("-------------------formdata",formdata);
    return(
        <div>
            <h1>login page</h1>
            <form action="">
                <div>
                    <input type="text" placeholder="username" value={formdata.username} onClick={(e)=>dispatch({type:"usernamee",payload:e.target.value})} />
                </div>
                <div>
                    <input type="password" placeholder="password" value={formdata.password} onChange={(e)=>dispatch({hello:e.target.value})} />
                </div>
                <button>login</button>
            </form>
        </div>
    )

}