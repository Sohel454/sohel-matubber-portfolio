(() => {
  "use strict";

  const layers = [
    {
      formula: "FTO", role: "FRONT SUBSTRATE / ELECTRODE", name: "FTO · 0.45 µm",
      description: "The FTO layer is shown at the illuminated substrate side of the accepted-paper device structure. AM 1.5G, one-sun illumination enters through this side in the supplied figure."
    },
    {
      formula: "ETL", role: "ELECTRON TRANSPORT LAYER", name: "ETL · 0.05 µm",
      description: "The conference-paper figure lists six ETL candidate materials: WS₂, SnS₂, ZnSe, ZnO, PCBM and TiO₂. The supplied figure presents them as alternatives and does not identify one single selected material."
    },
    {
      formula: "CuAgBeSnSe₄", role: "ABSORBER LAYER", name: "CuAgBeSnSe₄ · 0.20 µm",
      description: "This is the first absorber layer shown above the ETL in the accepted-paper device structure. Its figure-specified thickness is 0.20 µm."
    },
    {
      formula: "MASnI₃", role: "ABSORBER LAYER", name: "MASnI₃ · 0.50 µm",
      description: "This is the second absorber layer shown above CuAgBeSnSe₄ in the accepted-paper device structure. Its figure-specified thickness is 0.50 µm."
    },
    {
      formula: "Zn₃P₂", role: "LAYER ABOVE THE ABSORBERS", name: "Zn₃P₂ · 0.10 µm",
      description: "Zn₃P₂ is positioned above the MASnI₃ layer and below the Au contact in the supplied conference-paper figure. Its figure-specified thickness is 0.10 µm."
    },
    {
      formula: "Au", role: "GOLD TOP CONTACT", name: "Au · 5.1 eV",
      description: "The top gold contact is labelled Au in the supplied device structure. The figure gives the associated value as 5.1 eV."
    }
  ];

  const projects = [
    {
      title: "Self-Driving Car",
      category: "Robotics & Automation",
      description: "An autonomous vehicle project focused on sensing the surrounding environment and making navigation decisions with minimal human intervention."
    },
    {
      title: "Solar Air Cooler",
      category: "Renewable Energy",
      description: "An air-cooling project designed to use solar energy as its power source, exploring an alternative to conventional grid-powered cooling."
    },
    {
      title: "Fingerprint-Based Attendance System",
      category: "Biometric Systems",
      description: "An attendance management system that uses fingerprint recognition to identify registered users and record their attendance."
    }
  ];

  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("primary-navigation");

  // Theme preference: Light, Dark or System. Light remains the initial default.
  const themeButtons = [...document.querySelectorAll("[data-theme-choice]")];
  const themeRoot = document.documentElement;
  const systemThemeQuery = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;

  function readThemePreference() {
    try {
      const saved = window.localStorage.getItem("sohel-portfolio-theme");
      return ["light", "dark", "system"].includes(saved) ? saved : "light";
    } catch (error) {
      return "light";
    }
  }

  let themePreference = readThemePreference();

  function applyTheme(preference) {
    themePreference = preference;
    const resolved = preference === "system"
      ? (systemThemeQuery && systemThemeQuery.matches ? "dark" : "light")
      : preference;
    themeRoot.dataset.theme = resolved;
    themeButtons.forEach(button => {
      button.setAttribute("aria-pressed", String(button.dataset.themeChoice === preference));
    });
    try {
      window.localStorage.setItem("sohel-portfolio-theme", preference);
    } catch (error) {
      // Theme still works for the current page session if storage is unavailable.
    }
  }

  themeButtons.forEach(button => {
    button.addEventListener("click", () => applyTheme(button.dataset.themeChoice));
  });

  if (systemThemeQuery) {
    const onSystemThemeChange = () => {
      if (themePreference === "system") applyTheme("system");
    };
    if (typeof systemThemeQuery.addEventListener === "function") {
      systemThemeQuery.addEventListener("change", onSystemThemeChange);
    } else if (typeof systemThemeQuery.addListener === "function") {
      systemThemeQuery.addListener(onSystemThemeChange);
    }
  }
  applyTheme(themePreference);
  const modal = document.getElementById("site-modal");
  const modalDialog = modal.querySelector(".modal-dialog");
  const modalTitle = document.getElementById("modal-title");
  const modalKicker = document.getElementById("modal-kicker");
  const modalContent = document.getElementById("modal-description");
  let lastFocused = null;

  function closeMenu() {
    if (!menuToggle || !nav) return;
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    nav.classList.remove("is-open");
  }

  menuToggle?.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    menuToggle.setAttribute("aria-label", expanded ? "Open navigation menu" : "Close navigation menu");
    nav.classList.toggle("is-open", !expanded);
  });

  nav?.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", event => {
    if (nav?.classList.contains("is-open") && !nav.contains(event.target) && !menuToggle.contains(event.target)) {
      closeMenu();
    }
  });

  // Mark the visible section in the desktop/mobile navigation.
  const navLinks = [...document.querySelectorAll(".primary-nav a")];
  const sections = navLinks.map(link => document.querySelector(link.getAttribute("href"))).filter(Boolean);
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(link => {
          const active = link.getAttribute("href") === `#${entry.target.id}`;
          if (active) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-25% 0px -65% 0px", threshold: 0 });
    sections.forEach(section => observer.observe(section));
  }

  // Interactive six-layer solar-cell architecture explorer.
  const layerButtons = [...document.querySelectorAll("[data-layer]")];
  const inspector = document.getElementById("layer-inspector");
  function selectLayer(index) {
    const layer = layers[index];
    if (!layer || !inspector) return;
    layerButtons.forEach(button => {
      const selected = Number(button.dataset.layer) === index;
      button.classList.toggle("is-selected", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
    inspector.innerHTML = `
      <p class="mono-label">LAYER ${String(index + 1).padStart(2, "0")} / ${layer.role}</p>
      <h5>${layer.name}</h5>
      <p>${layer.description}</p>
    `;
  }
  layerButtons.forEach(button => button.addEventListener("click", () => selectLayer(Number(button.dataset.layer))));

  // Publication summary and citation-information disclosures.
  document.querySelectorAll("[data-toggle-panel]").forEach(button => {
    button.addEventListener("click", () => {
      const panel = document.getElementById(button.dataset.togglePanel);
      if (!panel) return;
      const opening = panel.hidden;
      panel.hidden = !opening;
      button.setAttribute("aria-expanded", String(opening));
      const label = button.textContent.replace(/[＋−]/g, "").trim();
      button.innerHTML = `${label} <span aria-hidden="true">${opening ? "−" : "＋"}</span>`;
    });
  });

  // Accessible modal helpers.
  function openModal(title, kicker, content, trigger) {
    lastFocused = trigger || document.activeElement;
    modalTitle.textContent = title;
    modalKicker.textContent = kicker;
    modalContent.innerHTML = content;
    modal.hidden = false;
    document.body.classList.add("modal-open");
    modalDialog.focus();
    const firstControl = modal.querySelector("button, a[href]");
    firstControl?.focus();
  }

  function closeModal() {
    if (modal.hidden) return;
    modal.hidden = true;
    document.body.classList.remove("modal-open");
    modalContent.innerHTML = "";
    if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
  }

  modal.querySelectorAll("[data-close-modal]").forEach(button => button.addEventListener("click", closeModal));
  modal.addEventListener("click", event => {
    if (event.target === modal) closeModal();
  });
  document.addEventListener("keydown", event => {
    if (modal.hidden) {
      if (event.key === "Escape") closeMenu();
      return;
    }
    if (event.key === "Escape") {
      closeModal();
      return;
    }
    if (event.key === "Tab") {
      const focusable = [...modal.querySelectorAll('button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])')]
        .filter(element => element.getClientRects().length > 0);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  // Project details modal. No technologies, contribution claims or links are inferred.
  document.querySelectorAll("[data-project]").forEach(button => {
    button.addEventListener("click", () => {
      const project = projects[Number(button.dataset.project)];
      if (!project) return;
      openModal(project.title, `PROJECT DETAILS / ${project.category.toUpperCase()}`, `
        <p>${project.description}</p>
        <ul>
          <li><strong>Technologies:</strong> Not documented in the supplied files.</li>
          <li><strong>Individual contribution:</strong> Not documented in the supplied files.</li>
          <li><strong>Results and demonstration links:</strong> Not supplied.</li>
        </ul>
        <p>Project details are intentionally limited to the descriptions already present in the source portfolio.</p>
      `, button);
    });
  });

  // Academic CV and certificate actions link directly to existing repository files.

  // Copy email with clipboard API and a local fallback for file:// use.
  const copyButton = document.getElementById("copy-email");
  const feedback = document.getElementById("copy-feedback");
  copyButton?.addEventListener("click", async () => {
    const email = copyButton.dataset.email || "";
    let copied = false;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
        copied = true;
      } else {
        const temporary = document.createElement("textarea");
        temporary.value = email;
        temporary.setAttribute("readonly", "");
        temporary.style.position = "fixed";
        temporary.style.opacity = "0";
        document.body.appendChild(temporary);
        temporary.select();
        copied = document.execCommand("copy");
        temporary.remove();
      }
    } catch (error) {
      copied = false;
    }
    feedback.textContent = copied ? "Email address copied." : "Copy unavailable here. Select the email address above.";
  });

  const year = document.getElementById("current-year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
