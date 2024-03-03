import Image from "next/image"
import style from "./style.module.css"

export default function AboutMe() {

    return (
        <section id="about-me" className={`flex relative w-full h-svh`}>
            {/** Container reservado para a minha descrição */}
            <div className={`${style.myDescripionAboutContainer} ${style.secundaryPageColor} absolute flex justify-center items-center w-[500px] -top-10 left-0 h-svh bg-slate-700 rounded-sm`}>
                {/** My description and my dream */}
                <div id="my-description" className={`${style.myDescripionAbout} ${style.terciaryPageColor} ${style.shadowCards} absolute top-48 -right-20 flex justify-center items-center flex-wrap w-[400px] h-[400px] ${style.terciaryPageColor} ${style.shadowCards} rounded-sm`}>
                    <p className={'m-8 text-justify tracking-widest'}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Corrupti quos ratione amet aliquid iste, repellat aperiam facere error nihil, nemo esse voluptates. 
                        Fugit temporibus illum possimus beatae ullam quis maxime accusantium, aperiam veritatis, ipsa unde. 
                        Quaerat autem alias at. 
                        Repellendus veritatis dolor corrupti provident ipsum a commodi labore aut ullam unde voluptatem 
                        quas repellat animi perferendis eveniet, ratione distinctio explicabo!
                
                    </p>
                </div>  
            </div>

            {/** Avatar image */}
            <div id="my-image" className={`${style.avatarAbout} absolute flex top-24 right-4 w-auto h-auto`}>
                <Image 
                    src={'avatar-1.svg'}
                    width={550}
                    height={550}
                    alt="Avatar 2"
                    className={``}
                />
            </div>
        </section>
    )
}