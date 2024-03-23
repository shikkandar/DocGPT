import React, { useState, useRef, useEffect } from "react";
import { SiAddthis } from "react-icons/si";
import { IoMdSend } from "react-icons/io";
import { uploadUserDocument } from "../../helpers/api-communicator";
import { sendUserMessage } from "../../helpers/api-communicator";
import { useChat } from "../../contexts/ChatContext";
import { generateUniqueID } from "../../helpers/uuid";
import { useParams } from "react-router";

const FileInput: React.FC = () => {
    const [file, setFile] = useState();
    const fileInput = useRef<HTMLInputElement>(null);
    const messageInput = useRef<HTMLTextAreaElement>(null);
    const chat = useChat();
    const { chatID } = useParams();

    const handleFileSubmit = (e) => {
        e.preventDefault();
        
        fileInput.current.click();
    }
    
    const handleFileInputChange = async (e) => {
        const selectedFile = e.target.files[0];
    
        if (selectedFile) {
            await uploadUserDocument(selectedFile, chat.chatID);
        }
    }
    const handleMessageSubmit = async (e) => {
        e.preventDefault();
        console.log(messageInput.current?.value)
        const message = {
            role: 'user',
            content: messageInput.current?.value
        }
        console.log(message);
        chat.pushUserMessagesToConversation(message);
        const userChat = await sendUserMessage(messageInput.current?.value, chatID)
        chat.updateUserMessageWithOpenAIResponse(userChat.conversation);
        chat.updateUserPdfUrl(userChat.pdfSecureUrl);
    }

    return (
        <>
            <div>
                <form encType="multipart/form-data">
                    {/* Attach the ref to the file input */}
                    <input
                        type="file"
                        style={{ display: "none" }}
                        onChange={handleFileInputChange}
                        ref={fileInput}
                    />
                </form>
                <button type="button" className="btn-0" onClick={handleFileSubmit}>
                    <SiAddthis style={{ width: '32px', height: '32px' }} />
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
