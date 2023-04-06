export interface Products {
  _id?: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  enabled: boolean;
  image: Image;
  category: Categories;
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

export interface Categories {
  name: string;
}
export interface Info {
  info: Products[];
}
