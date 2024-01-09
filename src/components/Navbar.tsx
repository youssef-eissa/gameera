import './navbar.css'
import { StyledLink } from './StyledComponents/Link.style'
import Menu from './antd/Menu'
import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router'
function Navbar() {
    const navigate=useNavigate()

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (MenuRef.current && window.scrollY > window.innerHeight) {
                MenuRef.current.style.position = 'fixed'
                MenuRef.current.style.left = '96%'
                MenuRef.current.style.bottom = '50%'
                MenuRef.current.style.zIndex = '1000'
                MenuRef.current.style.backgroundColor = 'rgb(1 113 249 / 30%)'
                MenuRef.current.style.width = '48px'
                MenuRef.current.style.height = '48px'
                MenuRef.current.style.color = 'white'

        } else if(MenuRef.current && window.scrollY < window.innerHeight) {
            MenuRef.current.style.position = 'absolute'
            MenuRef.current.style.left = '50%'
            MenuRef.current.style.bottom = '-14px'
            MenuRef.current.style.backgroundColor = 'transparent'
        }
    })
    })
    
    const MenuRef=useRef<HTMLDivElement>(null)
    return (
        <div className='container-fluid '>
            <div className='row'>
                <div className='col-12 navbar d-flex '>
                    <div className='ps-3 col-6 logo d-flex align-items-center'>
                        <div className='d-flex align-items-center' onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                            Gam<span>E</span>ra
                        </div>
                    </div>
                    <div className='col-6 navInfo d-flex '>
                        <div className='col-6  d-flex justify-content-center'>
                            <StyledLink to='mailto:Gamera@mail.com'>Gamera@mail.com</StyledLink>
                        </div>
                        <div className='col-6 d-flex justify-content-center'>
                        Call Us : <StyledLink className='ms-1' to='tel:123456789'>123-456-7890 </StyledLink>
                        </div>
                    </div>
                    <div ref={MenuRef} className='menu'> <Menu/></div>
                </div>
            </div>
    </div>
)
}

export default Navbar