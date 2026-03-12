(function () {
  emailjs.init("vhEbYRIkE4mnM61MH");
})();

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form-cotizacion");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const cantidad = document.querySelector('input[name="cantidad"]').value;

      if (cantidad < 40) {
        alert("La producción mínima de LUMIRA es de 40 unidades.");
        return;
      }

      emailjs
        .sendForm("service_0l1k268", "template_ty9r7wb", this)
        .then(function () {
          alert("Solicitud enviada correctamente. Nuestro equipo se pondrá en contacto.");
          form.reset();
        })
        .catch(function (error) {
          alert("Error al enviar la solicitud.");
          console.log(error);
        });
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.12,
    }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".hero-dot");
  let currentSlide = 0;
  let slideInterval;

  function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");
    currentSlide = index;
  }

  function nextSlide() {
    let next = currentSlide + 1;
    if (next >= slides.length) next = 0;
    showSlide(next);
  }

  function startSlider() {
    slideInterval = setInterval(nextSlide, 4500);
  }

  function resetSlider() {
    clearInterval(slideInterval);
    startSlider();
  }

  if (slides.length > 0 && dots.length > 0) {
    dots.forEach((dot, index) => {
      dot.addEventListener("click", function () {
        showSlide(index);
        resetSlider();
      });
    });

    showSlide(0);
    startSlider();
  }
});