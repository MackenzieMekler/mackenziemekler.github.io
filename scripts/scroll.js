const sections = document.querySelectorAll("section");
const bubbles = document.querySelectorAll(".bubble");
const progressLine = document.getElementById("progress-line");

function updateProgress() {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const docHeight = document.body.scrollHeight;

  // Jump to full progress if at bottom
  if (scrollY + windowHeight >= docHeight - 1) {
    bubbles.forEach((b, i) => {
      b.classList.add("active");
    });

    progressLine.style.background = `linear-gradient(to bottom, #0077ff 0%, #0077ff 100%)`;
    return;
  }

  // Mid-scroll logic
  let scrollPosition = scrollY + windowHeight / 2;
  let activeIndex = -1;

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (scrollPosition >= sectionTop) {
      activeIndex = index;
    }
  });

  // Color the progress line
  const totalProgress = ((activeIndex + 1) / sections.length) * 100;
  progressLine.style.background = `linear-gradient(to bottom, #0077ff 0%, #0077ff ${totalProgress}%, #ccc ${totalProgress}%)`;

  // Set bubbles based on current section
  bubbles.forEach((bubble, index) => {
    if (index <= activeIndex) {
      bubble.classList.add("active");
    } else {
      bubble.classList.remove("active");
    }
  });
}

bubbles.forEach((bubble, index) => {
  bubble.addEventListener("click", () => {
    sections[index].scrollIntoView({ behavior: "smooth" });
  });
});

window.addEventListener("scroll", updateProgress);
window.addEventListener("load", updateProgress);