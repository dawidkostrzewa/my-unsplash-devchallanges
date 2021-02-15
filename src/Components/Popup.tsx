import { isPopupShown, popupContent, hidePopup } from '../features/popupSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Popup(): JSX.Element {
    const isShown = useSelector(isPopupShown);
    const content = useSelector(popupContent);
    const dispatch = useDispatch();
    if (!isShown) {
        return null;
    }

    return (
        <div className="popup">
            <div className="popup__container">
                <button className="popup__close" onClick={() => dispatch(hidePopup())}>
                    X
                </button>
                <div>{content}</div>
            </div>
        </div>
    );
}
