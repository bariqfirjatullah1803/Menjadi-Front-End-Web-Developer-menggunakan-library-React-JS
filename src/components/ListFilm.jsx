import { FaPlay, FaStar } from "react-icons/fa6";

export default function ListFilm({ title, data, count }) {
  const togglePosition =
    count > 3 ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-12" : "bottom-4 right-4 size-16";
  return (
    <>
      <h1 className={"font-bold text-xl"}>{title}</h1>
      <div className={`grid gap-8 mt-6`} style={{ gridTemplateColumns: `repeat(${count}, 1fr)` }}>
        {data?.data &&
          data.data.map((item, index) => {
            const backgroundImage = `url('https://image.tmdb.org/t/p/original${item.backdrop_path}')`;

            const genres = item.genre_ids
              .map((item) => {
                return data.genres.filter((genre) => genre.id === item)[0]?.name;
              })
              .slice(0, 2);

            return (
              <div
                key={index}
                className={`h-72 bg-cover bg-center rounded-3xl relative flex overflow-hidden`}
                style={{ backgroundImage }}
              >
                <div className="absolute bg-gradient-to-t from-black/70 from-20% inset-0"></div>
                <div className={"absolute bottom-4 left-4 text-white"}>
                  <h1 className={" text-xl font-normal"}>{item.title}</h1>
                  <p className={"text-sm font-extralight"}>{genres.join(" • ")}</p>
                </div>
                <div
                  className={`absolute ${togglePosition} bg-white/40 rounded-full flex items-center justify-center`}
                >
                  <FaPlay className={`${count > 3 ? "text-sm" : "text-lg"} text-white`} />
                </div>
                <div className={"absolute top-5 left-5 text-white text-sm"}>
                  <div className={"flex gap-1 items-center justify-center"}>
                    <FaStar />
                    <span>{item.vote_average.toFixed(1)}/10</span>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
