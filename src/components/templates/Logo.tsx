export default function Logo() {
    return (
        <div className={`
            flex items-center justify-center
            h-12 w-12 rounded-full
            bg-white
        `}>
            <div className={`
            h-3 w-3 rounded-full bg-red-600 mb-0.25
            `}></div>
            <div className="flex mt-0.25" >
                <div className={`
                    h-3 w-3 rounded-full bg-yellow-500 mr-0.25
                `}></div>
                <div className={`
                    h-3 w-3 rounded-full bg-green-600 ml-0.25
                `}></div>
            </div>

        </div>
    )
}

//contextAPI - comunicação entre os componentes - atalho para criar impactos entre componentes