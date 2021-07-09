export interface Product {
    id: string;
    name: string;
    description: string;
    image_url: string;
    slug: string;
    price: number;
    created_at: string;
}

export const products: Product[] = [
    {
        id: 'uuid',
        name: 'produto teste',
        description: 'muito muito texto',
        price: 50.50,
        image_url: 'https://source.unsplash.com/random?product,' + Math.random(),
        slug: 'produto-teste',
        created_at: '2021-06-06T00:00:00'
    },

    {
        id: 'uuid2',
        name: 'produto teste222',
        description: 'muito muito texto222',
        price: 50.52,
        image_url: 'https://source.unsplash.com/random?product,' + Math.random(),
        slug: 'produto-teste222',
        created_at: '2021-06-06T00:00:00'
    }
]