const publicEntries = document.querySelector("#publicEntries");
const sharedCount = document.querySelector("#sharedCount");

function loadEntries() {
  try {
    const stored =
      localStorage.getItem("promptimistic.entries") ||
      localStorage.getItem("innerWord.entries") ||
      localStorage.getItem("promptly.entries") ||
      "[]";
    const entries = JSON.parse(stored);
    return Array.isArray(entries) ? entries : [];
  } catch {
    return [];
  }
}

function renderPublicEntries() {
  const shared = loadEntries().filter((item) => item.visibility === "public");
  publicEntries.innerHTML = "";
  sharedCount.textContent = `${shared.length} shared`;

  if (!shared.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "No public reflections yet.";
    publicEntries.append(empty);
    return;
  }

  shared.forEach((item) => {
    const card = document.createElement("article");
    card.className = "public-card";

    const prompt = document.createElement("h3");
    prompt.textContent = item.prompt || "Untitled prompt";

    const meta = document.createElement("small");
    meta.textContent = [item.focus, item.createdAt, `${item.wordCount || 0} words`]
      .filter(Boolean)
      .join(" · ");

    const text = document.createElement("p");
    text.textContent = item.text || "";

    card.append(prompt, meta, text);
    publicEntries.append(card);
  });
}

if (
  (localStorage.getItem("promptimistic.theme") ||
    localStorage.getItem("innerWord.theme") ||
    localStorage.getItem("promptly.theme") ||
    localStorage.getItem("betterPages.theme")) === "dark"
) {
  document.body.classList.add("dark");
}

renderPublicEntries();
