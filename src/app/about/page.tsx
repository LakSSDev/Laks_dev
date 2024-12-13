
import Image from 'next/image';
import Skill from '../components/about/Skill';

const About = () => {
   return (

      <div>
         <div className="w-full m-auto sm:flex items-center max-w-screen-xl mt-8">
            <div className="sm:w-1/2 p-10">
               <div className="image object-center text-center">
                  <Image
                     src="https://i.imgur.com/WbQnbas.png"
                     alt="Descripción de la imagen"
                     width={500} // ancho de la imagen en píxeles
                     height={300} // alto de la imagen en píxeles
                  />
               </div>
            </div>
            <div className="sm:w-1/2 p-5">
               <div className="text">
                  <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">Acerca de mi</span>
                  <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">Eder <span className="text-indigo-600">Developer</span>
                  </h2>
                  <p className="text-gray-700">
                     Soy un apasionado del desarrollo web y software. Además, soy un entusiasta de Linux, disfrutando
                     de trabajar en algunas de sus infinidades de distros, que potencian mi flujo de trabajo y reflejan mi
                     interés por la tecnología.
                     <br />
                     Mis habilidades:
                  </p>
               </div>

            </div>

         </div>
         <Skill />

      </div>



   )
}


export default About;