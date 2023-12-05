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
const formSubmit = document.getElementById('form_data');
const indexTextArea = document.getElementById('indexTextarea');

console.log(fileInput);
openFileButton.addEventListener('click', () => {
    fileInput.click();
});
let pdfFile;
fileInput.addEventListener('change', (event) => {
    console.log("I am changed");
    pdfFile = event.target.files[0];
    console.log(pdfFile);
    formSubmit.submit();
    console.log("upload successfull");
});

indexTextArea.addEventListener('change', ()=>{
    window.alert('Please feed your document before sending messages');
    indexTextArea.value = '';
});



// async function uploadPDF() {
//     if (!pdfFile) {
//         alert('Please select a PDF file to upload.');
//         return;
//     }

//     const formData = new FormData();
//     formData.append('pdfFile', pdfFile);
//     console.log(formData);
//     try {
//         const response = await fetch('/upload', {
//             method: 'POST',
//             mode: 'cors',
//             cache: 'no-cache',
//             credentials: 'same-origin',
//             body: formData,
//         });

//         if (response.ok) {
//             const result = await response.json();
//             console.log('Upload successful:', result);
//         } else {
//             console.error(
//                 'Upload failed:',
//                 response.status,
//                 response.statusText
//             );
//         }
//         console.log("I am done uploading");
//     } catch (error) {
//         console.error('Error uploading PDF:', error);
//     }
// }
