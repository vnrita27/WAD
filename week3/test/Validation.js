function validateForm() {
    // Email Validation
    const email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Invalid Email Format");
        return false;
    }

    // Phone Number Validation
    const phone = document.getElementById("phone").value;
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Phone number must be 10 digits & should start with 9 or 8");
        return false;
    }

    alert("Form is valid!");
    return true;
}