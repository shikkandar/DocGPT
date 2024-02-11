import { useState } from 'react'
import { Document, Page } from 'react-pdf';
import pdf from "./Yuna's Resume (2).pdf";
const PdfViewer = () => {
    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(1);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
    }

    return (
        <div>
            <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} renderTextLayer = {false} renderAnnotationLayer = {false}/>
            </Document>
            <p>
                Page {pageNumber} of {numPages}
            </p>
        </div>
    );
}

export default PdfViewer