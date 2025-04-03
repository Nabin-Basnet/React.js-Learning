import Style from "./herosec.module.css"

export default function Hero(){
    return(
        <div>
            <h1>this is hero</h1>
            <p className={Style.HeroSectionHeading}>herosection</p>
            <span className={Style.herSubHeading}>this is our super react app</span>

        </div>
    );
}

