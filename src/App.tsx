import Gallery from 'Components/Gallery';
import Header from 'Components/Header';
import Popup from 'Components/Popup';
import { Spinner } from 'Components/Spinner';
import { isSpinnerShown } from 'Features/spinnerSlice';
import React from 'react';
import { useSelector } from 'react-redux';
function App() {
    const showSpinner = useSelector(isSpinnerShown);

    return (
        <>
            <Header />
            <Gallery />
            <Popup />
            {showSpinner && <Spinner />}
        </>
    );
}

export default App;
