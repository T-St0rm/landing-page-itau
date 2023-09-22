import Image from "next/image"
import {Container} from "@/app/components/Container"
import ImgAppleStore from "/Users/Tiago/projeto_next/portfolium/public/imagens/btn-apple-store.svg"
import ImgGooglePlay from "/Users/Tiago/projeto_next/portfolium/public/imagens/btn-google-play.svg"
import Arrow from "/Users/Tiago/projeto_next/portfolium/public/imagens/arrow-explorer.svg"
import Woman from "/Users/Tiago/projeto_next/portfolium/public/imagens/woman.png"

export function SectionHero(){
    return(
        <section className="bg-primary-orange w-full h-[704px] bg-no-repeat bg-center bg-cover mt-2">
        <Container>
            <div className="flex-1 max-w-[500px]">
                <h1 className="text-white text-7xl font-bold mb-4">Tenha seu banco na palma da mão.</h1>
                <p className="text-white text-xl max-w-[408px] mb-8">Todas as operações que você precisa em um só lugar. Simples, completo e feito pra você.</p>
                <div className="flex gap-4 mb-24">
                    <button>
                        <Image
                        src={ImgAppleStore}
                        alt="Apple Store"/>
                    </button>
                    <button>
                        <Image
                        src={ImgGooglePlay}
                        alt="Play Store"/>
                    </button>
                </div>
                <button className="flex items-center gap-3 mb-24">
                    <Image src={Arrow} alt="Arrow Explorer" />
                    <span className="text-white text-sm font-bold">Continue Explorando</span>
                </button>
            </div>
            <Image src={Woman} alt="Woman Image" className="mr-[-41px]"/>
        </Container>
        </section>
    )
}