// "Computer vision" detection feed for the landing hero.
// A nod to Bárbara's actual work — factory AI cameras that detect what's on the
// line. A scanline sweeps the portrait, then a bounding box + label + confidence
// score snap on. Hover the photo to re-scan; the detected class cycles.
// Reduced-motion: the box + label show statically, no sweep.
(function () {
  "use strict";

  var profile = document.querySelector(".profile");
  if (!profile) return; // homepage hero only

  var heroPhoto = document.querySelector(".hero-photo");
  var img = heroPhoto && heroPhoto.querySelector("img");
  if (!heroPhoto || !img) return;

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Playful "detected classes" that cycle on each scan.
  var LABELS = [
    "product_leader",
    "phd_industrial_eng",
    "factory_ai",
    "lean_transformer",
    "chaos_narrator",
  ];
  var labelIdx = 0;

  // ---- Build the overlay ----------------------------------------------------
  var overlay = document.createElement("div");
  overlay.className = "cv-overlay";
  overlay.setAttribute("aria-hidden", "true");
  overlay.innerHTML =
    '<span class="cv-scan"></span>' +
    '<div class="cv-box">' +
    '<span class="cv-corner tl"></span><span class="cv-corner tr"></span>' +
    '<span class="cv-corner bl"></span><span class="cv-corner br"></span>' +
    '<span class="cv-label"><b></b><i></i></span>' +
    "</div>";
  heroPhoto.appendChild(overlay);

  var boxLabel = overlay.querySelector(".cv-label b");
  var boxConf = overlay.querySelector(".cv-label i");

  // Keep the overlay aligned to the (circular) image box, which is centered
  // inside the flex .hero-photo — recompute on load / resize.
  function positionOverlay() {
    var pr = heroPhoto.getBoundingClientRect();
    var ir = img.getBoundingClientRect();
    overlay.style.left = ir.left - pr.left + "px";
    overlay.style.top = ir.top - pr.top + "px";
    overlay.style.width = ir.width + "px";
    overlay.style.height = ir.height + "px";
  }

  function setLabel() {
    var name = LABELS[labelIdx % LABELS.length];
    labelIdx++;
    // Confidence jitters just under 1.0 for that "real model" feel.
    var conf = (0.93 + Math.random() * 0.066).toFixed(2);
    boxLabel.textContent = name;
    boxConf.textContent = conf;
  }

  var scanning = false;
  function runScan() {
    if (reduce) {
      setLabel();
      overlay.classList.add("revealed");
      return;
    }
    if (scanning) return;
    scanning = true;
    setLabel();
    overlay.classList.remove("revealed");
    overlay.classList.remove("scanning");
    // Force reflow so the animation restarts even on a repeat scan.
    void overlay.offsetWidth;
    overlay.classList.add("scanning");
    window.setTimeout(function () {
      overlay.classList.add("revealed");
    }, 780);
    window.setTimeout(function () {
      overlay.classList.remove("scanning");
      scanning = false;
    }, 1150);
  }

  positionOverlay();
  window.addEventListener("resize", positionOverlay, { passive: true });
  if (!img.complete) img.addEventListener("load", positionOverlay);

  // Initial acquisition shortly after load, then re-scan on hover.
  window.setTimeout(function () {
    positionOverlay();
    runScan();
  }, 450);
  heroPhoto.addEventListener("mouseenter", runScan);
})();
