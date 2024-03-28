"use client"

import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Socials() {
    return (
        <div>
            <ul className="flex flex-row">
                <li className="px-2 hover:scale-110 transition-transform duration-200">
                    <a href="https://github.com/tyjsmith1" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={30}/>
                    </a>
                </li>
                <li className="px-2 hover:scale-110 transition-transform duration-200">
                    <a href="https://www.linkedin.com/in/tyler-smith-pm-se/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className="px-2 hover:scale-110 transition-transform duration-200">
                    <a href="https://leetcode.com/tyjsmith1/" target="_blank" rel="noopener noreferrer">
                        <SiLeetcode size={30}/>
                    </a>
                </li>
                <li className="px-2 hover:scale-110 transition-transform duration-200">
                    <a href="https://www.youtube.com/@tylersmith644" target="_black" rel="noopener noreferrer">
                        <FaYoutube size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    )
}