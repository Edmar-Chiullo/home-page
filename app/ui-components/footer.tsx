import style from "./style.module.css"
import Image from "next/image"
import { navigationList, listIcons } from "../lib-components/list"
import Link from "next/link" 
import clsx from "clsx"

export default function Footer() {

    return (
        <footer className={`${style.footer} flex justify-between items-end w-full h-[490px] p-3`}>
            <div className={`div w-72`}>

            </div>
            <div className={`relative flex w-96 h-36`}>
                <ul className={`${style.iconList} absolute bottom-2 flex gap-4`}>
                   {
                        listIcons.map(icon => {
                            return (
                                <Link key={icon.id} href={``}>
                                    <li className={`hover:scale-110`}>
                                        <Image 
                                            src={icon.image} 
                                            width={20}
                                            height={20}
                                            alt={icon.description}
                                        />                
                                    </li>
                                </Link>   
                            )
                        })
                    }
                </ul>
            </div>
            <div className={`flex items-end h-36`}>
                <ul className={`${style.navFooter} pr-10`}>
                    {
                        navigationList.map(element => {
                            return (
                                <Link key={element} href={`#${element.toLowerCase()}`} className={clsx()}>
                                    <li key={element} className={`${style.hoverText} cursor-pointer text-sm`}>{element}</li>
                                </Link>   
                            )
                        })
                    }
                </ul>
            </div>
        </footer>
    )
}