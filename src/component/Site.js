import React from 'react'

const siteText = [
  {
      text: ["make", "site compliant with", "webstandard"],
      title: "푸바오 에버랜드",
      code: "https://github.com/designshake/practice-basic",
      view: "https://port2023-vite.netlify.app",
      info: [
          "site coding",
          "production period : two days",
          "use stack : HTML5/CSS3, CSS Variable, Vite",
      ],
  },
  {
      text: ["make", "site compliant with", "react.js"],
      title: "아이바오 에버랜드",
      code: "https://github.com/designshake/practice-basic",
      view: "https://port2023-react.netlify.app",
      info: [
          "site coding",
          "production period : two days",
          "use stack : HTML5/CSS3, CSS Variable, Vite",
      ],
  },
  {
      text: ["make", "site compliant with", "vue.js"],
      title: "러바오 에버랜드",
      code: "https://github.com/designshake/practice-basic",
      view: "https://port2023-vue.netlify.app",
      info: [
          "site coding",
          "production period : two days",
          "use stack : HTML5/CSS3, Scss Variable, vue",
      ],
  },
  {
      text: ["make", "site compliant with", "next.js"],
      title: "쌍둥바오 에버랜드",
      code: "https://github.com/webstoryboy/port2023-next",
      view: "https://port2023-next.netlify.app",
      info: [
          "site coding",
          "production period : two days",
          "use stack : HTML5/CSS3, Scss Variable, next.js",
      ],
  },
];


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