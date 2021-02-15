import { showPopup } from '../features/popupSlice';
import logo from 'Img/logo.svg';
import { useDispatch } from 'react-redux';
import { UploadPhotoPopup } from 'Components/Popups/UploadPhotoPopup';
import { uploadPhoto } from 'Core/Main.connector';

export default function Header() {
    const dispatch = useDispatch();

    async function uploadFile(files: Array<File>) {
        //TODO: obsluga bledow
        //TODO: przeniesc do seriwsu
        const errs = [];
        const formData = new FormData();
        const types = ['image/png', 'image/jpeg', 'image/gif'];
        const file = files[0];

        if (types.every((type) => file.type !== type)) {
            errs.push(`'${file.type}' is not a supported format`);
        }

        if (file.size > 150000) {
            errs.push(`'${file.name}' is too large, please pick a smaller file`);
        }
        formData.append('file', file);
        //TODO: try/catch
        await uploadPhoto(formData);
    }

    return (
        <header className="header">
            <div className="flexbox">
                <img src={logo} alt="My unpslash" className="header__logo" />
                <input type="text" className="header__search" placeholder="Search by name" />
            </div>
            <button
                className="header__add-btn"
                onClick={() => {
                    dispatch(showPopup(<UploadPhotoPopup uploadFile={uploadFile} />));
                }}>
                Add photo
            </button>
        </header>
    );
}
