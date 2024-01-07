import { Games } from "./types/types"
import './Banner.css'
import { useEffect, useState ,useRef} from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { CloudDownloadOutlined } from "@ant-design/icons"
import { UserOutlined } from "@ant-design/icons"
import { PlayCircleOutlined } from "@mui/icons-material"
import { LayoutOutlined } from "@ant-design/icons"


type ILandingProps = {
    games: Games[]
}
function Banner({ games }: ILandingProps) {
    const SearchBox=useRef<HTMLDivElement>(null)
    const [GameName, setGameName] = useState<string>('')
    const [GameArray, setGameArray] = useState<Games[]>([])

    const [RandomeNumber, setRandomeNumber] = useState<number>(0)
    useEffect(() => {
        if (games) {
        setRandomeNumber(Math.floor(Math.random()*games.length))
        }
    }, [games])
    
    
 
    useEffect(() => {
        if (GameName !== "" && SearchBox.current) {
            
            SearchBox.current.style.transition = '0.5s'
            SearchBox.current.style.bottom = '-220px'
            SearchBox.current.style.opacity = '1'

            setGameArray(games.filter((game:Games)=>game.title.toLowerCase().includes(GameName.toLowerCase())))
        }
        else if (GameName === "" && SearchBox.current) {
            SearchBox.current.style.opacity = '0'
            
        }
    }, [GameName, games])
 

    function handleSearchGame(e: React.ChangeEvent<HTMLInputElement>) {
        setGameName(e.target.value)


    }
    

return (
        <div className='container-fluid'>
        <div className='row'>
            <div className='col-12 p-0 d-flex banner justify-content-around'>
                <div className="col-5 d-flex flex-column BannerLeftBox justify-content-center">
                    <h3 className="col-12 text-center">Welcome to <span className='gamera'>Gam<span>E</span>ra</span></h3>
                    <h1 className="col-12 text-center">best <span>gaming</span> site ever</h1>
                    <form  className="col-12 d-flex mt-5 justify-content-center">
                        <div className="col-8 d-flex flex-column justify-content-center">
                            <input
                                autoComplete="off"
                            className="col-12 ps-4"
                            type="text"
                            placeholder="Enter Game Name"
                            onChange={handleSearchGame}
                            name="Search"
                            value={GameName}
                            />
                        </div>
                        
                        <motion.div
                            
                            ref={SearchBox} className="SearchResult d-flex align-items-center justify-content-start flex-column">
                            {GameArray.length > 0 ? GameArray.map((game: Games) => {
                                return <Link target="_blank" to={game.game_url} key={game.id} className="togame ms-2" >{game.title }</Link>
                            }):<div style={{color:'black'}} className="col-12 text-center">No Game Found</div>}
                        </motion.div>
                    </form>
                </div>
                <div className="col-6 d-flex justify-content-center align-items-center">
                    <div className="col-6 rounded overflow-hidden imgConRightBox">
                        <img alt="img" className="img-fluid h-100" src={`${games && games[RandomeNumber].thumbnail}`} />
                    </div>  
                </div>
                <div className="col-12 BannerIcons d-flex justify-content-around" >
                    <div className="col-2 d-flex flex-column align-items-center rounded justify-content-center ">
                        <div className="d-flex align-items-center justify-content-center">
                        <CloudDownloadOutlined style={{fontSize:'50px',color:'white'}} />
                    </div>
                        <p className="col-12 text-center">Free Storage</p>
                    </div>
                    <div className="col-2 d-flex flex-column align-items-center rounded justify-content-center">
                        <div className="d-flex align-items-center justify-content-center">
                        <UserOutlined style={{fontSize:'50px',color:'white'}} />
                    </div>
                        <p className="col-12 text-center">User More</p>
                    </div>
                    <div className="col-2 d-flex flex-column align-items-center rounded justify-content-center">
                        <div className="d-flex align-items-center justify-content-center">
                        <PlayCircleOutlined style={{fontSize:'50px',color:'white'}} />
                    </div>
                        <p className="col-12 text-center">replay ready</p>
                    </div>
                    <div className="col-2 d-flex flex-column align-items-center rounded justify-content-center">
                        <div className="d-flex align-items-center justify-content-center">
                        <LayoutOutlined style={{fontSize:'50px',color:'white'}} />
                    </div>
                        <p className="col-12 text-center">easy layout</p>
                    </div>
                </div>
            </div>
            </div>
    </div>
)
}

export default Banner