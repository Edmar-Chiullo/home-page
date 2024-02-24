

export default function Footer() {

    return (
        <footer className={`flex justify-between items-center w-full h-40 `}>
            <div className={`w-48`}>

            </div>
            <div className={`relative flex w-96 h-36`}>
                <ul className={`absolute bottom-2 flex gap-4`}>
                    <li className={``}>Facebook</li>
                    <li className={``}>Likeding</li>
                    <li className={``}>Instagran</li>
                    <li className={``}>E-mail</li>
                </ul>
            </div>
            <div className={`flex items-end h-36`}>
                <ul className={`pr-10`}>
                    <li className={``}>Home</li>
                    <li className={``}>About-me</li>
                    <li className={``}>Projects</li>
                    <li className={``}>Skils</li>
                </ul>
            </div>

        </footer>
    )
}