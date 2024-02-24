import Image from "next/image"

export default function AboutMe() {

    return (
        <section id="about-me" className={`flex relative w-full h-svh`}>
            <div className={`absolute flex justify-center items-center -top-14 left-20 w-96 h-svh bg-slate-700`}>
                {/** My description and my dream */}
                <div id="my-description" className={`flex flex-wrap w-60 h-60`}>
                    <p>
                        <strong>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Corrupti quos ratione amet aliquid iste, repellat aperiam facere error nihil, nemo esse voluptates. 
                            Fugit temporibus illum possimus beatae ullam quis maxime accusantium, aperiam veritatis, ipsa unde. 
                            Quaerat autem alias at. 
                            Repellendus veritatis dolor corrupti provident ipsum a commodi labore aut ullam unde voluptatem 
                            quas repellat animi perferendis eveniet, ratione distinctio explicabo!
                        </strong>
                    </p>
                </div>  
            </div>

            {/** My image */}
            <div id="my-image" className={`absolute right-4 flex w-auto h-auto`}>
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