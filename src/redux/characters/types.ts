export type CharactersResponseType = {
    filter: FilterCharactersType
    info: InfoType
    results: CharacterType[]
}

export type InfoType = {
    count: number
    pages: number
    next: string
    prev: null
}

export type CharacterType = {
    id: string
    name: string
    status: StatusType
    species: string
    type: string
    gender: GenderType
    origin: OriginAndLocationType
    location: OriginAndLocationType
    image: string
    episode: string[]
    url: string
    created: string
}

export type StatusType = 'Alive' | 'Dead' | 'unknown'
export type GenderType = 'Female' | 'Male' | 'Genderless' | 'unknown'
export type OriginAndLocationType = {
    name: string
    url: string
}

export type FilterCharactersType = {
    page?: number
    name?: string
    status?: 'alive' | 'dead' | 'unknown'
    species?: string
    type?: string
    gender?: 'female' | 'male' | 'genderless' | 'unknown'
}
