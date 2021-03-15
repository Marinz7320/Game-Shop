import React, {Component} from 'react'
import {DataContext} from '../Context'
import Marin from '../img/marin.jpg'
import Hrvoje from '../img/hrvoje.jpg'
import '../css/About.css' 
import { MainTitle } from '../MainTitle'

class About extends Component {
    static contextType = DataContext;

    render(){
        const {theme} = this.context;

        return (
            <div>
            <MainTitle title="About us" provider={theme}/>
            <div className={theme ? "theme-about" : "about"}>
                <div className={theme ? "theme-marin" : "marin"}>
                    <img src={Marin} alt ="" width="200px"/>
                    <p>Zovem se Marin Zovko, imam 20 godina. Student sam treće godine računarstva na Fakultetu Strojarstva Računarstva i Elektrotehnike. Poznajem Hrvoja već 6 godina, dobri smo prijatelji od gimnazijalskih dana. Do sada sam stekao iskustva u programiranju u programskim jezicima kao što HTML, C, C++, Java i Javascript. Nadam da se da će mi stečeno znanje u programiranju pomoći u savladavanju ovog izazovnog projekta.</p>
                </div>
                <div className={theme ? "theme-hrvoje" : "hrvoje"}>
                    <img src={Hrvoje} alt ="" width="200px"/>
                    <p>Zovem se Hrvoje Zovko i imam 20 godina. Student sam treće godine računarstva na Fakultetu Strojarstva Računarstva i Elektrotehnike. Kolegu Marina poznajem od srednje škole. Do sada sam se susretao sa programiranjem u jezicima HTML, C, C++, Java i Javascript, te CSS-om. Nadam se da će mi ovaj projekt biti dobar izazov te da ću uspjeti proširiti svoje znanje iz programiranja i naučiti dosta toga.</p>
                </div>
                <p>Pritiskom na ovaj gumb možete pristupiti viziji <a href="https://drive.google.com/file/d/15PzcDO7w_3NeGoUbya-uqqD873WFw4m6/view" target="_blank"> Vizija</a></p>
            </div>
            </div>
        )
    }
}

export default About