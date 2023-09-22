import Image from "next/image";
import { Container } from "./Container";

import PhoneIcon from "../imagens/icon-phone.svg"
import SoluctionIcon from "../imagens/icon-solutions.svg"
import OptionsIcon from "../imagens/icon-options.svg"
import CardIcon from "../imagens/icon-card.svg"

import ImagePhone from "../imagens/phone.png"

export function SectionService(){
    return(
        <section className="relative w-full h-[956px] bg-gray-phone">
            <Container>
            <div className="flex-1 max-w-[594px] pt-32">
                <span className="block text-primary-orange text-sm font-bold uppercase mb-9">serviços exclusivos</span>
                <h2 className="text-primary-gray text-[56px] font-bold leading-tight mb-6">Gerencie suas finanças sem sair de casa</h2>
                <p className="text-lg max-w-[554px] mb-16 text-second-gray">Veja como voçê pode cuidar das suas finanças pelo app Itaú de forma segura, rápida e o melhor, no conforto da sua casa.</p>
                <ul className="flex flex-col items-start gap-9">
                    <li className="flex items-center gap-9 pb-9 border-b-[1px] border-primary-orange">
                        <div className="w-7 h-7 flex items-center">
                        <Image
                        src={PhoneIcon}
                        alt="Phone Icon"
                        />
                        </div>
                        <p className="flex-1 text-txt-gray pr-2">Acompanhar sua conta, fazer transferências e pagamentos de onde estiver</p>
                    </li>
                    <li className="flex items-center gap-9 pb-9 border-b-[1px] border-primary-orange">
                        <div className="w-7 h-7 flex items-center">
                        <Image
                        src={SoluctionIcon}
                        alt="Soluction Icon"
                        />
                        </div>
                        <p className="flex-1 text-txt-gray pr-2">Acompanhar sua conta, fazer transferências e pagamentos de onde estiver</p>
                    </li>
                    <li className="flex items-center gap-9 pb-9 border-b-[1px] border-primary-orange">
                        <div className="w-7 h-7 flex items-center">
                        <Image
                        src={OptionsIcon}
                        alt="Options Icon"
                        />
                        </div>
                        <p className="flex-1 text-txt-gray pr-2">Acompanhar sua conta, fazer transferências e pagamentos de onde estiver</p>
                    </li>
                    <li className="flex items-center gap-9 pb-9 border-b-[1px] border-primary-orange">
                        <div className="w-7 h-7 flex items-center">
                        <Image
                        src={CardIcon}
                        alt="Card Icon"
                        />
                        </div>
                        <p className="flex-1 text-txt-gray pr-2">Acompanhar sua conta, fazer transferências e pagamentos de onde estiver</p>
                    </li>
                </ul>
            </div>
            </Container>
            <div className="absolute top-0 right-0 w-[32%] h-full flex items-center ">
                <Image src={ImagePhone} alt="image phone" className="translate-x-[-50%]"/>

            </div>
        </section>
    )
}