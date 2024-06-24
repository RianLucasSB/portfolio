import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
export function Card(){
  return (
    <div className="flex flex-col max-w-3xl h-96 p-6">
      <div className="h-[40%] w-full bg-purple-800">

      </div>

      <div className="flex flex-1 flex-col h-[60%] w-full bg-white">
        <div className="flex justify-between">
          <h3 className="text-white text-2xl">Project name</h3>
          <div className="flex gap-4">
            <a href=""><FaExternalLinkAlt /></a>
            <a href=""><FaGithub /></a>
          </div>
        </div>
      </div>
    </div>
  )
}