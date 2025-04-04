import { useState } from "react"; // ✅ Import useState
// import Hero from "../section/herosection";
import ReducerHook from "./renderhook";

// const lists = [
//   { id: 1, u_name: "Aarav Sharma", age: 25 },
//   { id: 2, u_name: "Sophia Patel", age: 23 },
//   { id: 3, u_name: "Rohan Mehta", age: 27 },
//   { id: 4, u_name: "Isabella Thomas", age: 22 },
//   { id: 5, u_name: "Liam Wilson", age: 28 },
//   { id: 6, u_name: "Emma Brown", age: 24 },
// ];

export default function HomePage() {
  const [count, setCount] = useState(0); // ✅ Fixed variable naming
  function handleCount(type){
    if(type=="inc"){
      setCount(count + 1);
    }
    else{
      setCount(count - 1);
    }
  }
  return (
    <>
      <div>
        <h1>Home</h1>
      </div>

      {/* Counter with state */}
      <div style={{alignItems:"center"}}>
        <h2>Counter: {count}</h2>
        <div>
          <button onClick={() => setCount(count + 1)}>Increase</button>
          <button onClick={() => setCount(count - 1)}>Decrease</button>
        </div>
      </div>

      {/* with function */}
      <div>
        <button onClick={()=>handleCount("inc")}>inc</button>
        <button onClick={()=>handleCount("dec")}>dec</button>
      </div>

      <ReducerHook />

      {/* List of users */}
      {/* <div>
        {lists.map((list) => (
          <Card key={list.id} data={list} />
        ))}
      </div>

      <h1>Parent Component</h1>
      <div>
        <ChildComp count={count} greet={"Hello"} name="John Doe" />
      </div>

      <h1>HomePage</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit autem pariatur dolorem ducimus consectetur quis.
      </p>

      <Hero />*/ }
    </>
  );
}

// Card Component
const Card = ({ data }) => {
  return (
    <div>
      <h3>{data.u_name}</h3>
      <p>Age: {data.age}</p>
    </div>
  );
};

// Child Component
export const ChildComp = ({ count, greet = "Welcome", name = "Guest", ...rest }) => {
  return (
    <div style={{ backgroundColor: "gray", border: "1px solid", padding: "10px" }}>
      <p>Child Component</p>
      <SubChildComp count={count} />
      <p>
        {greet}, {name}
      </p>
    </div>
  );
};

// SubChild Component
const SubChildComp = ({ count }) => {
  return (
    <div>
      <h2>SubChildComp</h2>
      <p>Count: {count}</p>
    </div>
  );
};
