import Image from "next/image";
import style from "./style.module.css"
import { listProjects } from "../lib-components/list";

/** Esta página eu irei aprensentar meus projetos */


export default function Projects() {

    return (
        <section id="projects" className={`flex justify-center items-center w-full h-svh`}>
            <div className={`${style.mediaContainer} ${style.secundaryPageColor} grid grid-cols-4 grid-rows-2 justify-items-center items-center w-3/4 h-4/5 rounded`}>
                {
                    listProjects.map((project) => {
                        return (
                            <div key={project.id} className={`${style.terciaryPageColor} ${style.shadowCards} ${style.cards } flex flex-col justify-between items-center w-[200px] h-[200px] rounded-md hover:scale-105`}> 
                                <h1>{project.title}</h1>
                                <Image 
                                    src={project.image}
                                    width={450}
                                    height={450}
                                    alt={`${project}`}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}