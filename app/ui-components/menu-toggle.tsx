import style from "./style.module.css" 

export default function MenuToggle() {

    return (
        <div className={`${style.menuToggle} z-40`}>
            <div className={`w-6 h-1 mb-1 bg-white`}></div>
            <div className={`w-6 h-1 mb-1 bg-white`}></div>
            <div className={`w-6 h-1 mb-1 bg-white`}></div>
        </div>
    )
}