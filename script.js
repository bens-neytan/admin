<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<script>
    emailjs.init("YVX3NDE_KIHfNBZ1a");

    document.getElementById('registration-form').addEventListener('submit', function(event) {
        event.preventDefault();

        console.log("Submit button clicked!");

        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const accountType = document.querySelector('input[name="account-type"]:checked')?.value || "Not selected";
        const profilePicture = document.getElementById('profile-picture').files[0]?.name || 'No file uploaded';
        const age = document.getElementById('age').value;
        const referrer = document.getElementById('referrer').value;
        const bio = document.getElementById('bio').value;

        console.log("Form Data Collected:", { firstName, lastName, email, password, accountType, profilePicture, age, referrer, bio });

        console.log("EmailJS Object:", emailjs);

        emailjs.send("service_bntc24", "template_bntc24", {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            account_type: accountType,
            referrer: referrer,
            bio: bio,
            profile_picture: profilePicture,
            age: age
        }).then(function(response) {
            console.log("Email sent successfully!", response);
            alert("Registration successful! Check your email.");
            document.getElementById("registration-form").reset();
        }).catch(function(error) {
            console.error("EmailJS Error:", error);
            alert("Email failed to send. Please try again.");
        });
    });
</script>
