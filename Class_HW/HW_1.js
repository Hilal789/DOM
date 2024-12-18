// const userForm = document.getElementById('userForm');
// const resultContainer = document.getElementById('resultContainer');
// const resultName = document.getElementById('resultName');
// const resultAge = document.getElementById('resultAge');
// const resultEducation = document.getElementById('resultEducation');


userForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get values from the form
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const education = document.getElementById('education').value;

    // Display the results
    resultName.textContent = name;
    resultAge.textContent = age;
    resultEducation.textContent = education;

    // Show the result container
    resultContainer.style.display = 'block';

    // Optionally reset the form
    userForm.reset();
  });