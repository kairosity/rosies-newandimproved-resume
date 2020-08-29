function sendMail(contactForm) {
    emailjs.send("gmail", "rosies_template", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectssummary.value
    })
    .then(
        function(response){
            console.log("SUCCESS!", response);
        },
        function(error){
            console.log("FAILED", error);
        });
    return false;
}

//doesn't work on GitPod?

//getting a 501 error.