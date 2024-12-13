import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCodeBranch, faFlag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Badge from "./components/Badge";
import Buttom from "./components/Buttom";


export default function Home() {
  return (
    <div className="w-full m-auto">
      <section className="w-1/2 m-auto mt-36">
        <div className="text-center">
          <h1 className="text-8xl inline-block">
            Eder<span className="text-yellow-500"> Dev</span>
            <a href="#" className="inline-block ml-4"><Badge/></a>
          </h1>
        </div>

        <div className="w-4/5 m-auto text-justify mt-8 text-xl">
          Soy un apasionado de Linux, la ciberseguridad y la programación.
          Disfruto explorando el mundo del software libre, optimizando
          sistemas y aprendiendo continuamente sobre cómo proteger la
          información en la era digital.
          <br />
          <span className="text-yellow-200 inline-block m-2"> <FontAwesomeIcon icon={faCodeBranch} /> 2 Años Experiencia</span> |
          <span className="text-yellow-200 inline-block m-2"><FontAwesomeIcon icon={faFlag}/>  Perú</span>
          <div className="mt-4 text-4xl">
            <span className="m-6 text-gray-200 hover:text-gray-50">
              <a href="https://github.com/LakSSDev" target="_blank"> <FontAwesomeIcon icon={faGithub} /></a>
            </span>
            <span className=" text-gray-200 hover:text-gray-50">
              <a href="https://www.linkedin.com/in/eder-castro-fernández-76952021a" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
            </span>
          </div>
        </div>

        <Buttom/>
      </section>
    </div>
  );
}
