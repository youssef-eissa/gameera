import { Games } from "./types/types"
import './Banner.css'
import { useEffect, useState ,useRef} from "react"
import { Link } from "react-router-dom"
import { CloudDownloadOutlined } from "@ant-design/icons"
import { UserOutlined } from "@ant-design/icons"
import { PlayCircleOutlined } from "@mui/icons-material"
import { LayoutOutlined } from "@ant-design/icons"
import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import { useDebounce } from "use-debounce"


type ILandingProps = {
    games: Games[]
}
function Banner({ games }: ILandingProps) {
    const SearchBox=useRef<HTMLDivElement>(null)
    
    const [Search,setSearch]=useState<string>('')

    const [RandomeNumber, setRandomeNumber] = useState<number>(0)
    useEffect(() => {
        if (games) {
        setRandomeNumber(Math.floor(Math.random()*games.length))
        }
    }, [games])

    useEffect(() => {
        if (Search!==''&& SearchBox.current) {
            
            SearchBox.current.style.transition = '0.5s'
            SearchBox.current.style.bottom = '-220px'
            SearchBox.current.style.opacity = '1'

        }
        else if (Search === "" && SearchBox.current) {
            SearchBox.current.style.opacity = '0'
            
        }
    }, [ games,Search])
    const debouncedValue=useDebounce(Search,400)

    
    function getGamesBySearch() {
        return axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games`, {
                params: {
                category: Search,
            },
            headers: {
                'X-RapidAPI-Key': 'bd5bd0e351mshe0b55c617d771c6p12249djsn8276a5c7dce4',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        })
    }
    const { data  } = useQuery({
        queryKey: ['Search',debouncedValue[0]],
        queryFn: getGamesBySearch,
        select: (data) => data.data,
        enabled: !!debouncedValue[0]

    })


return (
        <div className='container-fluid'>
        <div className='row'>
            <div className='col-12 p-0 d-flex flex-column banner justify-content-md-center '>
                <div className="col-12 mt-5 d-flex flex-column-reverse flex-md-row justify-content-center align-items-center">
                <div className="col-md-5 col-12 d-flex flex-column BannerLeftBox justify-content-center">
                    <h3 className="col-12 text-center">Welcome to <span className='gamera'>Gam<span>E</span>ra</span></h3>
                    <h1 className="col-12 text-center">best <span>gaming</span> site ever</h1>
                    <form  className="col-12 d-flex mt-5 justify-content-center">
                        <div className="col-8 d-flex flex-column justify-content-center">
                            <input
                                autoComplete="off"
                            className="col-12 ps-4"
                            type="text"
                            placeholder="Search By Category"
      
                            onChange={(e)=>setSearch(e.target.value)}
                            name="Search"
                            value={Search}
                            />
                        </div>
                        
                        <div
                            ref={SearchBox} className="SearchResult d-flex align-items-center justify-content-start flex-column">
                            {data ? data.map((game: Games) => {
                                return <Link target="_blank" to={game.game_url} key={game.id} className="togame ms-2" >{game.title }</Link>
                            }):<div style={{color:'black'}} className="col-12 text-center">No Game Found</div>}
                        </div>
                    </form>
                </div>
                <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
                    <div className="col-md-6 col-10 rounded overflow-hidden imgConRightBox">
                        <img alt="img" className="img-fluid h-100" src={`${games && games[RandomeNumber].thumbnail}`} />
                    </div>
                </div>
              </div>
                <div className="col-12 BannerIcons row-gap-3 row-gap-md-0 d-flex flex-md-row flex-column justify-content-md-around align-items-center" >
                    <div className="col-md-2 col-10 d-flex flex-column align-items-center rounded justify-content-center ">
                        <div className="d-flex align-items-center justify-content-center">
                        <CloudDownloadOutlined style={{fontSize:'50px',color:'white'}} />
                    </div>
                        <p className="col-12 text-center">Free Storage</p>
                    </div>
                    <div className="col-md-2 col-10 d-flex flex-column align-items-center rounded justify-content-center">
                        <div className="d-flex align-items-center justify-content-center">
                        <UserOutlined style={{fontSize:'50px',color:'white'}} />
                    </div>
                        <p className="col-12 text-center">User More</p>
                    </div>
                    <div className="col-md-2 col-10 d-flex flex-column align-items-center rounded justify-content-center">
                        <div className="d-flex align-items-center justify-content-center">
                        <PlayCircleOutlined style={{fontSize:'50px',color:'white'}} />
                    </div>
                        <p className="col-12 text-center">replay ready</p>
                    </div>
                    <div className="col-md-2 col-10 d-flex flex-column align-items-center rounded justify-content-center">
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