import IconSearch from "/Users/Tiago/projeto_next/portfolium/public/imagens/icon-search.svg"
import Image from "next/image"
export default function Search(){
    return(
        <div className="flex items-center gap-4">
            <Image
            src={IconSearch}
            alt="Search"/>
            <input type="text" id="search" name="search" className="bg-transparent outline-none pr-3 text-white placeholder:text-white" placeholder="Buscar"/>
        </div>
    )
}