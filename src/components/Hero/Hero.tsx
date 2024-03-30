import { useLayoutEffect } from 'react'
import {gsap} from 'gsap'
import SplitType from 'split-type'
import './Hero.scss'


export default function Hero(){
    useLayoutEffect(()=>{

        const heroTitle = new SplitType('.hero_title_txt');
        const charHeroTitle = document.querySelectorAll('.hero_title_txt .char');

        gsap.from(charHeroTitle,{
            x:150,
            stagger:0.1,
            opacity:0
        })

    },[])

    return(
        <div className="hero">
            <div className="hero_title">    

                <h1 className='hero_title_txt'>Chic modern love</h1>

            </div>
           
            <div className="hero_image">
                <img src="https://i.pinimg.com/564x/11/69/fc/1169fcd685615921216b82495bf59c93.jpg" alt="" />
            </div>
        </div>
    )
}