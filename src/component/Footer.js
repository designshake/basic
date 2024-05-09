import React from 'react'


const footerText = [
  {
    title:"에버랜드홈페이지",
    desc:"푸바오와 쌍둥바오들 이야기입니다.",
    link:"https://www.youtube.com/@Webstoryboy",
  },
  {
    title:"에버랜드홈페이지2",
    desc:"푸바오와 쌍둥바오들 이야기입니다.",
    link:"https://www.youtube.com/@Webstoryboy",
  },

  {
    title:"에버랜드홈페이지3",
    desc:"푸바오와 쌍둥바오들 이야기입니다.",
    link:"https://www.youtube.com/@Webstoryboy",
  },

  {
    title:"에버랜드홈페이지4",
    desc:"푸바오와 쌍둥바오들 이야기입니다.",
    link:"https://www.youtube.com/@Webstoryboy",
  },

  {
    title:"에버랜드홈페이지5",
    desc:"푸바오와 쌍둥바오들 이야기입니다.",
    link:"https://www.youtube.com/@Webstoryboy",
  },

  {
    title:"에버랜드홈페이지6",
    desc:"푸바오와 쌍둥바오들 이야기입니다.",
    link:"https://www.youtube.com/@Webstoryboy",
  },

  {
    title:"에버랜드홈페이지7",
    desc:"푸바오와 쌍둥바오들 이야기입니다.",
    link:"https://www.youtube.com/@Webstoryboy",
  },

  {
    title:"에버랜드8",
    desc:"푸바오와 쌍둥바오들 이야기입니다.",
    link:"https://www.youtube.com/@Webstoryboy",
  },

];

const Footer = () => {
  return (
    <div>
      <footer id="footer" role="contentinfo">
        <div className="footer__inner">
            <h2 className="footer__text">
                <div>webstoryboy</div>
                <div>@webs</div>
            </h2>
            <div className="footer__info">
                <div className="left">
                    <div className="title">
                        <a href="#">sign up</a>
                    </div>
                    <p className="desc">회원가입을 하시면 댓글과 게시판 기능을 이용할 수 있습니다.</p>
                </div>
                <div className="right">
                    <h3>social</h3>
                    <ul>
                        {footerText.map((footer, key) => (
                          <li key={key}>
                              <a href={footer.link}>{footer.title}</a>
                              <em>{footer.desc}</em>
                          </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="footer__right">
                &copy; 2023 webstoryboy<br />
                이 사이트는 REACT를 이용하여 제작하였습니다.
            </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer