import Hero from '../section/herosection' 
export default function HOmepage(){
    let count=1;
    return(
        <>
        <h1>parent components</h1>
        <div>
        <ChildComp count={count} greet={"hello"}/>

        </div>
        <h1>HOmepage</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus velit autem pariatur dolorem ducimus consectetur quis. Officiis cupiditate necessitatibus consequatur tempore voluptas nostrum sint quae dicta deleniti quo, vel omnis?</p>
        <Hero/>
        </>
    )

}

export const ChildComp=({count,greet="welcome",...rest})=>{
    return(
        <div style={{backgroundColor:"gray",border:"1px solid"}}>
            <p>child component</p>
            <SubChildComp count={count}/>{greet}{rest.name}
        </div>
    )


};


const SubChildComp=({count})=>{
    return(
        <div>
            <h2>SubChildComp</h2>
            {count}
        </div>
    );

};