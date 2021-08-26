import ACTION_TYPES from '../redux/const/actionTypes'

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

// State types 

export interface IState {
  products: Array<IGame>;
  userProfile: IUserProfile[];
  authUser: null | IUserProfile;
  isSignedIn: boolean;
  filteredProducts: Array<IGame>;
  cart: Array<IGame>;
  totalQuantity: number;
  currentGameCard: null | IGame;
}

// Actions

export type TSetUser = {
    type: string,
    payload: IUserProfile,
}

export type TGetUser = {
    type: string,
    payload: IUserProfile,
}
  
export type TIsSignedIn = {
  type: string,
  payload: boolean,
}

export type TGetProductsArray = {
  type: string,
  payload: Array<IGame>,
}

export type TLoginSuccessAction = {
  type: string,
  payload: IUserProfile,
}

export type TAddGameToProductsArray = {
  type: string,
  payload: IGame,
}

export type TGetFilteredProducts = {
    type: string,
    payload: Array<IGame>,
}

export type TGetCurrentGameCard = {
    type: string,
    payload: IGame,
}

export type TAddItemToCart = {
    type: string,
    payload: IGame,
}

export type TRemoveItemFromCart = {
    type: string,
    payload: number,
}
  
export type TActions = (
    TSetUser |
    TGetUser |
    TIsSignedIn |
    TGetProductsArray |
    TLoginSuccessAction |
    TAddGameToProductsArray |
    TGetFilteredProducts |
    TGetCurrentGameCard |
    TAddItemToCart |
    TRemoveItemFromCart
)