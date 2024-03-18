export default function ModalContent({ props,change }) {
    const {name,score,image,description} = props;
    let summary = description
    .substring((description.indexOf('<p>')+3),description.indexOf('</p>'))
    return (
        <div className="flex flex-col gap-8 w-[500px] md:w-[816px] md:h-[532px] bg-slate-600 p-9 text-white font-bold">
            <figure className="flex flex-row gap-5">
                <img className="w-40 h-60 bg-slate-300" src={image.medium} alt="" />
                <figcaption>
                    <article className="">
                        <span className="text-4xl">{name}</span>
                        <div className="text-2xl leading-6 ">2022 - 43min - Tv-14</div>
                        <div className="text-2xl leading-6">Crime - Legal - Sci-fi</div>
                    </article>
                    <p className="text-xl font-normal mt-3">{summary}</p>
                </figcaption>
            </figure>
            <div>
                <span className="block text-2xl">Because of your interest in:</span>
                <span className="font-normal text-2xl">Avengers</span>
                <div className="flex flex-row gap-3 w-full mt-1">
                    <button className="w-10/12 text-2xl "><span className="mr-5"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" ><path fill="currentColor" d="M298.7 213.3V0h-85.4v213.3H0v85.4h213.3V512h85.4V298.7H512v-85.4z"></path></svg></span>Watch list</button>
                    <button className="w-2/12 md:w-1/12 text-3xl font-normal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M12 10c2.92-1.82 7.3-4 9.37-4h6a16.68 16.68 0 0 1 3.31 6.08A26.71 26.71 0 0 1 32 20h-9v10a2.05 2.05 0 0 1-1.26 1.69c-.77-2-2.62-6.57-4.23-8.72A11.39 11.39 0 0 0 12 19.09v2.13a9.13 9.13 0 0 1 3.91 3c1.88 2.51 4.29 9.11 4.31 9.17a1 1 0 0 0 1.19.63C22.75 33.62 25 32.4 25 30v-8h8a1 1 0 0 0 1-1a29 29 0 0 0-1.4-9.62c-1.89-5.4-4.1-7.14-4.2-7.22a1 1 0 0 0-.61-.16h-6.42C18.94 4 14.83 6 12 7.63Z" className="clr-i-outline clr-i-outline-path-1"></path><path fill="currentColor" d="M2 5h7a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2Zm6 2H4v14h4Z" className="clr-i-outline clr-i-outline-path-2"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
                    </button>
                    <button
                        onClick={() => change()}>Close</button>
                </div>
            </div>
        </div>
    )
}