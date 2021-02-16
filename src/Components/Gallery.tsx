import { fetchAllCloudinaryPhotos } from 'Core/Main.connector';
import { useQuery } from 'react-query';
import ImageList from './ImageList';

export default function Gallery() {
    // const { isLoading, error, data } = useQuery('unsplashPhotos', fetchUnsplashPhotos);
    const { isLoading, error, data } = useQuery('cloudinaryPhotos', fetchAllCloudinaryPhotos);

    if (isLoading) return <div>IS loading</div>;
    if (error) return <div>Coś poszło nie tak</div>;
    return (
        <div className="gallery">
            <ImageList images={data.resources} />
        </div>
    );
}
