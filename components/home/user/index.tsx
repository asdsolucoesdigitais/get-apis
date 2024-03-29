import useGetGitUserInfo from "../../../hooks/use-github/useGetGitUserInfo";
import StyleUser from "./User.module.css";
import { FaWhatsappSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import Link from "next/link";

export default function UserInfo() {
  const user = useGetGitUserInfo();

  const colors = ["#00c86f", "#6bd1ff", "#9cd33b", "#dc6ebe", "#ffba05"];

  function changeColor(params: string[]) {
    const color = colors[Math.floor(Math.random() * colors.length)];

    const fontColor = {
      color: `${color}`,
    };

    return fontColor;
  }

  return (
    <div className={StyleUser.user}>
      <div className={StyleUser.picture}>
        <img className={StyleUser.img} src={user.data?.avatar_url} />
        <h1 className={StyleUser.h1}>{user.data?.name}</h1>
        <h2 className={StyleUser.h2}>Desenvolvedor full stack</h2>
        <div className={StyleUser.info}>
          <Link
            target={"_blank"}
            href={
              "https://api.whatsapp.com/send?phone=5579991145680&text=Ol%C3%A1!%20Cheguei%20aqui%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio!"
            }
          >
            <FaWhatsappSquare
              className={StyleUser.icon}
              style={changeColor(colors)}
            />
          </Link>
          <Link
            target={"_blank"}
            href={"https://www.linkedin.com/in/guideoliveiraamorim/"}
          >
            <FaLinkedin
              className={StyleUser.icon}
              style={changeColor(colors)}
            />
          </Link>
          <Link
            target={"_blank"}
            href={"https://github.com/GuilhermeDeOliveiraAmorim"}
          >
            <FaGithubSquare
              className={StyleUser.icon}
              style={changeColor(colors)}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
