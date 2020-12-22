import { fetchUnsplashPhotos } from 'Core/Main.connector';
import { useQuery } from 'react-query';
import ImageList from './ImageList';

export default function Gallery() {
    const { isLoading, error, data } = useQuery('unsplashPhotos', fetchUnsplashPhotos);

    if (isLoading) return <div>IS loading</div>;
    if (error) return <div>COś poszło nie tak</div>;
    return (
        <div className="gallery">
            <ImageList images={data} />
        </div>
    );
}
