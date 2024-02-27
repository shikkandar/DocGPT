import { useState } from 'react'
import { Document, Page } from 'react-pdf';
import { useChat } from '../contexts/ChatContext';
const PdfViewer = () => {
    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(1);
    const chat = useChat();

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
    }

    return (
        <div>
            <Document file={chat.pdfSecureUrl} onLoadSuccess={onDocumentLoadSuccess}>
                <Page  pageNumber={pageNumber} renderTextLayer = {false} renderAnnotationLayer = {false}/>
            </Document>
            <p>
                Page {pageNumber} of {numPages}
            </p>
        </div>
    );
}

export default PdfViewer