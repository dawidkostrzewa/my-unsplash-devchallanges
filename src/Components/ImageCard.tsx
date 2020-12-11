import { IImageResponse } from 'Core/Interfaces';
import { useEffect, useRef, useState } from 'react';

interface IProps {
    image: IImageResponse;
}

export default function ImageCard({ image }: IProps) {
    const imageRef = useRef<HTMLImageElement>();
    const [spans, setSpans] = useState(0);
    function setImgSpans() {
        const height = imageRef.current.clientHeight;
        const currentSpans = Math.ceil(height / 200);
        setSpans(currentSpans);
    }

    useEffect(() => {
        setImgSpans();
    }, []);

    return (
        <div style={{ gridRowEnd: `span ${spans}` }}>
            <img ref={imageRef} src={image.urls.regular} alt={image.alt_description} />
        </div>
    );
}
