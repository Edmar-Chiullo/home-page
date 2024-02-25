import Image from "next/image";
import style from "./style.module.css"

export default function Header() {

    return (
        <section id="home" className={`flex flex-col w-full h-full`}>
            <header className={`flex fixed z-20 w-full h-20 p-5 justify-between items-center ${style.header}`}>
                <Image
                    className={`ml-28`} 
                    src={'Liteidtech.svg'}
                    width={120}
                    height={72}
                    alt="LiteIdTeach"
                />
                <ul className={`flex h-14 mr-44 gap-9 justify-center items-center text-white`}>
                    <li className={`cursor-pointer ${style.text}`}>Home</li>
                    <li className={`cursor-pointer ${style.text}`}>About-me</li>
                    <li className={`cursor-pointer ${style.text}`}>Projects</li>
                    <li className={`cursor-pointer ${style.text}`}>Skils</li>
                </ul>
            </header>

            {/* Container Image and small description about-me */}
            <div className={`flex relative w-full h-auto`}>
                <div className={`flex min-h-screen justify-between p-10`}>
                    {/* My image */}
                    <Image 
                        src={'my-avatar.svg'}
                        width={550}
                        height={907}
                        alt="Modelo"
                        className="absolute -bottom-10"
                    />

                    {/* Description */}
                    <div className={`flex flex-col gap-1 absolute bottom-11 right-48 text-white`}>
                        <h2 className={`text-xl ${style.textOla}`}>Olá sou Edmar</h2>
                        <p className={`flex flex-wrap mb-5 w-72`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum nostrum alias recusandae, architecto est cupiditate.</p>
                        <button className={`flex justify-center w-40 p-1 rounded-lg ${style.btnHeader}`}>
                            <h1 className={`text-3xl`}>About me</h1>
                        </button>
                    </div>
                </div>
            </div>

        </section>
        
    );
}