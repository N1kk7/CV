/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'

export default function header() {

const [burger, setBurger] = useState<string>('');
const [burgerState, setBurgerState] = useState<boolean>(false);


const activeBurger = () => {
    if(!burgerState){
        setBurgerState(true);
        setBurger('open');
        document.body.style.overflow = "hidden";
    } else {
        setBurgerState(false);
        setBurger('');
        document.body.style.overflow = "unset";

    }

}





  return (
    <>
        <div className="header">
            <div className="container">
                <div className="header-content">
                    <div className="logo">
                        <img src="/logo.png" alt="" />
                    </div>
                    <div className="header-list">
                        <ul>
                            <a href='#aboutMe'><li >About me</li></a>
                            <a href='#skills'><li >Skills</li></a>
                            <a href='#softSkills'><li >Soft-Skills</li></a>
                            <a href="#contacts"><li >Contacts</li></a>
                        </ul>
                    </div>
                    <div className="header-list-mobile">
                        <div id="burger" className={`${burger}`} onClick={() => activeBurger()}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    

                        
                    </div>
                </div>
            </div> 
        </div>
        {burgerState && <div className="cover">
            <div className="header-mobile-list">
                        <ul>
                            <a href='#aboutMe' onClick={() => activeBurger()}><li >About me</li></a>
                            <a href='#skills' onClick={() => activeBurger()}><li >Skills</li></a>
                            <a href='#softSkills' onClick={() => activeBurger()}><li >Soft-Skills</li></a>
                            <a href="#contacts" onClick={() => activeBurger()}><li >Contacts</li></a>
                        </ul>
                    </div>
                            
        </div>}
    </>
  )
}

