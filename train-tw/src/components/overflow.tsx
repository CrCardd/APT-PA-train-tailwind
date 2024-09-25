import Image from 'next/image'

import example from '../assets/ov-example.png'
import right_arrow from '../assets/ov-seta-direita.png'
import left_arrow from '../assets/ov-seta-esquerda.png'

export const Overflow = () => {

    const style = {
        overflow: "overflow-x-auto flex w-64 gap-[10px]",
        img: "w-[60px]  rounded-full",
        arrow: "w-[30px] h-[30px]"
    }


    return(
        <>
            <div className="flex justify-around items-center m-3">
                <Image className={style.arrow} src={left_arrow} alt=""/>
                <div className={style.overflow}>
                    <Image className={style.img} src={example} alt=""/>
                    <Image className={style.img} src={example} alt=""/>
                    <Image className={style.img} src={example} alt=""/>
                    <Image className={style.img} src={example} alt=""/>
                    <Image className={style.img} src={example} alt=""/>
                    <Image className={style.img} src={example} alt=""/>
                    <Image className={style.img} src={example} alt=""/>
                </div>
                <Image className={style.arrow} src={right_arrow} alt=""/>
            </div>
        </>
    )
}