import { motion,AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import './Loader.css'

function Loader() {
    const [display, setDisplay] = useState<boolean>(true)
    
    useEffect(() => {
        const interval=setInterval(() => {
            if(display){
                setDisplay(false)
            }else{
                setDisplay(true)
            }
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [display])
    const Variants ={
                                    initial:{
                                        y: '50px',
                                        
                                    },
                                    animate:{
                                        y: 0,
                                    },
                                   
                                }
    return (
            <div className='container-fluid'>
            <div className='row '>
                <div className='col-12 d-flex flex-column justify-content-center align-items-center vh-100 p-0 loaderBox'>
                    <div className="col-12 d-flex justify-content-center align-items-center">
                        <AnimatePresence>
                            <motion.h1
                                className="loader  text-center"
                        key='loaderg'
                        initial='initial'
                        animate='animate'
                                exit='exit'
                                variants={Variants}
                        transition={{duration: 1,repeat: Infinity,repeatType: 'reverse',ease: 'easeInOut',type: 'tween',repeatDelay: 0.3}}
                        >G</motion.h1>
                        <motion.h1
                                className="loader  text-center"
                        key='loadera'
                        initial='initial'
                        animate='animate'
                                exit='exit'
                                variants={Variants}
                        transition={{duration: 1,repeat: Infinity,repeatType: 'reverse',ease: 'easeInOut',type: 'tween',repeatDelay: 0.2}}
                        >a</motion.h1>
                         <motion.h1
                                className="loader  text-center"
                        key='loaderm'
                        initial='initial'
                        animate='animate'
                                exit='exit'
                                variants={Variants}
                        transition={{duration: 1,repeat: Infinity,repeatType: 'reverse',ease: 'easeInOut',type: 'tween',repeatDelay: 0.3}}
                        >m</motion.h1>
                         <motion.h1
                                className="loader  text-center"
                        key='loadere'
                        initial='initial'
                        animate='animate'
                                exit='exit'
                                variants={Variants}
                        transition={{duration: 1,repeat: Infinity,repeatType: 'reverse',ease: 'easeInOut',type: 'tween',repeatDelay: 0.2}}
                        >E</motion.h1>
                         <motion.h1
                                className="loader  text-center"
                        key='loaderr'
                        initial='initial'
                        animate='animate'
                                exit='exit'
                                variants={Variants}
                        transition={{duration: 1,repeat: Infinity,repeatType: 'reverse',ease: 'easeInOut',type: 'tween',repeatDelay: 0.3}}
                        >r</motion.h1>
                         <motion.h1
                                className="loader  text-center"
                        key='loader'
                        initial='initial'
                        animate='animate'
                                exit='exit'
                                variants={Variants}
                        transition={{duration: 1,repeat: Infinity,repeatType: 'reverse',ease: 'easeInOut',type: 'tween',repeatDelay: 0.2}}
                            >a</motion.h1>
                    
                </AnimatePresence>
                    </div>
                    <div className="col-12 d-flex justify-content-center circleBox">
                    <div className="circle"></div>
                </div>
                </div>
                
            </div>
    </div>
)
}

export default Loader