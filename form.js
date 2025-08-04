document.addEventListener('DOMContentLoaded', function() {
        const dogBreedSelect = document.getElementById('dogBreed'); // dropdown the list of dog breeds
        const otherDogBreedInput = document.getElementById('otherDogBreed'); //input for other dog breeds
        const favoriteDogForm = document.getElementById('favoriteDogForm');  //form element
        const confirmationMessage = document.getElementById('confirmationMessage'); //span to display the chosen dog
        const chosenDogSpan = document.getElementById('chosenDog');

        // Show/hide the "Other" input field
        dogBreedSelect.addEventListener('change', function() {
            if (dogBreedSelect.value === 'Other') {
                otherDogBreedInput.style.display = 'block';
                otherDogBreedInput.setAttribute('required', 'true'); ///mark it as required
            } else {
                otherDogBreedInput.style.display = 'none'; //hide the input field if not "Other"
                otherDogBreedInput.removeAttribute('required'); //remove required attribute
                otherDogBreedInput.value = ''; // Clear the input if "Other" is not selected
            }
        });

        // Handle form submission
        favoriteDogForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            let selectedBreed = dogBreedSelect.value; //get the selected from the dropdown
            if (selectedBreed === 'Other') {
                selectedBreed = otherDogBreedInput.value.trim(); //get value from "Other" input
                if (!selectedBreed) {
                    alert('Please enter the name of the dog breed you love!'); //alert if input is empty
                    return; //exit the function if no breed is entered
                }
            } else if (!selectedBreed) {
                alert('Please select your favorite dog breed!'); //alert if no breed is selected
                return; //exit if no breed is selected
            }

            // Display the confirmation message
            chosenDogSpan.textContent = selectedBreed; //set the text of the span to the selected breed
            confirmationMessage.style.display = 'block'; //confirmation message

            // clear the form or disable it after submission
            favoriteDogForm.reset(); //reset the form fields
            otherDogBreedInput.style.display = 'none'; // Hide "Other" input
            otherDogBreedInput.removeAttribute('required'); //remove the required attribute
        });
    });