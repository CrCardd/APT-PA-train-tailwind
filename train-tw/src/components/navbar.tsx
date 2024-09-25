// import Link from 'next/Link';
import Image from 'next/image';

import cartoon from '../assets/cartoonlogo.png'
import jogos from '../assets/nav-jogos.png'
import videos from '../assets/nav-videos.png'
import ligatoon from '../assets/nav-ligatoon.png'
import mais from '../assets/nav-mais.png'
import campclima from '../assets/nav-campclima.png'
import aplicacoes from '../assets/nav-aplicacoes.png'






export const Navbar = () => {

    const style = {
        img: "w-[25px] h-[25px]",
        logo: "w-[80px]",
        nav: "bg-slate-900 flex w-full p-2 justify-around items-center h-[70px]",
        button: "flex flex-col items-center",
        text: "text-white text-[10px] flex flex-wrap"
    }

    return(
        <div className={style.nav}>
            <Image className={style.logo} src={cartoon} alt="" />

            <div className={style.button}>
                <Image className={style.img} src={jogos} alt="" />
                <p className={style.text}>JOGOS</p>  
            </div>

            <div className={style.button}>
                <Image className={style.img} src={videos} alt="" />
                <p className={style.text}>VIDEOS</p>
            </div>

            <div className={style.button}>
                <Image className={style.img} src={ligatoon} alt="" />
                <p className={style.text}>LIGA TOON</p>
            </div>

            <div className={style.button}>
                <Image className={style.img} src={mais} alt="" />
                <p className={style.text}>MAIS</p>
            </div>
            
        {/* <div className={style.button}>
                <Image className={style.img} src={campclima} alt="" />
                <p className={style.text}>CAMPEÕES DO CLIMA</p>
            </div>

            <div className={style.button}>
                <Image className={style.img} src={aplicacoes} alt="" />
                <p className={style.text}>APLICAÇÕES</p>
            </div> */}
        </div>
    )
}