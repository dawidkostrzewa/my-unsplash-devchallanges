import { uploadPhotoFile } from 'Core/App.service';
import { fetchPhotos } from 'Features/gallerySlice';
import { hideSpinner, showSpinner } from 'Features/spinnerSlice';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

export function UploadPhotoPopup(): JSX.Element {
    const [files, setFiles] = useState<Array<File>>([]);
    const [isUploaded, setIsUploaded] = useState<boolean>();

    const tagsInputRef = useRef<HTMLInputElement>(undefined);

    const dispatch = useDispatch();

    function chooseFileLabel() {
        if (files.length > 0) {
            return files[0].name;
        } else {
            return 'Choose a file...';
        }
    }

    async function send() {
        const tags = tagsInputRef.current.value;
        dispatch(showSpinner());
        const result = await uploadPhotoFile(files, tags);
        setIsUploaded(result);
        if (result) {
            dispatch(fetchPhotos());
        }
        dispatch(hideSpinner());
    }

    return (
        <div className="uploadPhotoPopup">
            <header className="uploadPhotoPopup__header">Add a new photo</header>
            <label>
                Tags:
                <input type="text" ref={tagsInputRef} />
            </label>
            {files.length > 0 && !isUploaded && <img src={URL.createObjectURL(files[0])} alt="" />}
            {!isUploaded ? (
                <div className="uploadPhotoPopup__upload">
                    <input
                        type="file"
                        name="file"
                        id="file"
                        className="uploadPhotoPopup__inputfile"
                        onChange={(e) => setFiles(e.target.files as any)}
                    />
                    <label htmlFor="file">{chooseFileLabel()}</label>
                </div>
            ) : (
                <div className="text-center">Upload succesfully</div>
            )}
            <div>
                <button className="button button--small mt-10" onClick={send}>
                    Upload
                </button>
            </div>
        </div>
    );
}
