document.getElementById('admissionForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = {
        fullName: document.querySelector('input[placeholder="Enter your full name"]').value,
        fatherName: document.querySelector('input[placeholder="Enter father\'s name"]').value,
        mobile: document.querySelector('input[type="tel"]').value,
        email: document.querySelector('input[type="email"]').value,
        dob: document.querySelector('input[type="date"]').value,
        gender: document.querySelector('select').value,
        address: document.querySelector('input[placeholder="Complete address with city and pincode"]').value,
        course: document.getElementById('course').value,
        percentage: document.querySelector('input[type="number"]').value
    };
A
    try {
        const response = await fetch("http://localhost:5000/api/admission", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (result.success) {
            alert("Form Submitted Successfully ✅");
            this.reset();
        } else {
            alert("Error submitting form ❌");
        }

    } catch (error) {
        console.error(error);
        alert("Server Error ❌");
    }
});