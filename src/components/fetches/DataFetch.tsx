import axios from "axios";

export function GamesData() {
    return axios.get('https://free-to-play-games-database.p.rapidapi.com/api/games', {
        headers: {
        'X-RapidAPI-Key': 'bd5bd0e351mshe0b55c617d771c6p12249djsn8276a5c7dce4',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        },
        
    })
}