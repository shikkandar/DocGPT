import { useState, useRef } from "react";
import { RiFileUploadFill } from "react-icons/ri";
import { IoMdSend } from "react-icons/io";

const FileInput = () => {
    const [file, setFile] = useState<File | null>(null); 
    const fileInput = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        console.log("I am file click");
        if (fileInput.current) {
            fileInput.current.click(); // Simulate a click on the file input
        }
    };

    return (
        <>
            <div>
                <form>
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
                <button type="button" className="btn-0" onClick={handleClick}>
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
