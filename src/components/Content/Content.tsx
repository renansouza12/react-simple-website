import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect } from 'react'
import SplitType from 'split-type'
import './Content.scss'

export default function Content(){

    useLayoutEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
         const contentTitle = new SplitType('.content_title');
         const charContentTitle = document.querySelectorAll('.content_title .char');

        gsap.from(charContentTitle,{
            opacity:0,
            stagger:0.1,
            x:30,
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
            gsap.killTweensOf(charContentTitle);
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