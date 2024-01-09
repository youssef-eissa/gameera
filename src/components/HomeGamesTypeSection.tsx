import { Games } from "./types/types"
import './HomeTypesSection.css'
import { Button } from "./StyledComponents/Button.style"
import { Link,useNavigate } from "react-router-dom"

type ITypeSectionProps = {
    games: Games[]
    titleLowercased: string
    title:string
}

function HomeGamesTypeSection({ games, title, titleLowercased }: ITypeSectionProps) {
    const navigate = useNavigate()
    
    
    return (
        <div className="container-fluid ">
            <div className="row ">
                <div className="col-12 d-flex p-0 justify-content-center MainBox py-5">
                    <div className="col-10 d-flex flex-column  ">
                        <span className="col-12">{titleLowercased}</span>
                        <div className="col-12 d-flex justify-content-between align-items-center">
                        <h1 className="col-3 mt-3">{title}</h1>
                            <Button onClick={() => navigate('/games')} className="col-1 align-self-start py-3 px-3">View All</Button>
                        </div>
                        <div className="col-12 d-flex mt-5 justify-content-center gap-3">
                            {games?.map((games: Games) => {
                                
                                return <Link style={{ textDecoration: 'none'}} to='/' key={games.id} className="col-3 d-flex flex-column gameBox ">
                                    <div className="col-12 d-flex rounded overflow-hidden typeBoxImgBox">
                                        <img className="img-fluid h-100" alt="img" src={games.thumbnail} />
                                    </div>
                                    <div className="col-12 d-flex flex-column">
                                        <span className="col-12 my-3">{games.genre}</span>
                                        <h4 className="col-12">{ games.title}</h4>
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