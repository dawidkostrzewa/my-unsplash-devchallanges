import { IImageResponse, ILocalImageResponse } from 'Core/Interfaces';

interface IProps {
    image: ILocalImageResponse;
}

export default function ImageCard({ image }: IProps) {
    return (
        <div className="single-image">
            <img src={image.url} alt={image.tags[0]} />
        </div>
    );
}
