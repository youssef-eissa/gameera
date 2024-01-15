import { Games } from "./types/types"
import './HomeTypesSection.css'
import { Button } from "./StyledComponents/Button.style"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { setGame } from "./Redux/GameReducer";

type ITypeSectionProps = {
    games: Games[]
    titleLowercased: string
    title:string
}

function HomeGamesTypeSection({ games, title, titleLowercased }: ITypeSectionProps) {
    const navigate = useNavigate()
    const dispatch=useDispatch()
    
    return (
        <div className="container-fluid ">
            <div className="row ">
                <div className="col-12 d-flex p-0 justify-content-center MainBox py-5">
                    <div className="col-10 d-flex flex-column  ">
                        <span className="col-12 text-center text-md-start">{titleLowercased}</span>
                        <div className="col-12 d-flex flex-md-row flex-column justify-content-between align-items-center">
                        <h1 className="col-md-5 col-12 mt-3 text-center text-md-start">{title}</h1>
                            <Button onClick={() => { navigate('/games'); window.scrollTo(0, 0)}} className="col-md-1 col-6 mx-auto mx-md-0 align-self-start py-md-3 px-md-3 py-2 px-3 mt-2 mt-md-0">View All</Button>
                        </div>
                        <div className="col-12 d-flex flex-md-row flex-column mt-5 justify-content-center align-items-center gap-3">
                            {games?.map((games: Games) => {
                                return <Link onClick={() => { dispatch(setGame(games.id)); window.scrollTo(0, 0)}} style={{ textDecoration: 'none'}} to={`/game/${games.id}`} key={games.id} className="col-md-3 col-12 d-flex flex-column gameBox mt-5 mt-md-0 ">
                                    <div className="col-12 d-flex rounded overflow-hidden typeBoxImgBox">
                                        <img className="img-fluid h-100 w-100" alt="img" src={games.thumbnail} />
                                    </div>
                                    <div className="col-12 d-flex flex-column">
                                        <span className="col-12 text-center my-3">{games.genre}</span>
                                        <h4 className="col-12 text-center">{ games.title}</h4>
                                    </div>

                                </Link>
                            })}
                        </div>
                    </div>
                </div>
            </div>
    </div>
)
}

export default HomeGamesTypeSection