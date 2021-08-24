export interface IUserProfile {
    id: number;
    login: string,
    isSignedUp: boolean,
    password: string,
}

export interface IProductsArray {
    id: number,
    name: string,
    ageLimit: number,
    rating: number,
    price: number,
    genre: string,
    platform: { string: string },
    image: string,
    description: string,
    amount: 1
}

export interface IGame {
    id: number,
    name: string,
    ageLimit: number,
    rating: number,
    price: number,
    genre: string,
    platform: { string: string },
    image: string,
    description: string,
    amount: 1
}
