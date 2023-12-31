import Image from 'next/image'

import ItemMenu from './ItemMenu'
import  Search  from './Search'
import { Container } from './Container'

import Logo from '../imagens/logo.svg'
import IconUsers from '../imagens/icon-user.svg'

export default function Header(){
    return(
        <header className="relative w-full h-20 bg-primary-orange">
            <div className="absolute top-0 right-0 bg-primary-blue w-[19%] h-full z-0"></div>
            <Container>
                <div className="flex flex-1 items-center justify-between">
                    <div className="flex items-start gap-14">
                        <Image
                        src={Logo}
                        alt="Logo"
                        />
                        <ul className="flex items-center gap-12">
                            <li>
                                <ItemMenu
                                name="Para Você"/>
                            </li>
                            <li>
                                <ItemMenu
                                name="Para Empresa"/>
                            </li>
                            <li>
                                <ItemMenu
                                name="Serviços"/>
                            </li>
                            <li>
                                <ItemMenu
                                name="Ajuda"/>
                            </li>
                        </ul>
                    </div>
                    <Search/>
                </div>
                <button className="flex items-center gap-4 bg-primary-blue h-20 pl-10 z-10">
                    <Image src={IconUsers} alt='IconUsers'/>
                    <span className="text-white font-bold">Acessar Conta</span>
                </button>
            </Container>
        </header>
    )
}