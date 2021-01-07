const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SEND_GRID_API_KEY);
const templates = {
  welcome: 'd-3da7f24fa4e04cc9924b9be63229f875',
  emailValidation: 'd-604e096f7397496180f2666d2e07a5a1',
  changePwd: 'd-84e1ea26a6a448128738c5f323648a11',
};
export default function sendEmail(data) {
  const msg = {
    //extract the email details
    to: 'lemercier60@gmail.com',
    from: data.email,
    subject: data.subject,
    templateId: templates[data.templateName],
    //extract the custom fields
    dynamic_template_data: {
      name: data.name,
    },
  };
  //send the email
  (async () => {
    try {
      await sgMail.send(msg);
      console.log(msg);
    } catch (error) {
      console.error(error);
    }
  })();
}
// sendEmail({ name: 'Christophe', templateName: 'changePwd' });
