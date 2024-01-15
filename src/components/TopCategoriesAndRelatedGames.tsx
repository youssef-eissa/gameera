import { Link } from 'react-router-dom'
import './TopCategories.css'
import { Games } from './types/types'
import { setGame } from './Redux/GameReducer'
import { useDispatch } from 'react-redux'

type TCategories = {
    categories?: Games[]
    relatedGames?: Games[]
}


function TopCategoriesAndRelatedGames({ categories,relatedGames }: TCategories) {
    const dispatch=useDispatch()

    return (
        <div className={`${categories ?"container-fluid":"container" } `}>
            <div className='row d-flex justify-content-center'>
                <div className='col-12 d-flex flex-column justify-content-center align-items-center topCategories'>
                    
                    {categories ? <div className='col-12 topCategories'>
                    <span className='col-12 d-flex flex-column justify-content-center  text-center'>categories</span>
                    <h1 className='col-12 text-center'>Top Categories</h1>
                    </div>
                        :
                        <div className='col-12 topCategories'>
                            <span className='col-12 d-flex flex-column justify-content-center  '>{ relatedGames && relatedGames[0]?.genre}</span>
                    <h1 className='col-12 '>Related Games</h1>
                    </div>
                    }
                <div className={`${categories ? 'col-10' : 'col-12'} d-flex justify-content-center flex-md-row flex-column gap-3 `}>
                    {categories?.map((game: Games) => {
                        return <div className='col-md-2 col-12 d-flex flex-column categoryBox ' key={game.id}>
                            <h4 className='col-12 text-center my-4 '>{game.genre}</h4>
                            <Link onClick={() => { dispatch(setGame(game.id)); window.scrollTo(0, 0)}}  to={`/game/${game.id}`} className='catImgBox col-12 overflow-hidden'>
                                <img alt='img' src={game.thumbnail} className='img-fluid h-100 w-100'/>
                            </Link>
                        </div>
                    })}
                        {relatedGames?.map((game: Games) => {
                        return <div className='col-md-2 col-12 d-flex flex-column categoryBox ' key={game.id}>
                            <h4 className='col-12 text-center my-4 '>{game.genre}</h4>
                            <Link onClick={() => { dispatch(setGame(game.id)); window.scrollTo(0, 0)}}  to={`/game/${game.id}`} className='catImgBox col-12 overflow-hidden'>
                                <img alt='img' src={game.thumbnail} className='img-fluid h-100 w-100'/>
                            </Link>
                        </div>
                    })}
                </div>
                </div>
            </div>
    </div>
)
}

export default TopCategoriesAndRelatedGames