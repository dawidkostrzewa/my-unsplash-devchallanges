import { showPopup } from 'Features/popupSlice';
import logo from 'Img/logo.svg';
import { useDispatch } from 'react-redux';
import { UploadPhotoPopup } from 'Components/Popups/UploadPhotoPopup';
import { uploadPhotoFile } from 'Core/App.service';

export default function Header() {
    const dispatch = useDispatch();

    return (
        <header className="header">
            <div className="flexbox">
                <img src={logo} alt="My unpslash" className="header__logo" />
                <input type="text" className="header__search" placeholder="Search by name" />
            </div>
            <button
                className="header__add-btn"
                onClick={() => {
                    dispatch(showPopup(<UploadPhotoPopup uploadFile={uploadPhotoFile} />));
                }}>
                Add photo
            </button>
        </header>
    );
}
