import { showPopup } from 'Features/popupSlice';
import logo from 'Img/logo.svg';
import { useDispatch } from 'react-redux';
import { UploadPhotoPopup } from 'Components/Popups/UploadPhotoPopup';

interface IProps {
    searchImages: Function;
}

export default function Header({ searchImages }: IProps) {
    const dispatch = useDispatch();

    return (
        <header className="header">
            <div className="flexbox">
                <img src={logo} alt="My unpslash" className="header__logo" />
                <input
                    type="text"
                    className="header__search"
                    placeholder="Search by tags"
                    onChange={(e) => searchImages(e.target.value)}
                />
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
