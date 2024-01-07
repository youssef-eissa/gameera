import './TopCategories.css'
import { Games } from './types/types'

type TCategories = {
    categories:Games[]
}


function HomeTopCategoriesSection({ categories }: TCategories) {
    

    return (
        <div className='container-fluid '>
            <div className='row d-flex justify-content-center'>
                <div className='col-12 d-flex flex-column justify-content-center align-items-center topCategories'>
                    <span className='col-12 text-center'>categories</span>
                    <h1 className='col-12 text-center'>Top Categories</h1>
                <div className='col-10 d-flex justify-content-center gap-3 '>
                    {categories?.map((game: Games) => {
                        return <div className='col-2 d-flex flex-column categoryBox ' key={game.id}>
                            <h4 className='col-12 text-center my-4 '>{game.genre}</h4>
                            <div className='catImgBox col-12 overflow-hidden'>
                                <img alt='img' src={game.thumbnail} className='img-fluid h-100'/>
                            </div>
                        </div>
                    })}
                </div>
                </div>
            </div>
    </div>
)
}

export default HomeTopCategoriesSection