let chat_box = document.getElementById('chat_box');
// function onMessageSubmit(event) {

//     let textareaContent = document.getElementById('usermessage').value;
//     let p = document.createElement('p').innerHTML;
//     p = `<strong>user/    </strong> ${textareaContent}`;
//     chat_box.appendChild(p);

//     // Make an HTTP GET request to your backend endpoint
//     fetch('/home/chat') // Replace with the actual endpoint URL
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json(); // Parse the JSON response
//         })
//         .then((data) => {
//             // Handle the JSON data in the frontend
//             console.log(data);
//             p=`<strong>model/</strong>${data}`;
//             chat_box.appendChild(p);
//             // Now you can use the JSON data in your frontend application
//             // For example, you can update the DOM with the data
//             // Example: document.getElementById('result').textContent = data.reply;
//         })
//         .catch((error) => {
//             console.error(
//                 'There was a problem with the fetch operation:',
//                 error
//             );
//         });
// }
function appendMessageToChat(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('model');
    messageElement.innerHTML = message;
    chat_box.append(messageElement);
    chat_box.scrollTop = chat_box.scrollHeight; // Scroll to the bottom of the chat
}
document
    .getElementById('messageForm')
    .addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default form submission

        const usermessage = document.getElementById('usermessage').value;
        
        let p = document.createElement('p');
        p.classList.add('user');
        p.innerHTML = `<strong>user/</strong> ${usermessage}`;
        chat_box.append(p);
        chat_box.scrollTop = chat_box.scrollHeight;

        // Make a POST request to the backend with the user's message
        // Create an XMLHttpRequest object
      const xhr = new XMLHttpRequest();

      // Configure the POST request
      xhr.open('POST', '/home/chat', true);
      xhr.setRequestHeader('Content-Type', 'application/json');

      // Define the callback function to handle the response
      xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            const message = `<p><strong>model:/</strong> ${data.reply}</p>`;
            appendMessageToChat(message);
          } else {
            console.error('Request failed:', xhr.status, xhr.statusText);
          }
        }
      };

      // Send the POST request with the user's message
      xhr.send(JSON.stringify({ message: usermessage }));
    });

