const prompts = {
  "self-trust": {
    label: "Self-trust",
    gentle: [
      "Where have you been asking for permission when your inner answer was already clear?",
      "What is one small promise to yourself that would feel loving to keep today?",
      "What part of you deserves to be believed before it has to prove anything?"
    ],
    direct: [
      "What are you tolerating because you do not fully trust your own discomfort?",
      "Which decision would become obvious if you stopped negotiating against yourself?",
      "What truth are you hoping someone else will validate before you act on it?"
    ],
    hopeful: [
      "What evidence do you have that you can handle the next honest step?",
      "How would today feel if your past resilience counted as real proof?",
      "What would trusting yourself make possible this month?"
    ],
    deep: [
      "When did you learn to question yourself, and whose voice does that doubt sound like?",
      "What is the cost of outsourcing your certainty to other people?",
      "What would need to be forgiven for you to trust yourself again?"
    ],
    playful: [
      "If your wisest self left you a sticky note this morning, what would it say?",
      "What would you do today if confidence were an outfit you could borrow?",
      "Where could you let your gut take the wheel for ten delightfully low-stakes minutes?"
    ]
  },
  clarity: {
    label: "Clarity",
    gentle: [
      "What feels noisy right now, and what feels quietly true underneath it?",
      "Which choice would create the most relief in your body?",
      "What question are you ready to stop circling and answer honestly?"
    ],
    direct: [
      "What are the facts, what are the fears, and what are you mixing together?",
      "What would you choose if you had to decide before seeking one more opinion?",
      "What is the next practical step, stripped of drama?"
    ],
    hopeful: [
      "What is becoming clearer, even if the whole path is not visible yet?",
      "What possibility keeps returning because it matters?",
      "What would clarity sound like if it were kind instead of urgent?"
    ],
    deep: [
      "Which version of your life are you grieving, and which version is asking to begin?",
      "What desire have you made complicated because it feels vulnerable to want it?",
      "What do you know now that your past self was not ready to know?"
    ],
    playful: [
      "If your problem had a weather report, what would the forecast say?",
      "What would a very sensible best friend circle in bright marker?",
      "What is the most obvious answer you keep pretending is mysterious?"
    ]
  },
  relationships: {
    label: "Relationships",
    gentle: [
      "Where do you need more honesty, more softness, or more space?",
      "Who helps you feel like yourself, and what do they awaken in you?",
      "What boundary would protect the kind of love you want to practice?"
    ],
    direct: [
      "Where are you performing peace instead of having the necessary conversation?",
      "What pattern keeps repeating because you keep explaining it away?",
      "What do your actions reveal about who has access to your energy?"
    ],
    hopeful: [
      "What kind of connection are you learning to receive without earning it?",
      "What repair would feel possible if both people brought courage?",
      "Who deserves more appreciation from you this week?"
    ],
    deep: [
      "What old attachment fear shows up when someone gets close?",
      "How do you confuse being needed with being loved?",
      "What relationship role are you ready to outgrow?"
    ],
    playful: [
      "Who would you text if your heart were allowed to be charmingly obvious?",
      "What friendship needs a tiny spark of delight this week?",
      "What would your group chat diagnose as the real issue in thirty seconds?"
    ]
  },
  career: {
    label: "Career",
    gentle: [
      "What part of your work still feels alive, even faintly?",
      "What would make your next workday 10 percent more humane?",
      "Which strength are you underusing because it comes easily to you?"
    ],
    direct: [
      "What professional goal are you avoiding because it would require being seen?",
      "Where are you staying busy to avoid choosing a direction?",
      "What skill would change your options if you practiced it consistently?"
    ],
    hopeful: [
      "What future role would make your current effort feel meaningful?",
      "What proof do you already have that you can grow into harder things?",
      "Who could you learn from without comparing yourself to them?"
    ],
    deep: [
      "What did you learn to believe success would cost you?",
      "What ambition feels true, and what ambition feels inherited?",
      "What would your work look like if it honored both security and aliveness?"
    ],
    playful: [
      "If your career had a loading bar, what would be quietly progressing?",
      "What tiny power move would make Monday feel less like a trapdoor?",
      "What would your calendar look like if it respected your actual brain?"
    ]
  },
  healing: {
    label: "Healing",
    gentle: [
      "What part of you is asking for patience instead of pressure?",
      "Where can you offer yourself care without needing to justify it?",
      "What pain has softened enough to be named today?"
    ],
    direct: [
      "What wound are you keeping open by revisiting the same story?",
      "What apology, from yourself or someone else, are you still waiting around for?",
      "What is your responsibility now, even if what happened was not your fault?"
    ],
    hopeful: [
      "What is one sign that you are no longer where you used to be?",
      "What has healing already given back to you?",
      "How can you make room for joy without treating it like betrayal?"
    ],
    deep: [
      "What did you have to become to survive, and what can you set down now?",
      "Which feeling are you afraid would overwhelm you if you let it speak?",
      "What would closure mean if it did not require anyone else to change?"
    ],
    playful: [
      "What would your nervous system put on its out-of-office reply?",
      "What tiny comfort would make your inner child suspiciously pleased?",
      "If healing had a soundtrack today, what would the first track be called?"
    ]
  },
  gratitude: {
    label: "Gratitude",
    gentle: [
      "What ordinary moment has been quietly carrying you lately?",
      "What did your body do for you today that you can thank it for?",
      "Who made your life easier in a way you have not fully noticed?"
    ],
    direct: [
      "What are you taking for granted that younger you once wanted badly?",
      "What comfort, access, or support deserves more attention from you?",
      "What good thing are you rushing past because you are chasing the next one?"
    ],
    hopeful: [
      "What small goodness could become bigger if you gave it more attention?",
      "What are you glad is no longer as hard as it used to be?",
      "What is one reason tomorrow has a chance to be kind?"
    ],
    deep: [
      "How has your definition of enough changed over time?",
      "What loss made you more aware of what is precious now?",
      "What does gratitude feel like when it is honest, not forced?"
    ],
    playful: [
      "What tiny luxury deserves an award today?",
      "What would you write a five-star review for in your current life?",
      "Which everyday object is doing heroic work for you right now?"
    ]
  },
  discipline: {
    label: "Discipline",
    gentle: [
      "What habit would feel easier if it were smaller and kinder?",
      "Where can consistency support you instead of punish you?",
      "What is one repeatable action your future self would appreciate?"
    ],
    direct: [
      "What excuse has become too expensive to keep using?",
      "What do you need to remove so the right action becomes easier?",
      "Where are you confusing a mood with a decision?"
    ],
    hopeful: [
      "What could change in ninety days if you stayed gently consistent?",
      "Which habit would help you believe in yourself again?",
      "What system would make follow-through feel more natural?"
    ],
    deep: [
      "What do you fear discipline will take from you?",
      "Where did you learn that structure and freedom cannot coexist?",
      "What identity are your current habits quietly reinforcing?"
    ],
    playful: [
      "What would make your next good choice almost too easy to skip?",
      "If your routine had a hype person, what would they say at 7 a.m.?",
      "What tiny rule would save you from negotiating with yourself later?"
    ]
  },
  dreams: {
    label: "Dreams",
    gentle: [
      "What dream still visits you when you are being honest and unguarded?",
      "What desire deserves a little sunlight today?",
      "What would you try if beginning badly were allowed?"
    ],
    direct: [
      "What dream have you made vague so you cannot be disappointed by it?",
      "What are you waiting to become before you let yourself begin?",
      "What would be the first measurable sign that you are taking this seriously?"
    ],
    hopeful: [
      "What future would make your current courage worth it?",
      "What dream feels possible if you let it start small?",
      "Who might you become by moving toward what you want?"
    ],
    deep: [
      "What longing have you mistaken for impracticality?",
      "What part of your dream is about freedom, and what part is about being witnessed?",
      "What would you pursue if your life did not need to impress anyone?"
    ],
    playful: [
      "What would your dream do first if it had twenty dollars and a free afternoon?",
      "If your future self sent a postcard, what scene would be on the front?",
      "What delightfully unreasonable idea keeps tapping on the window?"
    ]
  }
};

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

const state = {
  currentPrompt: "",
  editingId: null,
  timerId: null,
  secondsLeft: 300,
  entries: loadSavedEntries()
};

const form = document.querySelector("#promptForm");
const focusInput = document.querySelector("#focus");
const toneInput = document.querySelector("#tone");
const timeInput = document.querySelector("#time");
const promptText = document.querySelector("#promptText");
const promptTag = document.querySelector("#promptTag");
const timeTag = document.querySelector("#timeTag");
const dailyPromptText = document.querySelector("#dailyPromptText");
const entry = document.querySelector("#entry");
const actionStep = document.querySelector("#actionStep");
const entryVisibility = document.querySelector("#entryVisibility");
const saveEntryButton = document.querySelector("#saveEntry");
const cancelEditButton = document.querySelector("#cancelEdit");
const entryStatus = document.querySelector("#entryStatus");
const entriesList = document.querySelector("#entriesList");
const entrySearch = document.querySelector("#entrySearch");
const entryFocusFilter = document.querySelector("#entryFocusFilter");
const entryDateFilter = document.querySelector("#entryDateFilter");
const copyAllEntriesButton = document.querySelector("#copyAllEntries");
const downloadTxtButton = document.querySelector("#downloadTxt");
const downloadPdfButton = document.querySelector("#downloadPdf");
const timer = document.querySelector("#timer");
const startTimer = document.querySelector("#startTimer");
const resetTimer = document.querySelector("#resetTimer");
const themeToggle = document.querySelector("#themeToggle");

function loadSavedEntries() {
  try {
    const stored =
      localStorage.getItem("promptimistic.entries") ||
      localStorage.getItem("innerWord.entries") ||
      localStorage.getItem("promptly.entries") ||
      "[]";
    const entries = JSON.parse(stored);
    return Array.isArray(entries)
      ? entries.map((item, index) => ({
          ...item,
          id: item.id || `legacy-${index}-${item.createdAt || Date.now()}`,
          wordCount: item.wordCount || getWordCount(item.text || ""),
          visibility: item.visibility || (item.isPublic ? "public" : "private"),
          actionStep: item.actionStep || "",
          actionDone: Boolean(item.actionDone)
        }))
      : [];
  } catch {
    return [];
  }
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

function getDraft() {
  try {
    return JSON.parse(localStorage.getItem("promptimistic.draft") || "null");
  } catch {
    return null;
  }
}

function persistDraft() {
  const text = entry.value;
  const action = actionStep.value;

  if (!text.trim() && !action.trim()) {
    localStorage.removeItem("promptimistic.draft");
    return;
  }

  localStorage.setItem(
    "promptimistic.draft",
    JSON.stringify({
      text,
      actionStep: action,
      prompt: state.currentPrompt,
      focus: promptTag.textContent,
      time: timeTag.textContent,
      updatedAt: new Date().toISOString()
    })
  );
  entryStatus.textContent = state.editingId ? "Editing draft autosaved." : "Draft autosaved.";
}

function clearDraft() {
  localStorage.removeItem("promptimistic.draft");
}

function applyEntryToWorkspace(item, status) {
  entry.value = item.text;
  actionStep.value = item.actionStep || "";
  entryVisibility.value = item.visibility || "private";
  state.currentPrompt = item.prompt;
  promptText.textContent = item.prompt;
  promptTag.textContent = item.focus;
  timeTag.textContent = item.time;
  entryStatus.textContent = status;
}

function setEditingMode(item) {
  state.editingId = item.id;
  saveEntryButton.textContent = "Update reflection";
  cancelEditButton.hidden = false;
  applyEntryToWorkspace(item, "Editing saved reflection.");
  persistDraft();
}

function clearEditingMode(status = "Ready for a new reflection.") {
  state.editingId = null;
  saveEntryButton.textContent = "Save reflection";
  cancelEditButton.hidden = true;
  entryStatus.textContent = status;
}

function getFilteredEntries() {
  const query = entrySearch.value.trim().toLowerCase();
  const focus = entryFocusFilter.value;
  const date = entryDateFilter.value;

  return state.entries.filter((item) => {
    const text = item.text || "";
    const prompt = item.prompt || "";
    const focusLabel = item.focus || "";
    const matchesQuery =
      !query ||
      text.toLowerCase().includes(query) ||
      (item.actionStep || "").toLowerCase().includes(query) ||
      prompt.toLowerCase().includes(query) ||
      focusLabel.toLowerCase().includes(query);
    const matchesFocus = focus === "all" || focusLabel === focus;
    const matchesDate = !date || (item.createdAtISO && item.createdAtISO.startsWith(date));

    return matchesQuery && matchesFocus && matchesDate;
  });
}

function serializeEntries(entries) {
  if (!entries.length) {
    return "No saved reflections yet.";
  }

  return entries
    .map((item) => {
      return [
        item.prompt,
        `${item.focus} · ${item.createdAt} · ${item.wordCount} words${
          item.actionStep ? ` · Next step: ${item.actionDone ? "done" : "not yet"}` : ""
        }`,
        "",
        item.text,
        item.actionStep ? `\nNext step: ${item.actionStep}` : ""
      ].join("\n");
    })
    .join("\n\n---\n\n");
}

function downloadFile(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function openPdfPrintView(entries) {
  const printWindow = window.open("", "_blank");

  if (!printWindow) {
    entryStatus.textContent = "Allow popups to export PDF.";
    return;
  }

  const safeEntries = entries.map((item) => ({
    prompt: item.prompt,
    meta: `${item.focus} · ${item.createdAt} · ${item.wordCount} words`,
    text: item.text,
    actionStep: item.actionStep || "",
    actionDone: item.actionDone
  }));

  printWindow.document.write(`<!doctype html>
    <html>
      <head>
        <title>Promptimistic Reflections</title>
        <style>
          body { color: #0b2828; font-family: Georgia, serif; margin: 40px; line-height: 1.5; }
          h1 { font-family: system-ui, sans-serif; font-size: 20px; margin-bottom: 28px; }
          article { break-inside: avoid; margin-bottom: 30px; }
          h2 { font-size: 18px; margin: 0 0 8px; }
          small { color: #52706c; font-family: system-ui, sans-serif; }
          p { white-space: pre-wrap; }
        </style>
      </head>
      <body>
        <h1>Promptimistic Reflections</h1>
      </body>
    </html>`);

  safeEntries.forEach((item) => {
    const article = printWindow.document.createElement("article");
    const heading = printWindow.document.createElement("h2");
    const meta = printWindow.document.createElement("small");
    const text = printWindow.document.createElement("p");
    const action = printWindow.document.createElement("p");

    heading.textContent = item.prompt;
    meta.textContent = item.meta;
    text.textContent = item.text;
    action.textContent = item.actionStep
      ? `Next step: ${item.actionStep}${item.actionDone ? " (done)" : " (not yet)"}`
      : "";
    article.append(heading, meta, text);
    if (item.actionStep) {
      article.append(action);
    }
    printWindow.document.body.append(article);
  });

  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
}

function pickPrompt() {
  let focus = focusInput.value;
  const tone = toneInput.value;
  const focusKeys = Object.keys(prompts);

  if (focus === "surprise") {
    focus = focusKeys[Math.floor(Math.random() * focusKeys.length)];
  }

  const options = prompts[focus][tone];
  let next = options[Math.floor(Math.random() * options.length)];

  if (options.length > 1) {
    while (next === state.currentPrompt) {
      next = options[Math.floor(Math.random() * options.length)];
    }
  }

  state.currentPrompt = next;
  promptText.textContent = next;
  promptTag.textContent = prompts[focus].label;
  timeTag.textContent = `${timeInput.value} min`;
  state.currentPrompt = promptText.textContent;
  setTimer(Number(timeInput.value) * 60);
}

function renderEntries() {
  entriesList.innerHTML = "";
  const entries = getFilteredEntries();

  if (!state.entries.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "No saved reflections yet.";
    entriesList.append(empty);
    return;
  }

  if (!entries.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "No reflections match those filters.";
    entriesList.append(empty);
    return;
  }

  entries.forEach((item) => {
    const card = document.createElement("article");
    card.className = "saved-item";

    const prompt = document.createElement("p");
    prompt.className = "entry-prompt";
    prompt.textContent = item.prompt || "Untitled prompt";

    const preview = document.createElement("p");
    preview.className = "entry-preview";
    preview.textContent = item.text || "";

    const meta = document.createElement("small");
    meta.textContent = `${item.createdAt || "Saved"} · ${item.wordCount || 0} words · ${
      item.visibility === "public" ? "Public page" : "Private"
    }`;

    let actionCard = null;

    if (item.actionStep) {
      actionCard = document.createElement("div");
      actionCard.className = `next-step ${item.actionDone ? "is-done" : ""}`;

      const actionCopy = document.createElement("p");
      actionCopy.textContent = item.actionStep;

      const actionLabel = document.createElement("small");
      actionLabel.textContent = item.actionDone
        ? "You marked this next step done."
        : "Gentle follow-up: did you do this yet?";

      const actionToggle = document.createElement("button");
      actionToggle.type = "button";
      actionToggle.textContent = item.actionDone ? "Not yet" : "Done";
      actionToggle.addEventListener("click", () => {
        state.entries = state.entries.map((entryItem) =>
          entryItem.id === item.id
            ? {
                ...entryItem,
                actionDone: !entryItem.actionDone,
                updatedAtISO: new Date().toISOString()
              }
            : entryItem
        );
        persistEntries();
        entryStatus.textContent = item.actionDone
          ? "Next step moved back to not yet."
          : "Next step marked done.";
      });

      actionCard.append(actionLabel, actionCopy, actionToggle);
    }

    const open = document.createElement("button");
    open.type = "button";
    open.textContent = "Edit";
    open.addEventListener("click", () => {
      setEditingMode(item);
    });

    const visibility = document.createElement("button");
    visibility.type = "button";
    visibility.textContent = item.visibility === "public" ? "Make private" : "Share";
    visibility.addEventListener("click", () => {
      state.entries = state.entries.map((entryItem) =>
        entryItem.id === item.id
          ? {
              ...entryItem,
              visibility: entryItem.visibility === "public" ? "private" : "public",
              updatedAtISO: new Date().toISOString()
            }
          : entryItem
      );
      persistEntries();
      entryStatus.textContent =
        item.visibility === "public"
          ? "Reflection moved back to your private journal."
          : "Reflection shared on the public page.";
    });

    const remove = document.createElement("button");
    remove.type = "button";
    remove.textContent = "Delete";
    remove.addEventListener("click", () => {
      state.entries = state.entries.filter((entryItem) => entryItem.id !== item.id);
      persistEntries();

      if (state.editingId === item.id) {
        entry.value = "";
        clearDraft();
        clearEditingMode("Deleted reflection.");
      } else {
        entryStatus.textContent = "Deleted reflection.";
      }
    });

    const actions = document.createElement("div");
    actions.className = "entry-card-actions";
    actions.append(open, visibility, remove);

    card.append(prompt, preview, meta);
    if (actionCard) {
      card.append(actionCard);
    }
    card.append(actions);
    entriesList.append(card);
  });
}

function persistEntries() {
  localStorage.setItem("promptimistic.entries", JSON.stringify(state.entries));
  renderEntries();
}

function setTimer(seconds) {
  window.clearInterval(state.timerId);
  state.timerId = null;
  state.secondsLeft = seconds;
  startTimer.querySelector("span").textContent = "▶";
  renderTimer();
}

function renderTimer() {
  const minutes = Math.floor(state.secondsLeft / 60).toString().padStart(2, "0");
  const seconds = (state.secondsLeft % 60).toString().padStart(2, "0");
  timer.textContent = `${minutes}:${seconds}`;
}

function toggleTimer() {
  if (state.timerId) {
    window.clearInterval(state.timerId);
    state.timerId = null;
    startTimer.querySelector("span").textContent = "▶";
    return;
  }

  startTimer.querySelector("span").textContent = "Ⅱ";
  state.timerId = window.setInterval(() => {
    state.secondsLeft = Math.max(0, state.secondsLeft - 1);
    renderTimer();

    if (state.secondsLeft === 0) {
      window.clearInterval(state.timerId);
      state.timerId = null;
      startTimer.querySelector("span").textContent = "▶";
    }
  }, 1000);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  pickPrompt();
});

saveEntryButton.addEventListener("click", () => {
  const text = entry.value.trim();
  const nextAction = actionStep.value.trim();

  if (!text) {
    entryStatus.textContent = "Write a reflection before saving.";
    entry.focus();
    return;
  }

  if (state.editingId) {
    state.entries = state.entries.map((item) =>
      item.id === state.editingId
        ? {
            ...item,
            text,
            prompt: state.currentPrompt,
            focus: promptTag.textContent,
            time: timeTag.textContent,
            visibility: entryVisibility.value,
            actionStep: nextAction,
            actionDone: item.actionStep === nextAction ? item.actionDone : false,
            wordCount: getWordCount(text),
            updatedAtISO: new Date().toISOString()
          }
        : item
    );
  } else {
    const now = new Date();
    const item = {
      id: globalThis.crypto?.randomUUID?.() || String(Date.now()),
      text,
      prompt: state.currentPrompt,
      focus: promptTag.textContent,
      time: timeTag.textContent,
      visibility: entryVisibility.value,
      actionStep: nextAction,
      actionDone: false,
      wordCount: getWordCount(text),
      createdAt: formatEntryDate(now),
      createdAtISO: now.toISOString()
    };

    state.entries = [item, ...state.entries].slice(0, 50);
  }

  persistEntries();
  entry.value = "";
  actionStep.value = "";
  entryVisibility.value = "private";
  clearDraft();
  clearEditingMode(state.editingId ? "Reflection updated." : "Reflection saved.");
});

cancelEditButton.addEventListener("click", () => {
  state.editingId = null;
  entry.value = "";
  actionStep.value = "";
  entryVisibility.value = "private";
  clearDraft();
  clearEditingMode("Edit canceled.");
});

entry.addEventListener("input", persistDraft);
actionStep.addEventListener("input", persistDraft);
entrySearch.addEventListener("input", renderEntries);
entryFocusFilter.addEventListener("change", renderEntries);
entryDateFilter.addEventListener("change", renderEntries);

copyAllEntriesButton.addEventListener("click", async () => {
  await navigator.clipboard.writeText(serializeEntries(state.entries));
  entryStatus.textContent = "Copied reflections.";
});

downloadTxtButton.addEventListener("click", () => {
  downloadFile("promptimistic-reflections.txt", serializeEntries(state.entries), "text/plain");
  entryStatus.textContent = "Downloaded TXT.";
});

downloadPdfButton.addEventListener("click", () => {
  openPdfPrintView(state.entries);
  entryStatus.textContent = "PDF export opened.";
});

timeInput.addEventListener("change", () => {
  timeTag.textContent = `${timeInput.value} min`;
  setTimer(Number(timeInput.value) * 60);
});

startTimer.addEventListener("click", toggleTimer);

resetTimer.addEventListener("click", () => {
  setTimer(Number(timeInput.value) * 60);
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  themeToggle.querySelector("span").textContent = isDark ? "☼" : "☾";
  localStorage.setItem("promptimistic.theme", isDark ? "dark" : "light");
});

if (
  (localStorage.getItem("promptimistic.theme") ||
    localStorage.getItem("innerWord.theme") ||
    localStorage.getItem("promptly.theme") ||
    localStorage.getItem("betterPages.theme")) === "dark"
) {
  document.body.classList.add("dark");
  themeToggle.querySelector("span").textContent = "☼";
}

state.currentPrompt = promptText.textContent.trim();
renderDailyPrompt();
const draft = getDraft();

if (draft?.text) {
  applyEntryToWorkspace(
    {
      text: draft.text,
      prompt: draft.prompt || state.currentPrompt,
      focus: draft.focus || promptTag.textContent,
      time: draft.time || timeTag.textContent
    },
    "Draft restored."
  );
}

renderEntries();
renderTimer();
