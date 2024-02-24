import Image from "next/image";

export default function Header() {

    return (
        <section id="home" className={`flex flex-col w-full h-full`}>
            <header className={`flex fixed z-20 gap-1 w-full h-20 p-5 justify-between items-center bg-white`}>
                <Image 
                    src={'vercel.svg'}
                    width={64}
                    height={64}
                    alt="LiteIdTeach"
                />
                <ul className={`flex h-14 mr-7 gap-3 justify-center items-start text-black`}>
                    <li>Home</li>
                    <li>About-me</li>
                    <li>Projects</li>
                    <li>Skils</li>
                </ul>
            </header>

            {/* Container Image and small description about-me */}
            <div className={`flex relative w-full h-auto`}>
                <div className={`flex min-h-screen justify-between p-10`}>
                    {/* My image */}
                    <Image 
                        src={'/modelo-png.png'}
                        width={580}
                        height={720}
                        alt="Modelo"
                    />

                    {/* Description */}
                    <div className={`flex flex-col absolute bottom-11 right-44 text-white`}>
                        <p className={`flex flex-wrap mt-5 mb-5 w-72`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum nostrum alias recusandae, architecto est cupiditate.</p>
                        <h3 className={`text-2xl`}>Edmar</h3>
                        <div className={`flex justify-center w-40 p-1 rounded-lg bg-red-700`}>
                            <h1 className={`text-4xl`}>Chiullo</h1>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        
    );
}