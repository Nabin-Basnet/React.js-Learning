import Hero, { HoloCheckbox } from '../section/herosection';

const lists = [
  { id: 1, u_name: "Aarav Sharma", age: 25 },
  { id: 2, u_name: "Sophia Patel", age: 23 },
  { id: 3, u_name: "Rohan Mehta", age: 27 },
  { id: 4, u_name: "Isabella Thomas", age: 22 },
  { id: 5, u_name: "Liam Wilson", age: 28 },
  { id: 6, u_name: "Emma Brown", age: 24 },
];

export default function HomePage() {
  let count = 1;

  return (
    <>
      <div>
        <h1>home</h1>
        <div>
          <input />
        </div>
      </div>

      <div>
        {lists.map((list) => (
          <Card key={list.id} data={list} />
        ))}
      </div>

      <h1>parent components</h1>
      <div>
        <ChildComp count={count} greet={"hello"} />
      </div>

      <h1>HomePage</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus velit autem pariatur dolorem ducimus consectetur quis. Officiis cupiditate necessitatibus consequatur tempore voluptas nostrum sint quae dicta deleniti quo, vel omnis?</p>

      <Hero />
      <HoloCheckbox />
    </>
  );
}

const Card = ({ data }) => {
  return (
    <div>
      <h3>{data.u_name}</h3>
      <p>Age: {data.age}</p>
    </div>
  );
};

export const ChildComp = ({ count, greet = "welcome", ...rest }) => {
  return (
    <div style={{ backgroundColor: "gray", border: "1px solid" }}>
      <p>child component</p>
      <SubChildComp count={count} />
      {greet} {rest.name}
    </div>
  );
};

const SubChildComp = ({ count }) => {
  return (
    <div>
      <h2>SubChildComp</h2>
      {count}
    </div>
  );
};
