import './AllGames.css'
import { PagesHeader } from "./StyledComponents/PagesHeader"
import { motion } from "framer-motion"
import { Games } from "./types/types"
import { Radio } from 'antd';
import {  useState } from "react";
import type { RadioChangeEvent } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Loader from './Loader';
import { useDispatch } from 'react-redux';
import { setGame } from './Redux/GameReducer';



type TAllGames = {
    games: Games[]
}
function AllGames({ games }: TAllGames) {
    const categories = Array.from(new Set(games?.map((games: Games) => games.genre)))
    const dispatch=useDispatch()

    const [category, setCategory] = useState<string>('all')
    const [platform, setPlatform] = useState<string>('all')
    const [sort, setSort] = useState<string>('release-date')
    
    function handleCategory(e: RadioChangeEvent) {
        setCategory(e.target.value)
    }
    function handlePlatform(e: RadioChangeEvent) {
        setPlatform(e.target.value)
    }
    function handleSort(e: RadioChangeEvent) {
        setSort(e.target.value)
    }
    function getGamesCategories() {
        return axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games`, {
            params: {
            platform: platform,
            category: category,
            'sort-by': sort
            },
            headers: {
                'X-RapidAPI-Key': 'bd5bd0e351mshe0b55c617d771c6p12249djsn8276a5c7dce4',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        })
    }
    const {data: gamesData,isFetching} = useQuery({
        queryKey: ["games",category,platform,sort],
        queryFn: getGamesCategories,
        enabled: category !== 'all' || platform !== 'all' ,
        select: (data) => data.data,
        refetchOnMount: false,
        refetchOnWindowFocus: false
    })
    
    if (isFetching) {
        return <Loader/>
}

return (
            <motion.div
            initial='initial'
            animate='animate'
            exit='exit'
            transition={{duration: 0.5,bounce: 1}}
            variants={{
                initial: {
                    opacity: 0,
                },
                animate: {
                    opacity: 1,

                },
                exit: {
                    opacity: 0,

                }
            }}

            className='container-fluid'>
        <div className='row'>
            <PagesHeader className="col-12 d-flex flex-column align-items-center justify-content-center p-0">
                <h1 className="col-12 text-center ">our Games</h1>
                <span className="col-12 text-center">Home &gt; Games</span>
                
            </PagesHeader>
        </div>
        <div className="row mt-5 d-flex justify-content-center">
            <div className="col-md-10 col-11 d-flex flex-column flex-md-row justify-content-between p-0">
                <div className="col-md-3 col-12 radioBox align-self-start d-flex flex-md-column align-items-start">
                    <div className='col-md-12 col-4 d-flex flex-column'>
                        <h4 className="col-12 ">Categories</h4>
                
                    <Radio.Group onChange={handleCategory} value={category} className="col-12 d-flex flex-column justify-content-center ">
                        <Radio className='radio col-12 mb-1' value={'all'}>All</Radio>
                        {categories&&categories?.map((game: string) => {
                            return <Radio className="col-12 radio mb-1" value={game} key={game}>{game}</Radio>
                        })}
                    </Radio.Group>
                    </div>
                    <div className='col-md-12 col-4 d-flex flex-column'>
                        <h4 className="col-12  mt-md-3">Platforms </h4>
                    <Radio.Group onChange={handlePlatform} value={platform} className="col-12 d-flex flex-column justify-content-center ">
                        <Radio className='radio col-12 mb-1' value={'all'}>All</Radio>
                        <Radio className='radio col-12 mb-1' value={'pc'}>PC</Radio>
                        <Radio className='radio col-12 mb-1' value={'browser'}>Browser</Radio>
                       
                    </Radio.Group>
                    </div>
                    <div className='col-md-12 col-4 d-flex flex-column'> 
                        <h4 className="col-12  mt-md-3">Sort By </h4>
                    <Radio.Group value={sort} onChange={handleSort} className="col-12 d-flex flex-column justify-content-center ">
                        <Radio className='radio col-12 mb-1' value={'release-date'}>Release Date</Radio>
                        <Radio className='radio col-12 mb-1' value={'alphabetical'}>Alphabetical</Radio>
                    </Radio.Group>
                    </div>

                </div>
                <div className='col-md-8 col-12 mt-md-0 mt-5 d-flex flex-wrap justify-content-center gap-2'>
                    {category === 'all' ?
                        games&& games.map((game: Games) => {
                            return <motion.div
                                initial={{ opacity: 0,scale: 0.2 }}
                                animate={{ opacity: 1 ,scale: 1 }}
                                transition={{ duration: 0.5,bounce: 0.5,type: 'spring' }}
                                key={game.id}
                                className='col-4  '>
                                <Link onClick={()=>dispatch(setGame(game.id))} style={{color:'#ee626b',textDecoration:'none'}} to={`/game/${game.id}`} className="col-12 d-flex flex-column allgameGameBox" key={game.id}>
                                <div className='col-12 d-flex rounded gameBox overflow-hidden'>
                                    <img alt='img' src={game.thumbnail} className="img-fluid h-100 w-100" />
                                    </div>
                                    <p className='col-12 text-center gameTitle'>{game.title} </p>
                            </Link>
                            </motion.div>
                        })
                        : gamesData&& gamesData!==undefined? gamesData.map((game: Games) => {
                            return <motion.div
                                initial={{ opacity: 0,scale: 0.2 }}
                                animate={{ opacity: 1 ,scale: 1 }}
                                transition={{ duration: 0.5,bounce: 0.5,type: 'spring' }}
                                key={game.id}
                                className='col-3 allgameGameBox'>
                                <Link style={{color:'#ee626b',textDecoration:'none'}} to={`/games/${game.id}`} className="col-12 d-flex flex-column gameBoxInAllGames" key={game.id}>
                                <div className='col-12 d-flex rounded gameBox overflow-hidden'>
                                        <img alt='img' src={game.thumbnail} className="img-fluid h-100 w-100" />
                                        
                                    </div>
                                    <p className='col-12 text-center gameTitle'>{game.title}</p>
                            </Link>
                            </motion.div>
                        }) : <div className='col-12 text-center comingSoon d-flex justify-content-center align-items-center'>
                                <h1 className='col-12 text-center'>Coming Soon</h1>
                        </div>
                        

                    }
                </div>

            </div>
        </div>
    </motion.div>
        
)
}

export default AllGames