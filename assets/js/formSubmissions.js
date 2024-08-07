document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission
  
      const formData = new FormData(form);
      const data = new URLSearchParams();
  
      for (const pair of formData) {
        data.append(pair[0], pair[1]);
      }
  
      fetch('https://script.google.com/macros/s/AKfycbyIAlqBvS6aAarTzh36Z4HJkphAt6lxLD3u1sATwEHBNlaR-ndNwlQmtQ1GFU37HEHVlw/exec', {
        method: 'POST',
        body: data
      })
      .then(response => response.text())
      .then(result => {
        // Show a success message to the user
        const messageDiv = document.createElement('div');
        messageDiv.textContent = 'Your message has been submitted successfully.';
        messageDiv.style.color = 'green';
        form.appendChild(messageDiv);
  
        // Optionally, reset the form
        form.reset();
      })
      .catch(error => {
        // Show an error message to the user
        const messageDiv = document.createElement('div');
        messageDiv.textContent = 'There was an error submitting your message. Please try again.';
        messageDiv.style.color = 'red';
        form.appendChild(messageDiv);
      });
    });
  });
  