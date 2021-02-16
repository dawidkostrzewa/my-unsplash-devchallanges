import { fetchAllCloudinaryPhotos } from 'Core/Main.connector';
import { useQuery } from 'react-query';
import ImageList from './ImageList';
import { Spinner } from './Spinner';

export default function Gallery() {
    const { isLoading, error, data } = useQuery('cloudinaryPhotos', fetchAllCloudinaryPhotos);

    if (isLoading) {
        return <Spinner />;
    }
    if (error) return <div>Something went wrong</div>;
    return (
        <div className="gallery">
            <ImageList images={data?.resources || []} />
        </div>
    );
}
