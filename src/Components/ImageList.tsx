import { ILocalImageResponse } from 'Core/Interfaces';
import ImageCard from './ImageCard';

interface IProps {
    images: Array<ILocalImageResponse>;
}

export default function ImageList({ images }: IProps) {
    const imagesList = images.map((singleImage) => {
        return <ImageCard key={singleImage.filename} image={singleImage} />;
    });

    return <div className="image-list">{imagesList}</div>;
}
