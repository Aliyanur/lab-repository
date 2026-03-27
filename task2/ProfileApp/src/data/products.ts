export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    image: string;
  }
  
  export const products: Product[] = [
    {
      id: '1',
      name: 'Headphones',
      description: 'Good sound',
      price: 199,
      category: 'Electronics',
      image: 'https://png.pngtree.com/png-vector/20250703/ourmid/pngtree-black-headphones-sleek-3d-render-png-image_16600605.webp',
    },
  ];