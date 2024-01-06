import Landing from "./Landing"
import { Games } from "./types/types"
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import './Landing.css'




type IHomeProps = {
    games: Games[]
}

function Home({games}: IHomeProps) {
return (
    <>
        <Landing games={games} />
        <div className="arrow">
        <KeyboardDoubleArrowDownIcon sx={{color: '#003366'}} fontSize="large" />

        </div>
    </>
)
}

export default Home