// import { useReducer } from "react";

import { CLSThresholds } from "web-vitals";

// const render = (state, action) => {
//     if (action.type === "username") {
//         return { ...state, username: action.payload };
//     } else if (action.type === "password") {
//         if (action.payload === "password") {
//             window.alert("Insecure password");
//             return state;
//         }
//         return { ...state, password: action.payload };
//     } else {
//         return state;
//     }
// };

// const initialState = {
//     username: "nabin",
//     password: "ddd",
// };

export default function Loginpage() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const username = formData.get("username");
        const password = formData.get("password");
        console.log("username", username)
        console.log("password", password)



    }

    return (
        <div style={{ width: "100%", textAlign: "center" }}>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter username"
                    />
                </div>
                <div>
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
