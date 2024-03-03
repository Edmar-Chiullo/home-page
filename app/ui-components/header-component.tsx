'use client'

import Image from "next/image";
import style from "./style.module.css"
import { navigationList } from "../lib-components/list";
import Link from "next/link";
import MenuToggle from "./menu-toggle";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Header() {

    const pathName = usePathname();

    return (
        <section id="home" className={`${style.header} flex flex-col w-full h-full`}>
            <header className={`flex fixed z-20 w-full h-20 p-5 justify-between items-center bg-black`}>
                <Image
                    className={`${style.logo} ml-28`} 
                    src={'DESIGNI.svg'}
                    width={150}
                    height={102}
                    alt="LiteIdTeach"
                />
                <ul className={`${style.navBar} flex h-14 mr-44 gap-9 justify-center items-center`}>
                    {
                        navigationList.map(element => {
                            return (
                                <Link key={element} href={`#${element.toLowerCase()}`} className={clsx()}>
                                    <li className={`cursor-pointer ${style.hoverText}`}>{element}</li>
                                </Link>
                            )
                        })
                    }                    
                </ul>

                <MenuToggle />
            </header>
            {/* Container Image and small description about-me */}
            <div className={`${style.headerContainer} flex relative w-full h-auto`}>
                <div className={`flex min-h-screen justify-between p-10`}>
                    {/* My image */}
                    <Image 
                        src={`my-avatar.svg`}
                        width={550}
                        height={907}
                        alt="Modelo"
                        className={`${style.avatarHeader} absolute -bottom-10`}
                    />

                    {/* Description */}
                    <div className={`${style.myPresentationContainer} flex flex-col gap-1 absolute bottom-11 right-48`}>
                        <h2 className={`text-xl ${style.secundaryTextColor}`}>Olá sou Edmar</h2>
                        <p className={`flex mb-5 w-72`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum nostrum alias recusandae, architecto est cupiditate.</p>
                        <button className={`flex justify-center w-40 p-1 rounded-sm hover:brightness-90 ${style.colorButton}`}>
                            <h1 className={`text-3xl hover:brightness-90`}>About me</h1>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}