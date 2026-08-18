(function () {
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  var form = document.querySelector("[data-estimate-form]");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = (form.querySelector("[name=name]") || {}).value || "";
      var phone = (form.querySelector("[name=phone]") || {}).value || "";
      var email = (form.querySelector("[name=email]") || {}).value || "";
      var service = (form.querySelector("[name=service]") || {}).value || "";
      var message = (form.querySelector("[name=message]") || {}).value || "";
      var body = [
        "Name: " + name,
        "Phone: " + phone,
        "Email: " + email,
        "Service: " + service,
        "",
        message
      ].join("\n");
      var href =
        "mailto:lohicleaning@gmail.com?subject=" +
        encodeURIComponent("Free estimate request — LoHi Cleaning") +
        "&body=" +
        encodeURIComponent(body);
      window.location.href = href;
    });
  }
})();
