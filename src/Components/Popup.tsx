import { isPopupShown } from '../features/popupSlice';
import { useSelector } from 'react-redux';

export default function Popup(): JSX.Element {
    const isShown = useSelector(isPopupShown);
    if (!isShown) {
        return null;
    }

    return (
        <div className="popup">
            <div className="popup__content">aaa</div>
        </div>
    );
}
