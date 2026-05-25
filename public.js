const publicEntries = document.querySelector("#publicEntries");
const sharedCount = document.querySelector("#sharedCount");
const dailyPromptText = document.querySelector("#dailyPromptText");
const dailyResponseForm = document.querySelector("#dailyResponseForm");
const dailyResponse = document.querySelector("#dailyResponse");
const dailyResponseStatus = document.querySelector("#dailyResponseStatus");

const dailyPrompts = [
  "What is one small thing from today that you would like to remember?",
  "Where did you notice a little bit of ease today?",
  "What is something kind you witnessed, offered, or received recently?",
  "What made you feel more like yourself this week?",
  "What is one ordinary moment that deserves more attention?",
  "What helped you keep going today, even in a small way?",
  "What is something you are learning to appreciate about this season of life?",
  "Where did you feel a little more hopeful than before?",
  "What is one thing you are glad you did not rush past?",
  "What would you like to carry gently into tomorrow?",
  "What is something simple that has been supporting you lately?",
  "What moment from today would you put in a tiny keepsake box?",
  "Where did you feel connected, even briefly?",
  "What is one thing you handled better than you might have before?",
  "What small beauty did you notice today?",
  "What is something you want to thank yourself for trying?",
  "Where did your day surprise you in a good or interesting way?",
  "What helped you feel grounded today?",
  "What is one sentence of encouragement you would share with someone else?",
  "What part of your life feels quietly in progress?",
  "What is something you are making room for?",
  "What is one choice today that felt honest?",
  "Where did you find a little softness?",
  "What is something you hope tomorrow makes space for?",
  "What is one small win worth naming?",
  "What felt lighter than it used to?",
  "What is something you are allowed to enjoy without explaining it?",
  "What is one detail from today that made the day feel real?",
  "What are you slowly becoming more open to?",
  "What is one thing you would like to remember about who you are?"
];

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

function saveEntries(entries) {
  localStorage.setItem("promptimistic.entries", JSON.stringify(entries));
}

function getWordCount(text) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function formatEntryDate(date = new Date()) {
  return new Intl.DateTimeFormat(undefined, {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit"
  }).format(date);
}

function getDayOfYear(date) {
  const start = new Date(date.getFullYear(), 0, 0);
  const difference = date - start;
  return Math.floor(difference / 86400000);
}

function renderDailyPrompt() {
  const index = getDayOfYear(new Date()) % dailyPrompts.length;
  dailyPromptText.textContent = dailyPrompts[index];
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

dailyResponseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = dailyResponse.value.trim();

  if (!text) {
    dailyResponseStatus.textContent = "Write a reflection before sharing.";
    dailyResponse.focus();
    return;
  }

  const now = new Date();
  const entries = loadEntries();
  const item = {
    id: globalThis.crypto?.randomUUID?.() || String(Date.now()),
    text,
    prompt: dailyPromptText.textContent.trim(),
    focus: "Today’s prompt",
    time: "Daily",
    visibility: "public",
    actionStep: "",
    actionDone: false,
    wordCount: getWordCount(text),
    createdAt: formatEntryDate(now),
    createdAtISO: now.toISOString()
  };

  saveEntries([item, ...entries].slice(0, 50));
  dailyResponse.value = "";
  dailyResponseStatus.textContent = "Reflection shared on the public page.";
  renderPublicEntries();
});

renderDailyPrompt();

if (
  (localStorage.getItem("promptimistic.theme") ||
    localStorage.getItem("innerWord.theme") ||
    localStorage.getItem("promptly.theme") ||
    localStorage.getItem("betterPages.theme")) === "dark"
) {
  document.body.classList.add("dark");
}

renderPublicEntries();
