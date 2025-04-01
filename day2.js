// const age=20;
// if(age<13){
//     console.log("you are child");
// }
// else if(age>=13 && age<=17)
// {
//     console.log("you are teenager");

// }
// else{
//     console.log("you are adult");
// }



// function
// function greet(){
//     console.log("hello, Good morning! ")
// }

// greet();

// function greet(name="nameless persion",id){
//     console.log(`hello ${name}. my roll no. is ${id}`);
// }

// greet("nabin",12);

// const myname="nabin";
// const myage="21"
// function introduction(name,age){
//     console.log(`hi my name is ${name} and i am ${age}.`);
// }
// introduction(myname,myage);

// const arrowfunction=(name)=>{
//     console.log(`--------${name}----------`)
//     console.log("hello world");}
// arrowfunction("nabin")

// const sum=(a=2,b=9)=>{
//     console.log(a+b);
// }
// sum(7,2);

const person={name:'nabin',
    age:20
};
const {name,age}=person;
console.log(age);

const animal=["dog",'khasi',"giraffe"]
const [a,b,c]=animal;


console.log(a,b,c);

const detailmore={...person,address:"itahari"}
console.log(detailmore);

const moreanimal=[...animal,"shyal"]
console.log(moreanimal);