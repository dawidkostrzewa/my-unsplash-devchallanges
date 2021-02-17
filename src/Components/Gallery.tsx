import { fetchPhotos, galleryPhotos, isGalleryLoading } from 'Features/gallerySlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ImageList from './ImageList';
import { Spinner } from './Spinner';

export default function Gallery() {
    const dispatch = useDispatch();
    const galleryPhotosSelector = useSelector(galleryPhotos);
    const isGalleryLoadingSelector = useSelector(isGalleryLoading);

    useEffect(() => {
        dispatch(fetchPhotos());
    }, [dispatch]);

    if (isGalleryLoadingSelector) {
        return <Spinner />;
    }
    return (
        <div className="gallery">
            <ImageList images={galleryPhotosSelector || []} />
        </div>
    );
}
