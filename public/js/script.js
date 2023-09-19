function showAndCloseSideBar() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('showSideBar');
}
const onEmailClick = document.getElementById('on_email_click');

function emailClick() {
    onEmailClick.classList.toggle('remove-on-email-click');
}

const openFileButton = document.getElementById('open_file_button');
const fileInput = document.getElementById('input_file');

openFileButton.addEventListener('click', () => {
    fileInput.click();
});
let pdfFile;
fileInput.addEventListener('change', (event) => {
    pdfFile = event.target.files[0];
    console.log(pdfFile);
    uploadPDF();
});

async function uploadPDF() {
    if (!pdfFile) {
        alert('Please select a PDF file to upload.');
        return;
    }

    const formData = new FormData();
    formData.append('pdfFile', pdfFile);

    try {
        const response = await fetch('/doc/upload', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            body: formData,
        });

        if (response.ok) {
            const result = await response.json();
            console.log('Upload successful:', result);
        } else {
            console.error(
                'Upload failed:',
                response.status,
                response.statusText
            );
        }
    } catch (error) {
        console.error('Error uploading PDF:', error);
    }
}
