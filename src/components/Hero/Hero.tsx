import { useLayoutEffect } from 'react'
import {gsap} from 'gsap'
import SplitType from 'split-type'
import './Hero.scss'


export default function Hero(){
    useLayoutEffect(()=>{
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const heroTitle = new SplitType('.hero_title_txt');
        const charHeroTitle = document.querySelectorAll('.hero_title_txt .char');

        gsap.from(charHeroTitle,{
            x:150,
            stagger:0.1,
            opacity:0
        })

        
        return ()=>{
            gsap.killTweensOf(charHeroTitle);
        }
    },[])

    return(
        <div className="hero">
            <div className="hero_title">    
                <h1 className='hero_title_txt'>Chic modern love</h1>
            </div>
           
            <div className="hero_image"></div>
        </div>
    )
}