import { useState, useRef } from "react";
import { RiFileUploadFill } from "react-icons/ri";
import { IoMdSend } from "react-icons/io";
import { uploadUserDocument } from "../../helpers/api-communicator";

const FileInput = () => {
    const [file, setFile] = useState();
    const fileInput = useRef<HTMLInputElement>(null);
    
    const handleSubmit = async (e) => {
       e.preventDefault();
       
       fileInput.current.click()
          
       if(file){
          
          await uploadUserDocument(file);
       }
    }

    return (
        <>
            <div>
                <form encType="multipart/form-data">
                    {/* Attach the ref to the file input */}
                    <input
                        type="file"
                        style={{ display: "none" }}
                        onChange={(e) => {
                            if (e.target.files) {
                                setFile(e.target.files[0]);
                            }
                        }}
                        ref={fileInput}
                    />
                </form>
                <button type="button" className="btn-0" onClick={handleSubmit}>
                    <RiFileUploadFill style={{ width: '32px', height: '32px' }} />
                </button>
            </div>
            <div className="text-and-button-container">
                <textarea
                    name=""
                    id="indexTextarea"
                    cols={80}
                    rows={1}
                    placeholder=""
                ></textarea>
                <sup>
                    <button type="submit" className="btn-1">
                        <IoMdSend style={{ width: '32px', height: '32px' }} />
                    </button>
                </sup>
            </div>
        </>
    );
};

export default FileInput;
