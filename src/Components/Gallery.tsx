import { ILocalImageResponse } from 'Core/Interfaces';
import { isGalleryLoading } from 'Features/gallerySlice';
import { useSelector } from 'react-redux';
import ImageList from './ImageList';
import { Spinner } from './Spinner';

interface IProps {
    images: ILocalImageResponse[];
}

export default function Gallery({ images }: IProps) {
    const isGalleryLoadingSelector = useSelector(isGalleryLoading);

    if (isGalleryLoadingSelector) {
        return <Spinner />;
    }
    return (
        <div className="gallery">
            <ImageList images={images || []} />
        </div>
    );
}
