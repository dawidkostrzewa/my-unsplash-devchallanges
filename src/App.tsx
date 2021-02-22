import Gallery from 'Components/Gallery';
import Header from 'Components/Header';
import Popup from 'Components/Popup';
import { Spinner } from 'Components/Spinner';
import { fetchPhotos, galleryPhotos } from 'Features/gallerySlice';
import { isSpinnerShown } from 'Features/spinnerSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
function App() {
    const showSpinner = useSelector(isSpinnerShown);
    const dispatch = useDispatch();
    const galleryPhotosSelector = useSelector(galleryPhotos);

    const [filterPhrase, setFilterPhrase] = useState<string>('');

    useEffect(() => {
        dispatch(fetchPhotos());
    }, [dispatch]);

    function searchImages(filter: string) {
        setFilterPhrase(filter);
    }

    const images = galleryPhotosSelector.filter((item) => item.tags.toString().includes(filterPhrase));

    return (
        <>
            <Header searchImages={searchImages} />
            <Gallery images={images} />
            <Popup />
            {showSpinner && <Spinner />}
        </>
    );
}

export default App;
