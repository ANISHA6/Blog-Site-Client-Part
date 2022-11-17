import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLg">Blog-Site</span>
      </div>

      <img
        className="headerImg"
        src="https://media-exp1.licdn.com/dms/image/C4D0BAQHaeAmIOuH7nA/company-logo_200_200/0/1653566022627?e=1676505600&v=beta&t=-6yB4UkYZGLQrJf10IJjt4_tmohjyCgyFW86un1lCeg"
        alt="blog-logo"
      />
    </div>
  );
}
