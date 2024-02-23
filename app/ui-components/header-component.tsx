import Image from "next/image";

export default function Header() {

    return (
        <header className={`flex gap-1`}>
            <Image 
                src={'vercel.svg'}
                width={64}
                height={64}
                alt="LiteIdTeach"
            />
            <h1>Edmar Chiullo</h1>
        </header>
    );
}