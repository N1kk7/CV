import React, { useState } from 'react'

export default function AboutMe() {

    const [activeEdu, setActiveEdu] = useState(false);
    const [activeDoc, setActiveDoc] = useState(false);
    const [activeLang, setActiveLang] = useState(false);

    
    const [style, setStyle] = useState("unset");

    // const rotateBtnTop = () => {
    //     if (!activeEdu) {
    //         setStyle("rotate(180deg)");
    //     } else {
    //         setStyle("unset");
    //     }
    // }
    // const rotateBtnBottom = () => {
    //     if (activeDoc) {
    //         setStyle("rotate(180deg)");
    //     } else {
    //         setStyle("unset");
    //     }
    // }









  return (
    <div className="AboutMe" id="aboutMe">
        <div className="container">
            <div className="tittle">
                <h1>About Me</h1>
            </div>
            <div className="wrapper">
                
                <div className="block">
                    <div className="textBlock">
                        <p>
                            Active, attentive, responsible.
                            I have 3 years of experience in development.
                            I know how to set goals and achieve them.
                            I do not rest on my laurels and always work on self-development.
                            When doing work, I look for the latest solutions, technologies 
                            for the implementation of the task above the required.
                        </p>

                    </div>
                   
                    <div className="accordeon">
                        <div className="accordeonItem">
                            <div className="arrow" 
                                                onClick={() => {setActiveEdu(!activeEdu);}}
                                                style={{transform: `${style}`}}>
                                <img src="downArr.png" alt="" />
                            </div>
                            {/* {activeEdu && <div className="arrow-up" onClick={() => {setActiveEdu(!activeEdu);}}>
                                <img src="downArr.png" alt="" />
                            </div>} */}
                            <div className="itemTittle">
                                <span>Education</span>
                            </div>
                            {activeEdu && <div className="item">
                                <div className="eduItem">
                                    <div className="eduTittle">
                                        <h3>Master degree of Transport</h3>
                                    </div>
                                    <div className="eduTime">
                                        <span>09/2012 - 07/2016</span>
                                    </div>
                                    <div className="eduLocal">
                                        <h4>Kharkiv University of Railway Transport</h4>
                                    </div>
                                </div>
                                <div className="eduItem">
                                    <div className="eduTittle">
                                        <h3>Front End Pro - Java Script, React, Vue</h3>
                                    </div>
                                    <div className="eduTime">
                                        <span>06/2022 - 10/2022</span>
                                    </div>
                                    <div className="eduLocal">
                                        <h4>IT School Hillel (Ukraine) - graduated with honor</h4>
                                    </div>
                                </div>
                                <div className="eduItem">
                                    <div className="eduTittle">
                                        <h3>SELF EDUCATION - HTML, CSS, C++, TailWind, </h3>
                                    </div>
                                </div>
                            </div>}
                            

                        </div>
                        <div className="accordeonItem">
                            <div className="arrow" 
                                onClick={() => {setActiveDoc(!activeDoc); }}
                                style={{transform: `${style}`}}>
                                <img src="downArr.png" alt="" />
                            </div>
                            <div className="itemTittle">
                                <span>Certificates</span>
                            </div>
                            {activeDoc && <div className="item">
                                <img src="certificate.png" alt="" />
                            </div>}


                        </div>
                        <div className="accordeonItem">
                            <div className="arrow" 
                                onClick={() => {setActiveLang(!activeLang); }}
                                style={{transform: `${style}`}}>
                                <img src="downArr.png" alt="" />
                            </div>
                            <div className="itemTittle">
                                <span>Languages</span>
                            </div>
                            {activeLang && <div className="item">
                                <div className="lang">
                                    <div className="langLogo">
                                        <img src="ukr.png" alt="" />
                                    </div>
                                    <div className="langName">
                                        <h3>Ukrainian - Native</h3>
                                    </div>
                                </div>
                                <div className="lang">
                                    <div className="langLogo">
                                        <img src="rus.png" alt="" />
                                    </div>
                                    <div className="langName">
                                        <h3>Russian - Native</h3>
                                    </div>
                                </div>
                                <div className="lang">
                                    <div className="langLogo">
                                        <img src="eng.png" alt="" />
                                    </div>
                                    <div className="langName">
                                        <h3>English - B1</h3>
                                    </div>
                                </div>
                                
                            </div>}


                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    </div>
  )
}
