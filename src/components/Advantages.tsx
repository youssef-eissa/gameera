import './Advantages.css'
import { Button } from './StyledComponents/Button.style'
import {useNavigate} from 'react-router-dom'
function Advantages() {
    const navigate=useNavigate()
    return (
        <div className='container-fluid '>
            <div className='row d-flex justify-content-center'>
                <div className='col-10 adv d-flex flex-md-row flex-column justify-content-between column-gap-5'>
                    <div className='col-md-5 col-12 rounded leftAdv mb-md-0 mb-4 d-flex flex-column p-5 '>
                        <h6 className='col-12'>Play Free</h6>
                        <h1 className='col-10'>Enjoy with large number of free online games </h1>
                        <p className='col-12'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, sapiente sint maxime et doloribus pariatur porro quo quos obcaecati nemo. Nihil libero vel optio voluptas quasi. Doloribus necessitatibus dolore alias!</p>

                        <Button onClick={() => { navigate('/games'); window.scrollTo(0, 0)}} className='col-md-3 col-6 p-2'>Play Now</Button>
                    </div>
                    <div className='col-md-5 col-12 rounded leftAdv d-flex flex-column p-5'>
                        <h6 className='col-12'>unlimited games</h6>
                        <h1 className='col-10'>Enjoy with large number of free online games </h1>
                        <p className='col-12'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, sapiente sint maxime et doloribus pariatur porro quo quos obcaecati nemo. Nihil libero vel optio voluptas quasi. Doloribus necessitatibus dolore alias!</p>
                        <Button onClick={() => { navigate('/games'); window.scrollTo(0, 0)}} className='col-md-3 col-6 p-2 d-flex ms-auto justify-content-center'>Play Now</Button>

                    </div>
                    <div className='midImg rounded overflow-hidden'>
                        <img src={ require('./assets/Lugx Gaming Shop HTML5 Template_files/top-game-02.jpg')} className='img-fluid h-100 w-100' alt='img' />
                    </div>
                </div>
            </div>
    </div>
)
}

export default Advantages