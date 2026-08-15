
//----links CTA----
document.addEventListener("DOMContentLoaded", function () {
  const buttonLinks = {
    "button-primary-contacts": "Contacts.html",
    "button-primary-projects": "Projects.html",
    "button-primary-about": "About.html"
  };

  Object.entries(buttonLinks).forEach(([buttonId, url]) => {
    const button = document.getElementById(buttonId);
    if (button) {
      button.addEventListener("click", () => {
        window.location.href = url;
      });
    }
  });
});