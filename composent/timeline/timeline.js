const carousel = document.getElementById("timelineCarousel");
const indicators = document.querySelectorAll(
  ".carousel-indicators [data-bs-target]"
);
const indicatorsContainer = document.getElementById("timelineIndicators");
const prevBtn = document.getElementById("timelinePrev");
const nextBtn = document.getElementById("timelineNext");
const bsCarousel = new bootstrap.Carousel(carousel, { interval: false });

let currentIndex = 0;

function updateProgress(index) {
  currentIndex = index;

  // AJOUTE ÇA : Mettre à jour la classe active manuellement
  indicators.forEach((indicator, i) => {
    if (i === index) {
      indicator.classList.add("active");
      indicator.setAttribute("aria-current", "true");
    } else {
      indicator.classList.remove("active");
      indicator.removeAttribute("aria-current");
    }
  });

  const progress = (index / (indicators.length - 1)) * 100;
  const totalWidth = indicatorsContainer.scrollWidth;
  const progressWidth = (totalWidth * progress) / 100;

  indicatorsContainer.style.setProperty(
    "--progress-width",
    progressWidth + "px"
  );

  const activeIndicator = indicators[index];
  const scrollContainer = indicatorsContainer;
  const indicatorLeft = activeIndicator.offsetLeft;
  const containerWidth = scrollContainer.offsetWidth;

  scrollContainer.scrollTo({
    left: indicatorLeft - containerWidth / 2 + 10,
    behavior: "smooth",
  });

  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === indicators.length - 1;
}

carousel.addEventListener("slide.bs.carousel", function (e) {
  updateProgress(e.to);
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    bsCarousel.prev();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < indicators.length - 1) {
    bsCarousel.next();
  }
});

updateProgress(0);
