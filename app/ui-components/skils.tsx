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
                            <div key={skil.id} className={`${style.terciaryPageColor} ${style.shadowCards} ${style.cards} flex flex-col justify-between items-center w-[200px] h-[200px] rounded-sm hover:scale-105`}> 
                                
                                {/** Aqui (Cards) estão o icone e o titulo aprensentando qual a ferramenta.  */}
                                <div className={`flex justify-start gap-4 w-full h-36 p-1`}>
                                    <div className={`flex flex-col gap-2 w-56 h-20 ml-2 p-1`}>
                                        <Image 
                                            src={skil.image}
                                            width={70}
                                            height={70}
                                            alt={`${skil}`}
                                            className={`${style.imageSkils} max-w-[120px] max-h-[90]`}
                                        />
                                    </div>
                                    
                                    <div className={`w-72 h-20 mb-2`}>
                                        <h1 className={`${style.title}`}>{skil.title}</h1>
                                        <p className={`text-left text-xs ${style.sizeTextDescriptionSkils}`}>{skil.description}</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
                                    </div>
                                    {/***/}
                                </div>

                                {/** Aqui esta o container em estão as estralas indicando o quanto eu sei sobre determinado ferramenta.  */}
                                <div className={`flex justify-end gap-1 w-36 h-6 -ml-28`}>
                                    {stars.map(star => {
                                            return (
                                                <div key={`${star.id}}`} className={`flex h-4 justify-between`}>
                                                    <Image 
                                                        src={star.imageStarYellow}
                                                        width={16}
                                                        height={16}
                                                        alt={`${star.description}`}
                                                        className={`${style.stars} h-4`}
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
                                                        className={`${style.stars} h-4`}
                                                    />
                                                </div>
                                            )
                                            
                                        })
                                    }        
                                </div>

                                {/** Aqui esta o botão saiba mais.*/}
                                <div className={`flex justify-center items-center h-12`}>
                                    <Link href={skil.link} target="_blank" rel="noreferrer noopener">
                                        <button className={`${style.btns} ${style.colorButton} flex justify-center items-center w-28 p-1 rounded-sm hover:brightness-90`}>
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