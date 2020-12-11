import { useQuery } from 'react-query';
import ImageList from './ImageList';

export default function Gallery() {
    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch('https://api.unsplash.com/photos?per_page=200', {
            headers: new Headers({
                Authorization: 'Client-ID s9wD7hODYsWP9q6RDighZ95f4nXmFhlmww4-pV5fC6k'
            })
        }).then((res) => res.json())
    );

    if (isLoading) return <div>IS loading</div>;
    if (error) return <div>Is error</div>;
    return (
        <div className="gallery">
            <ImageList images={data} />
        </div>
    );
}
