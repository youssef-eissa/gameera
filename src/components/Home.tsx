import Banner from "./Banner"
import { Games } from "./types/types"
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import './Banner.css'
import { useEffect, useRef } from "react";




type IHomeProps = {
    games: Games[]
}

function Home({ games }: IHomeProps) {
    const arrowRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        
        window.addEventListener('scroll', () => {
            const scroll = window.scrollY
            if (arrowRef.current && scroll > 20) {
                arrowRef.current.style.opacity = '0'
                arrowRef.current.style.transition = '0.3s'
            } else if (arrowRef.current && scroll === 0) {
                arrowRef.current.style.opacity = '1'
                arrowRef.current.style.transition = '0.3s'
                }

        })

    })
return (
    <>
        <Banner games={games} />
        <div ref={arrowRef} className="arrow">
        <KeyboardDoubleArrowDownIcon sx={{color: 'white'}} fontSize="large" />

        </div>
    </>
)
}

export default Home