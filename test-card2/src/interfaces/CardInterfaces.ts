export interface CardItem {
  id: number;
  title: string;
  desc: string;
  imgSrc: string;
  details: {
    name: string;
    age: string;
  };
}

export interface PropsListCard {
  data: CardItem[];
}
