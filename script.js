        emailjs.init("user_YVX3NDE_KIHfNBZ1a");

        document.getElementById('registration-form').addEventListener('submit', function(event) {
            event.preventDefault();

            const firstName = document.getElementById('first-name').value;
            const lastName = document.getElementById('last-name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const accountType = document.querySelector('input[name="account-type"]:checked').value;
            const profilePicture = document.getElementById('profile-picture').files[0]?.name || 'No file uploaded';
            const age = document.getElementById('age').value;
            const referrer = document.getElementById('referrer').value;
            const bio = document.getElementById('bio').value;

            const templateParams = {
                first_name: firstName,
                last_name: lastName,
                email: email,
                password: password,
                account_type: accountType,
                profile_picture: profilePicture,
                age: age,
                referrer: referrer,
                bio: bio,
            };

            emailjs.send("service_bntc24", "template_bnc24", templateParams)
                .then(function(response) {
                    console.log("Success!", response);
                    alert("Registration successful! We will get back to you soon.");
                }, function(error) {
                    console.log("Error", error);
                    alert("There was an error processing your registration. Please try again.");
                });
        });
    </script>