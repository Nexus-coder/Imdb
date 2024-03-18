export default function Person(){
    return (
        <article className="text-4xl p-4 rounded-xl border-4 w-80">
        <div className="flex flex-row gap-5">
            <div className="w-24 h-24 rounded-full bg-stone-700">
            </div>
            <div className="flex flex-col gap-3 justify-center">
                <span className="text-2xl leading-6 ">name</span>
                <span className="text-2xl leading-6">country.name</span>
            </div>
        </div>
    </article>
    )
}