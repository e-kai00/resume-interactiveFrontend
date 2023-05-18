function sendMail(contactForm) {
    emailjs.send("service_24muon7","rosy_project",{
        "from_name": contactForm.name.value,        
        "message": contactForm.projectsummary.value,
        "from_email": contactForm.emailaddress.value
        })

    .then(
        function(response) {
            console.log('Success!', response);
        },
        function(error) {
            console.log('Failed', error);
        }
    );
    return false; 
}