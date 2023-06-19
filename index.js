// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    const targetTop = target.offsetTop - 60; // Adjust the offset based on your header height

    window.scrollTo({
      top: targetTop,
      behavior: 'smooth'
    });
  });
});

// Form submission handling
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Retrieve form input values
  const name = document.querySelector('input[type="text"]').value;
  const email = document.querySelector('input[type="email"]').value;
  const message = document.querySelector('textarea').value;

  // Perform form validation here if needed

  // Send form data to server
  // Replace the URL below with the appropriate endpoint for your server-side form handling
  fetch('https://example.com/submit-form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      email: email,
      message: message
    })
  })
  .then(response => response.json())
  .then(data => {
    // Handle the response from the server
    // Display success message or handle errors
    console.log(data);
  })
  .catch(error => {
    // Handle any network errors or server errors
    console.log(error);
  });
});
