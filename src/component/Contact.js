import React from 'react'

const contactText = [

  {
    link:"https://open.kakao.com/o/gM7YLzwf",
    title:"KAKAO : 3MK",

  },
  {
    link:"mailto:DESIGNSHAKE@naver.com",
    title:"designshake@NAVER.COM",
  }

];

const Contact = () => {
  return (
    <div>
      <section id="contact">
            <div className="contact__inner">
                <h2 className="contact__title">Contact</h2>
                <div className="contact__lines top" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
                <div className="contact__text">
                    <div className="text">
                      {contactText.map((con, key) => (
                        <div key={key}>
                          <a href={con.link} 
                          rel="noopener noreferrer" 
                          target="_blank"
                        >{con.title}</a>
                        </div>

                      ))}
                    </div>
                </div>
                <div className="contact__lines" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Contact
