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

const state = {
  currentPrompt: "",
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
const newPromptButton = document.querySelector("#newPrompt");
const copyButton = document.querySelector("#copyPrompt");
const entry = document.querySelector("#entry");
const saveEntryButton = document.querySelector("#saveEntry");
const entryStatus = document.querySelector("#entryStatus");
const entriesList = document.querySelector("#entriesList");
const clearEntriesButton = document.querySelector("#clearEntries");
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
    return Array.isArray(entries) ? entries : [];
  } catch {
    return [];
  }
}

function getWordCount(text) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function pickPrompt() {
  const focus = focusInput.value;
  const tone = toneInput.value;
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
  setTimer(Number(timeInput.value) * 60);
}

function renderEntries() {
  entriesList.innerHTML = "";

  if (!state.entries.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "No saved reflections yet.";
    entriesList.append(empty);
    return;
  }

  state.entries.forEach((item) => {
    const card = document.createElement("article");
    card.className = "saved-item";

    const prompt = document.createElement("p");
    prompt.className = "entry-prompt";
    prompt.textContent = item.prompt;

    const preview = document.createElement("p");
    preview.className = "entry-preview";
    preview.textContent = item.text;

    const meta = document.createElement("small");
    meta.textContent = `${item.createdAt} · ${item.wordCount} words`;

    const open = document.createElement("button");
    open.type = "button";
    open.textContent = "Open reflection";
    open.addEventListener("click", () => {
      entry.value = item.text;
      state.currentPrompt = item.prompt;
      promptText.textContent = item.prompt;
      promptTag.textContent = item.focus;
      timeTag.textContent = item.time;
      entryStatus.textContent = "Loaded saved reflection.";
    });

    card.append(prompt, preview, meta, open);
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

newPromptButton.addEventListener("click", pickPrompt);

copyButton.addEventListener("click", async () => {
  await navigator.clipboard.writeText(state.currentPrompt);
  copyButton.textContent = "Copied";
  window.setTimeout(() => {
    copyButton.textContent = "Copy";
  }, 1200);
});

saveEntryButton.addEventListener("click", () => {
  const text = entry.value.trim();

  if (!text) {
    entryStatus.textContent = "Write a reflection before saving.";
    entry.focus();
    return;
  }

  const item = {
    id: globalThis.crypto?.randomUUID?.() || String(Date.now()),
    text,
    prompt: state.currentPrompt,
    focus: promptTag.textContent,
    time: timeTag.textContent,
    wordCount: getWordCount(text),
    createdAt: new Intl.DateTimeFormat(undefined, {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit"
    }).format(new Date())
  };

  state.entries = [item, ...state.entries].slice(0, 30);
  persistEntries();
  entry.value = "";
  entryStatus.textContent = "Reflection saved.";
});

clearEntriesButton.addEventListener("click", () => {
  state.entries = [];
  persistEntries();
  entryStatus.textContent = "Saved reflections cleared.";
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
renderEntries();
renderTimer();
