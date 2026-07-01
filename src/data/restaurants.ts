export type Restaurant = {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
};

export const restaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Dominos',
    price: '$12',
    description: 'Fast pizza favorites for quick meals and casual nights in.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: '2',
    name: 'Burger King',
    price: '$10',
    description: 'Classic burgers, fries, and flame-grilled comfort food.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: '3',
    name: 'Pizza Hut',
    price: '$14',
    description: 'Pan pizza, pasta, and easy family-friendly takeout.',
    image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: '4',
    name: 'Subway',
    price: '$9',
    description: 'Fresh sandwiches and customizable subs made to order.',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: '5',
    name: 'KFC',
    price: '$11',
    description: 'Crispy fried chicken and hearty meal combos.',
    image: 'https://images.unsplash.com/photo-1569058242259-92d1a6c1fef2?auto=format&fit=crop&w=900&q=80',
  },
];