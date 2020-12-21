import { IImageResponse } from 'Core/Interfaces';

interface IProps {
    image: IImageResponse;
}

export default function ImageCard({ image }: IProps) {
    return (
        <div className="single-image">
            <img src={image.urls.regular} alt={image.alt_description} />
        </div>
    );
}
