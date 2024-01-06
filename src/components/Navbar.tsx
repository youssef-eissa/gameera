import './navbar.css'
import { StyledLink } from './StyledComponents/Link.style'
import Menu from './antd/Menu'
function Navbar() {
    return (
        <div className='container-fluid '>
            <div className='row'>
                <div className='col-12 navbar  d-flex '>
                    <div className=' ps-3 col-6 logo d-flex align-items-center'>Gam<span>E</span>ra</div>
                    <div className='col-6 navInfo d-flex '>
                        <div className='col-6  d-flex justify-content-center'>
                            <StyledLink to='mailto:Gamera@mail.com'>Gamera@mail.com</StyledLink>
                        </div>
                        <div className='col-6 d-flex justify-content-center'>
                        Call Us : <StyledLink className='ms-1' to='tel:123456789'>123-456-7890 </StyledLink>
                        </div>
                    </div>
                    <div className='menu'> <Menu/></div>
                </div>
            </div>
    </div>
)
}

export default Navbar