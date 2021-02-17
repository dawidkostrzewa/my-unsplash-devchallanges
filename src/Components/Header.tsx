import { showPopup } from 'Features/popupSlice';
import logo from 'Img/logo.svg';
import { useDispatch } from 'react-redux';
import { UploadPhotoPopup } from 'Components/Popups/UploadPhotoPopup';

export default function Header() {
    const dispatch = useDispatch();

    return (
        <header className="header">
            <div className="flexbox">
                <img src={logo} alt="My unpslash" className="header__logo" />
                <input type="text" className="header__search" placeholder="Search by tags" />
            </div>
            <button
                className="button"
                onClick={() => {
                    dispatch(showPopup(<UploadPhotoPopup />));
                }}>
                Add photo
            </button>
        </header>
    );
}
