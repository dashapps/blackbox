try {
  const stored = JSON.parse(localStorage.getItem("starlight.theme"));
  if (!stored || stored.mode !== "dark") {
    localStorage.setItem("starlight.theme", JSON.stringify({ mode: "dark" }));
  }
} catch (e) {
  // ignore
}
