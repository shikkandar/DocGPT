import formData from 'form-data';
import  Mailgun  from 'mailgun.js';
const mailgun = new Mailgun(formData);
const mg = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY || 'cc3b1536639060417abc475611e88231-4b98b89f-232e6cf0'});

mg.messages.create('sandbox-123.mailgun.org', {
	from: "Excited User <mailgun@sandbox-123.mailgun.org>",
	to: ["akashsah956@gmail.com"],
	subject: "Hello",
	text: "Hi, I am DocGPT. Saying Hi from Mann's planet",
	html: "<h1>Testing some Mailgun awesomeness!</h1>"
})
.then(msg => console.log(msg)) // logs response data
.catch(err => console.log(err)); // logs any error