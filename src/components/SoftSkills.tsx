import React from 'react'

export default function SoftSkills() {
  return (
    <div className="SoftSkills" id='softSkills'>
        <div className="container">
            <div className="tittle">
                <h1>Soft-Skills & Hobby</h1>
            </div>
        </div>
        <div className="wrapper">
            <div className="block">
                <div className="softSkillsWrapper" >
                    <div className="softSk">
                        <div className="blockTittle">
                            <h2>Soft Skills</h2>
                        </div>
                        <div className="blockImg">
                            <img src="build/softSkills.png" alt="" />
                        </div>
                        <div className="blockTree">
                            <div className="comunication">
                                <span>Comunication</span>
                            </div>
                            <div className="teamwork">
                                <div className="team">
                                    <span className='tWork'>Teamwork</span>
                                </div>
                                <div className="team">
                                    <span>Problem <br/> solving</span>
                                </div>
                            </div>
                            <div className="leadership">
                                <div className="leader">
                                    <span>Leadership</span>
                                </div>
                                <div className="leader">
                                    <span>Interpersonal</span>
                                </div>
                            </div>
                        </div>
                        

                    </div>
                    <div className="hobbies">
                        <div className="blockTittle">
                            <h2>Hobbies</h2>
                        </div>
                        <div className="hobbies-wrapper">
                            <div className="hobbieCard">
                                <img src="build/graduate.png" alt="" />
                            </div>
                            <div className="hobbieCard">
                                <img src="build/hiking.png" alt="" />
                            </div>
                            <div className="hobbieCard">
                                <img src="build/languages.png" alt="" />
                            </div>
                            <div className="hobbieCard">
                                <img src="build/electric-guitar.png" alt="" />
                            </div>
                            <div className="hobbieCard">
                                <img src="build/motorcycle.png" alt="" />
                            </div>
                            <div className="hobbieCard">
                                <img src="build/steering-wheel.png" alt="" />
                            </div>
                            <div className="hobbieCard">
                                <img src="build/bicycle.png" alt="" />
                            </div>
                            <div className="hobbieCard">
                                <img src="build/listening.png" alt="" />
                            </div>
                            <div className="hobbieCard">
                                <img src="build/treadmill.png" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
