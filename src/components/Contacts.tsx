import React from 'react'

export default function Contacts() {
  return (
    <div className="contacts">
        <div className="container">
            <div className="tittle">
                <h1>Contacts</h1>
            </div>
        </div>
        <div className="wrapper">
        <div className="footer " id="contacts">
                <div className="soc-network">
                    <a href="https://instagram.com/nickseventh?igshid=OGQ5ZDc2ODk2ZA==">
                        <div className="f-logo">
                            <img src="/instagram.png" alt="" />
                        </div>
                        <div className="link">
                            <span>INST</span>
                        </div>
                    </a>
                </div>
                <div className="soc-network">
                    <a href="https://github.com/N1kk7">
                        <div className="f-logo">
                            <img src="/git.png" alt="" />
                        </div>
                        <div className="link">
                            <span>GIT</span>
                        </div>
                    </a>
                </div>
                <div className="soc-network">
                    <a href="https://www.facebook.com/profile.php?id=100081593139747">
                        <div className="f-logo">
                            <img src="/facebook.png" alt="" />
                        </div>
                        <div className="link">
                            <span>FB</span>
                        </div>
                    </a>
                </div>
                <div className="soc-network">
                        <div className="f-logo">
                            <img src="/gmail.png" alt="" />
                        </div>
                        <div className="link">
                            <span>vvild.electronics@gmail.com</span>
                        </div>
                </div>
        </div>
        </div>
    </div>
  )
}
