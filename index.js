window.onload = function () {
    var generateButton = document.getElementById('generate-resume');
    generateButton.addEventListener('click', function () {
        // Get user input values
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var experience = document.getElementById('experience').value;
        var education = document.getElementById('education').value;
        var skills = document.getElementById('skills').value;
        // Find the resume display section
        var resumeDiv = document.getElementById('resume');
        // Generate the resume content
        resumeDiv.innerHTML = "\n            <h2>".concat(name, "</h2>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            <h3>Experience</h3>\n            <p>").concat(experience, "</p>\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n        ");
    });
};
function makeEditable() {
    var editableElements = document.querySelectorAll('editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            //replace content
            if (currentElement.tagName === "P" || currentElement.tagName === "SPAN") {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
