let btn = document.querySelector('#btn');
let input = document.querySelector('#input');
let error = document.querySelector('#error');

btn.addEventListener('click', function() {
  const email = input.value.trim();
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!validEmail.test(email)) {
    // Show error state
    input.classList.add("input"); // red border
    error.style.display = "block"; // show text
  } else {
    // Reset to normal
    input.classList.remove("input");
    error.style.display = "none";
    alert("Subscribed successfully!");
  }
});
