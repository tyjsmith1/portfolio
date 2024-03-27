"use client"

import { SiJavascript, SiReact, SiTypescript, SiPython, SiFlask, SiPostgresql, SiNextdotjs, SiTailwindcss} from "react-icons/si";

export default function Skills() {
    return (
        <div className="w-1/2 justify-start">
            <div className="px-6 space-y-4">
                <h1 className="text-3xl font-bold text-end border-b border-gray-200">Familiar Technologies</h1>
                <ul className="flex flex-wrap justify-end h-full">
                    <li className="py-2 flex flex-col items-center m-3 mt-5 text-2xl hover:scale-105 transition-transform duration-200"><SiJavascript className="text-yellow-300" size={60}/> JavaScript</li>
                    <li className="py-2 flex flex-col items-center m-3 mt-5 text-2xl hover:scale-105 transition-transform duration-200"><SiReact className="text-blue-300" size={60}/> React</li>
                    <li className="py-2 flex flex-col items-center m-3 mt-5 text-2xl hover:scale-105 transition-transform duration-200"><SiTypescript  className="text-blue-800" size={60}/> TypeScript</li>
                    <li className="py-2 flex flex-col items-center m-3 mt-5 text-2xl hover:scale-105 transition-transform duration-200"><SiNextdotjs  size={60}/> Next.js</li>
                    <li className="py-2 flex flex-col items-center m-3 mt-5 text-2xl hover:scale-105 transition-transform duration-200"><SiPython className="text-green-500" size={60}/> Python</li>
                    <li className="py-2 flex flex-col items-center m-3 mt-5 text-2xl hover:scale-105 transition-transform duration-200"><SiFlask  size={60}/> Flask</li>
                    <li className="py-2 flex flex-col items-center m-3 mt-5 text-2xl hover:scale-105 transition-transform duration-200"><SiPostgresql className="text-blue-700" size={60}/> PostgreSQL</li>
                    <li className="py-2 flex flex-col items-center m-3 mt-5 text-2xl hover:scale-105 transition-transform duration-200"><SiTailwindcss className="text-teal-500" size={60}/> Tailwind CSS</li>
                </ul>
            </div>
        </div>
    )
}

