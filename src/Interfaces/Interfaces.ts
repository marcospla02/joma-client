export interface Products {
  _id?: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  enabled: boolean;
  image: Image;
}

export interface Users {
  _id: string;
  name: string;
  favorites: Products[];
  cart: Products[];
  admin: boolean;
  picture: string;
}

export interface Image {
  name: string;
  url: string;
}
