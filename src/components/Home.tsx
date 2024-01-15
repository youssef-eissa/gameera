import Banner from "./Banner"
import { Games } from "./types/types"
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import './Banner.css'
import { useEffect, useRef } from "react";
import HomeGamesTypeSection from "./HomeGamesTypeSection";
import HomeTopCategoriesSection from "./TopCategoriesAndRelatedGames";
import Advantages from "./Advantages";
import { motion } from "framer-motion";




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
            } else if (arrowRef.current && scroll <= 20) {
                arrowRef.current.style.opacity = '1'
                arrowRef.current.style.transition = '0.3s'
                }

        })

    })
    const categories = Array.from(new Set(games?.map((games: Games) => games.genre)))
    
    

    function getCat(categories: string[], games: Games[]): Games[] {
        let categoriesArray: Games[] = []
        for (let i = 0; i < categories.length; i++){
            let j = 0
            while (j < games.length) {
                if (games[j].genre === categories[i]) {
                    categoriesArray.push(games[j])
                    break
                }
                j++
            }
        }
        return categoriesArray
    }
   
    




return (
    <motion.div
            initial='initial'
            animate='animate'
            exit='exit'
            transition={{duration: 0.5,bounce: 0.5}}
            variants={{
                initial: {
                    opacity: 0,

                },
                animate: {
                    opacity: 1,
                    y:'0'

                },
                exit: {
                    opacity: 0,

                }
            }}
    >
        <Banner games={games} />
        <HomeGamesTypeSection title="Trending Games" titleLowercased="Trending" games={games?.slice(0, 4)} />
        <HomeGamesTypeSection title="Most PLayed" titleLowercased="top games" games={games?.slice(5, 9)} />
        <HomeTopCategoriesSection categories={getCat(categories.slice(0, 5), games)} />
        <Advantages/>
        <div ref={arrowRef} className="arrow">
        <KeyboardDoubleArrowDownIcon sx={{color: 'white'}} fontSize="large" />

        </div>
    </motion.div>
)
}

export default Home