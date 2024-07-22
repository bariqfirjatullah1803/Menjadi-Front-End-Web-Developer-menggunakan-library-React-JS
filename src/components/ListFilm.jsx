import {FaPlay, FaStar} from "react-icons/fa6";

export default function ListFilm({title, data, count, genres}) {
    const togglePosition = (count > 3) ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-12' : 'bottom-4 right-4 size-16'
    return (
        <>
            <h1 className={"font-bold text-xl"}>{title}</h1>
            <div className={`grid gap-8 mt-6`} style={{gridTemplateColumns: `repeat(${count}, 1fr)`}}>
                {data && data.map((item, index) => {
                    const backgroundImage = `url('https://image.tmdb.org/t/p/original${item.backdrop_path}')`;
                    return (
                        <div key={index}
                             className={`h-72 bg-cover bg-center rounded-3xl relative flex`} style={{backgroundImage}}>
                            <div className={'absolute bottom-4 left-4 text-white'}>
                                <h1 className={' text-xl font-normal'}>{item.title}</h1>
                                <p className={'text-sm font-extralight'}>Action • Horror</p>
                            </div>
                            <div
                                className={`absolute ${togglePosition} bg-white/40  rounded-full flex items-center justify-center`}>
                                <FaPlay className={`${(count > 3) ? 'text-sm' : 'text-lg'} text-white`}/>
                            </div>
                            <div className={'absolute top-5 left-5 text-white text-sm'}>
                                <div className={'flex gap-1 items-center justify-center'}>
                                    <FaStar/>
                                    <span>4.3/5</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}