const currentPage = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".nav a").forEach((link) => {
  const linkPage = link.getAttribute("href");

  if (linkPage === currentPage) {
    link.classList.add("active");
    link.setAttribute("aria-current", "page");
  }
});

function updateLocalTime() {
  const timeElement = document.querySelector("#local-time");

  if (!timeElement) return;

  const time = new Date().toLocaleTimeString("en-US", {
    timeZone: "America/Sao_Paulo",
    hour: "2-digit",
    minute: "2-digit",
  });

  timeElement.textContent = `Florianópolis / Brazil - ${time} GMT-3`;
}

function markMissingProjectImages() {
  document.querySelectorAll(".project-visual:not([data-carousel]) img").forEach((image) => {
    const projectCase = image.closest(".project-case");
    const figcaption = image.closest("figure")?.querySelector("figcaption");

    const hide = () => {
      image.classList.add("is-missing");
      figcaption?.classList.add("is-visible");
      projectCase?.classList.add("project-case--without-image");
    };

    const show = () => {
      image.classList.remove("is-missing");
      figcaption?.classList.remove("is-visible");
      projectCase?.classList.remove("project-case--without-image");
    };

    image.addEventListener("error", hide);
    image.addEventListener("load", show);

    if (image.complete && image.naturalWidth === 0) {
      hide();
    }
  });
}

function initCarousels() {
  document.querySelectorAll("[data-carousel]").forEach((figure) => {
    const track = figure.querySelector(".carousel-track");
    const dotsContainer = figure.querySelector(".carousel-dots");
    if (!track) return;

    const images = Array.from(track.querySelectorAll("img"));
    const projectCase = figure.closest(".project-case");
    let settled = 0;

    const afterLoad = () => {
      const loaded = images.filter((img) => img.naturalWidth > 0);

      if (loaded.length === 0) {
        figure.classList.add("is-empty");
        projectCase?.classList.add("project-case--without-image");
        return;
      }

      images.forEach((img) => {
        if (img.naturalWidth === 0) img.style.display = "none";
      });

      if (!dotsContainer || loaded.length < 2) return;

      const dots = loaded.map((img, i) => {
        const dot = document.createElement("button");
        dot.className = "carousel-dot";
        dot.setAttribute("aria-label", `Slide ${i + 1}`);
        if (i === 0) dot.classList.add("is-active");
        dot.addEventListener("click", () => {
          img.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
        });
        dotsContainer.appendChild(dot);
        return dot;
      });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const i = loaded.indexOf(entry.target);
            if (i === -1) return;
            dots.forEach((d, j) => d.classList.toggle("is-active", j === i));
          });
        },
        { root: track, threshold: 0.5 }
      );

      loaded.forEach((img) => observer.observe(img));
    };

    images.forEach((img) => {
      const tick = () => { settled++; if (settled === images.length) afterLoad(); };
      if (img.complete) tick();
      else { img.addEventListener("load", tick); img.addEventListener("error", tick); }
    });
  });
}

function initLightbox() {
  document.querySelectorAll("[data-carousel] .carousel-track img").forEach((img) => {
    img.addEventListener("click", () => {
      if (img.naturalWidth === 0) return;
      openLightbox(img.src, img.alt);
    });
  });
}

function openLightbox(src, alt) {
  const box = document.createElement("div");
  box.className = "lightbox";

  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;

  const close = document.createElement("button");
  close.className = "lightbox-close";
  close.setAttribute("aria-label", "Fechar");
  close.textContent = "×";

  const dismiss = () => box.remove();

  close.addEventListener("click", (e) => { e.stopPropagation(); dismiss(); });
  box.addEventListener("click", dismiss);

  const onKey = (e) => {
    if (e.key === "Escape") { dismiss(); document.removeEventListener("keydown", onKey); }
  };
  document.addEventListener("keydown", onKey);

  box.appendChild(img);
  box.appendChild(close);
  document.body.appendChild(box);
}

function setupPrintResume() {
  document.querySelectorAll("[data-print-resume]").forEach((button) => {
    button.addEventListener("click", () => {
      window.print();
    });
  });
}

function pingDevtools() {
  console.info(
    "%cThanks for checking the code. GitHub: https://github.com/marcos-rmnd",
    "color: #38bdf8; font-weight: 700;"
  );
}

updateLocalTime();
markMissingProjectImages();
initCarousels();
initLightbox();
setupPrintResume();
pingDevtools();
setInterval(updateLocalTime, 60000);
