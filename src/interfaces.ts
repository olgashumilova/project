import { ReactNode } from "react";

export interface IProps {
    children: ReactNode;
}
  
export interface IState {
  hasError: boolean;
}

export interface IGamesArray {
    id: number,
    name: string,
    ageLimit: string,
    rating: number,
    image: string,
    description: string,
    price: number,
}