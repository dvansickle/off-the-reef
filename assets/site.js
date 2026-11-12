// Edit these three addresses once; every button on the site uses them.
const LINKS = {
  // TODO: EVR's direct-booking page for Off The Reef
  booking: "",
  // TODO: the Vrbo listing
  vrbo: "",
  // TODO: email signup form (e.g. a Tally form)
  signup: "",
};

const TAG = "utm_source=offthereef.com&utm_medium=website";

document.querySelectorAll("[data-link]").forEach((el) => {
  const url = LINKS[el.dataset.link];
  if (!url) return; // keeps the fallback href until the address is filled in
  const sep = url.includes("?") ? "&" : "?";
  el.href = el.dataset.link === "signup" ? url : url + sep + TAG;
  el.rel = "noopener";
});

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
