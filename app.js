// resources/js/app.js

document.querySelectorAll(".contact-list-item").forEach((item) => {
  item.addEventListener("click", () => {
    const contactId = item.dataset.contactId;
    showContactDetails(contactId);
  });
});

function showContactDetails(contactId) {
  // Fetch the contact details dynamically
  fetch(`/contacts/${contactId}`)
    .then((response) => response.text())
    .then((html) => {
      const bottomSheet = document.createElement("div");
      bottomSheet.classList.add("bottom-sheet");
      bottomSheet.innerHTML = html;

      document.body.appendChild(bottomSheet);

      bottomSheet.addEventListener("click", () => {
        document.body.removeChild(bottomSheet);
      });
    });
}
