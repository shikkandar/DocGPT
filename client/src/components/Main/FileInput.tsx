import { useState, useRef } from "react";
import { RiFileUploadFill } from "react-icons/ri";
import { IoMdSend } from "react-icons/io";
import { uploadUserDocument } from "../../helpers/api-communicator";
import { sendUserMessage } from "../../helpers/api-communicator";

const FileInput = () => {
    const [file, setFile] = useState();
    const fileInput = useRef<HTMLInputElement>(null);
    const messageInput = useRef<HTMLTextAreaElement>(null);

    const handleFileSubmit = async (e) => {
        e.preventDefault();

        fileInput.current.click()

        if (file) {

            await uploadUserDocument(file);
        }
    }
    const handleMessageSubmit = async (e) => {
        e.preventDefault();
        console.log(messageInput.current?.value)
        await sendUserMessage(messageInput.current?.textContent)
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
                <button type="button" className="btn-0" onClick={handleFileSubmit}>
                    <RiFileUploadFill style={{ width: '32px', height: '32px' }} />
                </button>
            </div>
            <div className="text-and-button-container">
                <form>
                    <textarea
                        ref={messageInput}
                        name=""
                        id="indexTextarea"
                        cols={80}
                        rows={1}
                        placeholder=""
                    ></textarea>
                    <sup>
                        <button type="submit" className="btn-1" onClick={handleMessageSubmit}>
                            <IoMdSend style={{ width: '32px', height: '32px' }} />
                        </button>
                    </sup>
                </form>

            </div>
        </>
    );
};

export default FileInput;
