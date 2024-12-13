
 
import { faHome, faProjectDiagram, faUser  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Roboto_Condensed } from 'next/font/google';
import Link from 'next/link';

const roboto = Roboto_Condensed({
  subsets: ['latin'], // Subconjuntos como 'latin', 'latin-ext', etc.
  weight: ['400', '700'], // Pesos que necesitas (400 = normal, 700 = bold)
});



export const Header = () => {
    return(
        <header className={`w-full text-white mt-14 ${roboto.className}`}>
				<div className="w-1/2 m-auto flex justify-around text-[16px]"> 
					<Link href="/"><FontAwesomeIcon icon={faHome} className='mr-2'/>Inicio</Link>
					<Link href="/courses"><FontAwesomeIcon icon={faProjectDiagram} className='mr-2'/>Cursos</Link>
					<Link href="/about"><FontAwesomeIcon icon={faUser} className='mr-2'/>Sobre mí</Link>
				</div>
		</header>
    )
}