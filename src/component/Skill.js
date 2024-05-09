import React from 'react'

import { skillText } from "../constants"



const Skill = () => {
  return (
    <>
      <section id="skill">
        <div className="skill__inner">
            <h2 className="skill__title">
                challenge <em>나의 도전</em>
            </h2>
             <div className="skill__desc">
              {/*skillText 라는 반복문을 써서 map이라는것을 써서 처리해 줄거고 그 안에는 skill안에 넣어줄거고 key(인덱스)
               값을 갖고있다. */}

               {skillText.map((skill, key) => (
                  <div key={key}>
                    <span>{key+1}.</span>
                    <h3>{skill.title}</h3>
                    <p>{skill.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>
    </>
  )
}

export default Skill