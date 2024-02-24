import Image from "next/image";

/** Esta página eu irei aprensentar meus minhas skils */


export default function Skils() {
    const projects = ['Pull-Time', 'C-Movies', 'C-Musics', 'Dashboard', 'Mais-Embreve', 'Mais-Embreve', 'Mais-Embreve'];

    return (
        <section id="projects" className={`flex justify-center items-center w-full h-svh`}>
            <div className={`grid grid-cols-4 grid-rows-3 gap-y-60 justify-items-center w-3/4 h-3/4 shadow-md shadow-white`}>
                {
                    projects.map((project) => {
                        return (
                            <div key='project' className={`flex justify-center items-end w-48 h-48 bg-slate-300 rounded-md`}> 
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