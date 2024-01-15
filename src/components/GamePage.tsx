import { useSelector } from "react-redux"
import { PagesHeader } from "./StyledComponents/PagesHeader"
import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import { Game,Games } from "./types/types"
import './GamePage.css'
import { Link } from "react-router-dom"
import TopCategoriesAndRelatedGames from "./TopCategoriesAndRelatedGames"
import Loader from "./Loader"
function GamePage() {
    const game = useSelector((state: { game: { game: number } }) => state.game.game)
    function getGame() {
        return axios.get('https://free-to-play-games-database.p.rapidapi.com/api/game', {
            params: { id: `${game}` },
            headers: {
            'X-RapidAPI-Key': 'bd5bd0e351mshe0b55c617d771c6p12249djsn8276a5c7dce4',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
        })
    }
    
    const {data:gameData ,isFetching:gameFetching  } = useQuery({
        queryKey: ["game",game],
        queryFn: getGame,
        select: (data) => data.data as Game,
        enabled: game !== 0,
        refetchOnWindowFocus: false,
        refetchIntervalInBackground: false

    })

    function getRelatedGames() {
        return axios.get('https://free-to-play-games-database.p.rapidapi.com/api/games', {
            params: {
                category:  gameData?.genre
            },
            headers: {
                'X-RapidAPI-Key': 'bd5bd0e351mshe0b55c617d771c6p12249djsn8276a5c7dce4',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
        })
    }
    
    const { data:relatedGames,isFetching:relatedGamesFetching } = useQuery({
        queryKey: ["related",gameData],
        queryFn: getRelatedGames,
        select: (data) =>  data.data.filter((game: Games) => game.id !== gameData?.id && game.genre === gameData?.genre).slice(0, 5) as  Games[],
        enabled: game !== 0,
        refetchOnWindowFocus: false,
        refetchIntervalInBackground: false
    })

    if (gameFetching || relatedGamesFetching) {
        return <Loader/>
    }

    return (
        <div className="container-fluid pb-5">
            <div className='row'>
            <PagesHeader className="col-12 p-0 d-flex flex-column align-items-center justify-content-center">
                    <h1 className="col-12 text-center ">{gameData && gameData.title}</h1>
                    <span className="col-12 text-center">home &gt; games &gt; {gameData && gameData.title}</span>
            </PagesHeader>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex flex-md-row flex-column mt-5 align-items-center justify-content-between">
                        <div className="col-md-5 col-10 rounded overflow-hidden imgConGamePage">
                            <img alt="img" className="img-fluid h-100" src={gameData && gameData.thumbnail } />
                        </div>
                        <div className="col-md-5 col-10 mt-md-0 mt-3 d-flex flex-column align-items-center justify-content-center">
                            <h2 className="col-12">{gameData && gameData.title}</h2>
                            <p className="col-12">{gameData && gameData.short_description}</p>
                            <div className="col-md-10 col-12 d-flex info flex-column">
                                <div className="col-12  d-flex align-items-center">
                                    Genre <span className="ms-5">{gameData && gameData.genre}</span>
                                </div>
                                <div className="col-12 my-3 d-flex align-items-center">
                                    Publisher <span className="ms-4">{gameData && gameData.publisher}</span>
                                </div>

                                <div className="col-12 my-3 d-flex align-items-center">
                                    Release Date <span className="ms-3">{gameData && gameData.release_date}</span>
                                </div>
                                
                            </div>
                            <Link target="_blank" to={`${gameData?.freetogame_profile_url}`} className="col-md-3 col-6 p-2 toGame text-center">Play Now</Link>
                        </div>
                    </div>
                </div>
            </div>

                <div className="container">
                <div className="row">
                    <div className="col-12 screenShots p-0 d-flex flex-column">
                            <h1 className="col-12">Description</h1>
                        <div className="col-12 gameInfoBox  d-flex justify-content-center align-items-center">
                        <p className="col-md-10 col-12 ">{gameData && gameData.description}</p>
                    </div>
                    </div>
                </div>
            </div>
            
            <div className="container">
                <div className="row">
                    <div className="col-12 screenShots d-flex flex-column">

                        <h1 className="col-12">Screenshots</h1>

                        <div className="col-12 gameInfoBox py-2 d-flex justify-content-center align-items-center flex-md-row flex-column gap-3 ">
                            {gameData && gameData.screenshots.slice(0,3).map((img: { id: number, image: string }) => {
                            return <div key={img.id} className="col-md-3 col-10  rounded overflow-hidden screenShotsImgBox">
                                <img alt="img" className="img-fluid h-100" src={ img.image} />
                            </div>
                        })}
                    </div>
                    </div>
                </div>
            </div>
            
                        <TopCategoriesAndRelatedGames relatedGames={relatedGames} />

    </div>
)
}

export default GamePage