import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect } from 'react'
import './Introduction.scss'



export default function Introduction(){

    useLayoutEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);

        gsap.to('.intro_txt_first',{
            xPercent:-30,
            scrollTrigger:{
                trigger:".introduction",
                start:"top center",
                end:"bottom center",
                scrub:true,
            }
        })
        gsap.to('.intro_txt_third',{
            xPercent:30,
            scrollTrigger:{
                trigger:".introduction",
                start:"top center",
                end:"bottom center",
                scrub:true,
            }
        })


        return ()=>{
            gsap.killTweensOf(".intro_txt");
        }
    },[])

    return(
        <div className="introduction">
            <div className="introduction_title">
            <h1 className='intro_txt_first'>Make no</h1>
            <h1 className='intro_txt'>unrealistic </h1>
            <h1 className='intro_txt_third'>experience</h1>
            </div>
           
           <div className="introduction_text">
            <p></p>
           </div>
        </div>
    )
}