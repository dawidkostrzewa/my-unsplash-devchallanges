import { useState } from 'react';

interface IProps {
    uploadFile: (files: Array<File>) => void;
}

export function UploadPhotoPopup({ uploadFile }: IProps): JSX.Element {
    const [files, setFiles] = useState<Array<File>>([]);
    return (
        <div>
            <label>
                Upload photo <input type="file" onChange={(e) => setFiles(e.target.files as any)} />
            </label>
            <button onClick={() => uploadFile(files)}>Upload</button>
        </div>
    );
}
