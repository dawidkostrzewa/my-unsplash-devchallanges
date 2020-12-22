import { IImageResponse } from 'Core/Interfaces';
import ImageCard from './ImageCard';

interface IProps {
    images: Array<IImageResponse>;
}

export default function ImageList({ images }: IProps) {
    const imagesList = images.map((singleImage) => {
        return <ImageCard key={singleImage.id} image={singleImage} />;
    });

    return <div className="image-list">{imagesList}</div>;
}
