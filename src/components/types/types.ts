export type Games = {
    developer: string
    freetogame_profile_url: string
    game_url: string
    id: number
    platform: string
    publisher: string
    release_date: string
    short_description: string
    thumbnail: string
    title: string
    genre:string

}

export type Game = {
    description: string
    developer: string
    freetogame_profile_url: string
    game_url: string
    genre: string
    id: number
    minimum_system_requirements: {
        graphics: string
        memory: string
        os: string
        processor: string
        storage: string
    }
    platform: string
    publisher: string
    release_date: string
    screenshots: {
        id: number
        image:string
    }[]
    short_description: string
    status: string
    thumbnail: string
    title:string
}