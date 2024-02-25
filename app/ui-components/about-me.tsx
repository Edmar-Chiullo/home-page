import Image from "next/image"
import style from "./style.module.css"

export default function AboutMe() {

    return (
        <section id="about-me" className={`flex relative w-full h-svh`}>
            <div className={`absolute flex justify-center items-center -top-14 left-0 ${style.leftbox} h-svh bg-slate-700 rounded-sm`}>
                {/** My description and my dream */}
                <div id="my-description" className={`absolute -right-20 flex justify-center items-center flex-wrap ${style.myDescripition} rounded-sm`}>
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

            {/** My image */}
            <div id="my-image" className={`absolute flex right-4 w-auto h-auto`}>
                <Image 
                    src={'my-avatar-1.svg'}
                    width={550}
                    height={550}
                    alt="Modelo 2"
                />
            </div>

        </section>
    )
}