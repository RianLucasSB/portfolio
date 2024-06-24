import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

interface Props {
  theme: string
}



export function Hero({ theme }: Props) {

  const social = [
    { icon: <FaGithub color={theme === 'dark' ? 'white' : 'black'} className="h-12 w-12 hover:scale-150 transition-all duration-500" />, url: "https://github.com/RianLucasSB" },
    { icon: <FaLinkedinIn color={theme === 'dark' ? 'white' : 'black'} className="h-12 w-12 hover:scale-150 transition-all duration-500" />, url: "https://www.linkedin.com/in/rianboas/" },
    { icon: <FaInstagram color={theme === 'dark' ? 'white' : 'black'} className="h-12 w-12 hover:scale-150 transition-all duration-500" />, url: "https://www.instagram.com/rianlucas_sb/" },
  ]

  return (
    <main className="min-h-screen pt-16">
      <div className="container mx-auto h-screen">
        <div className="h-full flex flex-col lg:flex-row justify-center items-center">
          <div className="flex flex-col  p-4 justify-center items-center lg:justify-start lg:items-start space-y-6">
            <div
              className="font-extrabold text-3xl md:text-4xl [text-wrap:balance] 
              bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50%
             to-slate-200">
              Rian Boas,
              <span className="text-indigo-500 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
                <ul className="block animate-text-slide text-left leading-tight [&_li]:block">
                  <li>Java</li>
                  <li>NodeJS</li>
                  <li>React</li>
                  <li aria-hidden="true">Java</li>
                </ul>
              </span>
            </div>
            <p className="dark:text-white max-w-[520px] text-xl mt-4">
              📗 20 anos, estudante de Ciência da Computação no 7 semestre<br />
              💻 Atualmente trabalho como desenvolvedor full-stack utilizando Node/React<br />
            </p>

            <ul className="flex gap-6">
              {social.map(social => {
                return (
                  <li>
                    <a href={social.url}>
                      {social.icon}
                    </a>
                  </li>
                )
              })}
            </ul>

            <button className="py-4 px-6 mt-6 rounded-lg bg-purple-900 flex items-center justify-center text-white text-xl hover:cursor-pointer hover:bg-purple-700 transition-all">
              Currículo
            </button>
          </div>

          <img src="https://github.com/RianLucasSB.png" className="hidden lg:block animate-image border-4 border-purple-900 max-w-sm" />
        </div>

      </div>
    </main>
  )
}