import { ILocalImageResponse } from 'Core/Interfaces';

interface IProps {
    image: ILocalImageResponse;
}

export default function ImageCard({ image }: IProps) {
    return (
        <div className="single-image">
            <img src={image.url} alt={image.tags[0]} />
            <div className="single-image__description">
                {image.tags.map((tag) => (
                    <span className="single-image__description-label">{tag}</span>
                ))}
            </div>
        </div>
    );
}
