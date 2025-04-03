import Style from "./herosec.module.css"


export default function Hero(){
    let isAdmin=true;
    let canEdit=true;
    return(
        <div>
            <h1>this is hero</h1>
            <p className={Style.HeroSectionHeading}>herosection</p>
            <span className={Style.herSubHeading}>this is our super react app</span>
            {isAdmin ? "welcome admin" : "welcome user"}
            <div>
                {isAdmin ? (canEdit ? "edit" : "view") : "you are admin"}
            </div>{" "}

        </div>
    );
}



