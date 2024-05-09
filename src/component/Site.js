import React from 'react'
//{siteText} ->X { siteText } ->o 꼭 양옆에 한 칸씩 띄어준다.
import { siteText } from "../constants"



const Site = () => {
  return (
    <>
      <section id="site">
        <div className="site__inner">
            <h2 className="site__title">Site coding <em>나의 작업물</em></h2>
            <div className="site__wrap">
                {siteText.map((site, key) => (
                  //backtick `` 써야 변수로 쉽게 쓸 수 있다.
                  //key값에 1,2,3,4 가 들어가야 한다.
                  <article className={`site__item s${key+1}`} key={key} >
                      <span className="num">{key+1}.</span>
                      <div className="text">
                          <div>{site.text[0]}</div>
                          <div>{site.text[1]}</div>
                          <div>{site.text[2]}</div>
                      </div>
                      <h3 className="title">
                        {site.title}
                      </h3>
                      <div className="btn">
                          <a href={site.code}>code</a>
                          <a href={site.view}>view</a>
                      </div>
                      <div className="info">
                          <span>{site.info[0]}</span>
                          <span>{site.info[1]}</span>
                          <span>{site.info[2]}</span>
                      </div>
                  </article>
                ))}
            </div>
        </div>
      </section>
    </>
  )
}

export default Site