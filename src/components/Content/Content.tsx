import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect } from 'react'
import './Content.scss'

export default function Content(){

    useLayoutEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);

        gsap.from('.content_title',{
            opacity:0,
            y:100,
            scrollTrigger:{
                trigger:'.content',
                start:"top center",
                end:"center center",
                scrub:true,
            }
        })

        gsap.to('.content_subTitle',{
            yPercent:50,
            scrollTrigger:{
                trigger:'.content',
                start:"top center",
                end:"center center",
                scrub:true,
            }
        })


        return ()=>{
            gsap.killTweensOf('.content_title');
        }
    },[])

    return (
        <div className="content">
            <h2 className='content_subTitle'>She smiled as she received a bouquet of</h2>
            <h1 className='content_title'>fragrant flowers</h1>
            <h2 className='content_subTitle' >their petals whispering tales of love.</h2>
            <div className="content_image"></div>
        </div>
    )
}