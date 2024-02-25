import Image from "next/image";
import style from "./style.module.css"

/** Esta página eu irei aprensentar meus projetos */


export default function Projects() {
    const projects = ['Pull-Time', 'C-Movies', 'C-Musics', 'Dashboard', 'Mais-Embreve', 'Mais-Embreve', 'Mais-Embreve'];

    return (
        <section id="projects" className={`flex justify-center items-center w-full h-svh`}>
            <div className={`${style.boxCards} grid grid-cols-4 grid-rows-2 justify-items-center items-center w-3/4 h-4/5 rounded`}>
                {
                    projects.map((project) => {
                        return (
                            <div key={project} className={`${style.cards} flex w-48 h-48 rounded-md hover:scale-105`}> 
                                <Image 
                                    src={'em-breve.svg'}
                                    width={400}
                                    height={400}
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