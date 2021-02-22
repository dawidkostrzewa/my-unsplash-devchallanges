import { uploadPhotoFile } from 'Core/App.service';
import { fetchPhotos } from 'Features/gallerySlice';
import { hideSpinner, showSpinner } from 'Features/spinnerSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export function UploadPhotoPopup(): JSX.Element {
    const [files, setFiles] = useState<Array<File>>([]);
    const [isUploaded, setIsUploaded] = useState<boolean>();
    const [errors, setErrors] = useState<string[]>([]);
    const [tags, setTags] = useState<string>(null);
    const dispatch = useDispatch();

    function chooseFileLabel() {
        if (files.length > 0) {
            return files[0].name;
        } else {
            return 'Choose a file...';
        }
    }

    async function send() {
        dispatch(showSpinner());
        const result = await uploadPhotoFile(files, tags);
        if (typeof result == 'boolean') {
            setIsUploaded(result);
            dispatch(fetchPhotos());
            setErrors([]);
        } else {
            setErrors(result);
        }
        dispatch(hideSpinner());
    }

    return (
        <div className="uploadPhotoPopup">
            <header className="uploadPhotoPopup__header">Add a new photo</header>
            <input
                type="text"
                className="uploadPhotoPopup__tags"
                placeholder="Tags (ex. cat, animal )"
                onChange={(e) => setTags(e.target.value)}
            />
            {errors.map((err) => (
                <div>{err}</div>
            ))}
            {files.length > 0 && !isUploaded && (
                <img className="uploadPhotoPopup__photo-preview" src={URL.createObjectURL(files[0])} alt="" />
            )}
            {!isUploaded ? (
                <div className="uploadPhotoPopup__upload">
                    <input
                        type="file"
                        name="file"
                        id="file"
                        className="uploadPhotoPopup__inputfile"
                        onChange={(e) => {
                            setErrors([]);
                            setFiles(e.target.files as any);
                        }}
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
