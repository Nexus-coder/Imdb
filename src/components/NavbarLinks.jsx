export default function NavbarLinks({props}) {
    return (
        <div className="absolute w-full mt-2 rounded-md py-3 bg-slate-400 z-50">
            <ul className="sm:grid sm:grid-cols-2">
                {props.map((prop) => (
                    <li className="flex items-center gap-4 hover:brightness-90 text-2xl pl-3 mt-2" key={prop.show.id}>
                        <img className="w-16 h-16" src={ prop.show.image?.medium ?? <p>No image</p>} alt="" />
                        <a className="hover:underline" href={`/details/${prop.show.id}`}>
                            {prop.show.name}
                        </a>
                    </li>))
                }
            </ul>
        </div>
    )
}