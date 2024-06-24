import { techStack } from "../../constants/techStack";

export function About(){
  return(
    <main id="about" className="dark:bg-black bg-white max-w-7xl mx-auto sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12 space-y-8">
      <h1 className="dark:text-white text-black font-bold text-4xl text-center">Sobre mim</h1>
      <p className="dark:text-white text-xl mt-4 ">Olá! Sou Rian Boas, um apaixonado desenvolvedor full stack com experiência em React, Java e Node.js. Ao longo dos anos, mergulhei em diversos projetos desafiadores, trabalhando desde a concepção até a implementação de soluções robustas e inovadoras. Meu objetivo é criar experiências digitais excepcionais e funcionais, alinhadas com as necessidades e expectativas dos usuários.</p>

      <h1 className="dark:text-white text-black font-bold text-4xl text-center">Techs</h1>
      <p className="dark:text-white text-xl mt-4 ">
        Tecnologias com quais trabalho
      </p>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6 place-items-center mt-8 w-full">
        {techStack.map(el => {
          return (
            <img className="w-32 h-32" src={el.link} alt="" />
          )
        })}
      </div>
    </main>
  )
}