import style from "./style.module.css"
import Image from "next/image"

export default function Footer() {

    return (
        <footer className={`flex justify-between items-center w-full h-40 `}>
            <div className={`w-96`}>

            </div>
            <div className={`relative flex w-96 h-36`}>
                <ul className={`absolute bottom-2 flex gap-4`}>
                    <li className={`hover:scale-110`}>
                        <Image 
                            src={'/linkedin.png'} 
                            width={20}
                            height={20}
                            alt="Linkedin"
                        />
                    </li>
                    <li className={`hover:scale-110`}>
                        <Image 
                            src={'/instagram.png'} 
                            width={20}
                            height={20}
                            alt="Instagran"
                        />
                    </li>
                    <li className={`hover:scale-110`}>
                        <Image 
                            src={'/gmail.png'} 
                            width={20}
                            height={20}
                            alt="Gmail"
                        />
                    </li>
                    <li className={`hover:scale-110`}>
                        <Image 
                            src={'/facebook16.png'} 
                            width={20}
                            height={20}
                            alt="Facebook"
                        />
                    </li>
                </ul>
            </div>
            <div className={`flex items-end h-36`}>
                <ul className={`pr-10`}>
                    <li className={`${style.text}`}>Home</li>
                    <li className={`${style.text}`}>About-me</li>
                    <li className={`${style.text}`}>Projects</li>
                    <li className={`${style.text}`}>Skils</li>
                </ul>
            </div>

        </footer>
    )
}