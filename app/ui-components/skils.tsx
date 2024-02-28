import Image from "next/image";
import style from "./style.module.css";
import { listSkils, stars, whiteStar } from "../lib-components/list";
import Link from "next/link";

/** Esta página eu irei aprensentar meus minhas skils */
export default function Skils() {

    return (
        <section id="skils" className={`flex justify-center items-center w-full h-svh`}>
            <div className={`${style.mediaContainer} ${style.secundaryPageColor} ${style.shadowCards} grid grid-cols-4 grid-rows-2 justify-items-center items-center w-3/4 h-3/4 rounded-sm`}>
                {
                    listSkils.map(skil => {
                        return (
                            <div key={skil.id} className={`${style.terciaryPageColor} ${style.shadowCards} ${style.cards } flex flex-col justify-between items-center w-[200px] h-[200px] rounded-sm hover:scale-105`}> 
                                
                                {/** Aqui estão o icone e o titulo aprensentando qual a ferramenta.  */}
                                <div className={`flex justify-start gap-4 w-full h-24 mt-5`}>
                                    <div className={`h-20 ml-2`}>
                                        <Image 
                                            src={skil.image}
                                            width={64}
                                            height={64}
                                            alt={`${skil}`}
                                            className={style.imageSkils}
                                        />
                                    </div>
                                    
                                    <div>
                                        <h1>{skil.title}</h1>
                                        <p className={`text-left text-xs ${style.sizeTextDescriptionSkils}`}>{skil.description}</p>
                                    </div>
                                    {/***/}
                                </div>

                                {/** Aqui esta o container em estão as estralas indicando o quanto eu sei sobre determinado ferramenta.  */}
                                <div className={`flex justify-end gap-1 w-36 h-6`}>
                                    {stars.map(star => {
                                            return (
                                                <div key={`${star.id}}`} className={`flex h-4 justify-between`}>
                                                    <Image 
                                                        src={star.imageStarYellow}
                                                        width={16}
                                                        height={16}
                                                        alt={`${star.description}`}
                                                    />
                                                </div>   
                                            )
                                        })
                                    }     
                                    {
                                        whiteStar.map(star => {
                                            return(
                                                <div key={star.id}>
                                                    <Image 
                                                        src={star.imageStarWhite}
                                                        width={16}
                                                        height={16}
                                                        alt={`${star.description}`}
                                                        className="h-4"
                                                    />
                                                </div>
                                            )
                                            
                                        })
                                    }        
                                </div>

                                {/** Aqui esta o botão saiba mais.*/}
                                <div className={`flex justify-center items-center h-12`}>
                                    <Link href={skil.link} target="_blank" rel="noreferrer noopener">
                                        <button className={`flex justify-center items-center w-28 p-1 rounded-sm hover:brightness-90 ${style.colorButton}`}>
                                            <p>Saiba mais...</p>
                                        </button>
                                    </Link>    
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}