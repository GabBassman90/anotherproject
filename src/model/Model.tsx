export type NavbarProps = {
  title: string;
};

export type TheContextType = {
  darkMode: boolean;
  toogleDarkMode: () => void;
};

export type Model = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
};

export type Rating = {
  rate: number;
  count: number;
};
