export interface CoffeeProps {
    imageSRC: string;
    coffee: {
        name: string;
        description: string;
        prepareTime?: number;
    }
    imageSIZE?: number;
}