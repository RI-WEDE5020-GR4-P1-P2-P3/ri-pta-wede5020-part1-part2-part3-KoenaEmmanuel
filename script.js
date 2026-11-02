document.addEventListener("DOMContentLoaded", function () {
    
    // 1. Enquiry Form Validation Logic
    const enquiryForm = document.querySelector("form");

    if (enquiryForm) {
        enquiryForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default submission to validate via JS

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const subject = document.getElementById("subject").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || subject === "" || message === "") {
                alert("Please fill in all required fields before submitting your enquiry.");
                return;
            }

            // Simple email format check
            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (!email.match(emailPattern)) {
                alert("Please enter a valid email address.");
                return;
            }

            // Success feedback
            alert(`Thank you, ${name}! Your enquiry has been successfully submitted. Our team will get back to you soon.`);
            enquiryForm.reset();
        });
    }

    // 2. FAQ Accordion Logic
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(button => {
        button.addEventListener("click", function () {
            const faqItem = this.parentElement;
            faqItem.classList.toggle("active");

            faqQuestions.forEach(otherButton => {
                const otherItem = otherButton.parentElement;
                if (otherItem !== faqItem) {
                    otherItem.classList.remove("active");
                }
            });
        });
    });

    // 3. Product Search and Filtering Logic
    const searchInput = document.getElementById("productSearch");
    
    if (searchInput) {
        searchInput.addEventListener("input", function (e) {
            const searchTerm = e.target.value.toLowerCase().trim();
            const productCards = document.querySelectorAll(".product-card");

            productCards.forEach(card => {
                const productName = card.getAttribute("data-name").toLowerCase();
                const productText = card.innerText.toLowerCase();

                if (productName.includes(searchTerm) || productText.includes(searchTerm)) {
                    card.style.display = "block"; // Show matching cards
                } else {
                    card.style.display = "none";  // Hide non-matching cards
                }
            });
        });
    }

});