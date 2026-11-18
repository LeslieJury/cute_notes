// This app saves notes in the browser.

type NoteMood = "sunny" | "cozy" | "dreamy" | "focused";

interface Note {
  id: number;
  title: string;
  content: string;
  mood: NoteMood;
  createdAt: string;
}

const starterNotes: Note[] = [
  {
    id: 1,
    title: "Welcome, little note!",
    content: "Write down a thought, a plan, or something that made you smile.",
    mood: "sunny",
    createdAt: "Today",
  },
  {
    id: 2,
    title: "Tiny goal",
    content: "Practice TypeScript for 20 minutes and celebrate the progress!",
    mood: "focused",
    createdAt: "Yesterday",
  },

];

class NoteBook {
  private notes: Note[];
  private nextId: number;

  constructor() {
    this.notes = this.loadNotes();
    this.nextId = this.getNextId();
  }

  private loadNotes(): Note[] {
    const savedNotes = localStorage.getItem("cute-notes");
    if (!savedNotes) return starterNotes;
    try {
      return JSON.parse(savedNotes) as Note[];
    } catch {
      // Uses the starter notes if saved data is broken.
      return starterNotes;
    }
  }

  private getNextId(): number {
    return this.notes.reduce(
      (largestId, note) => Math.max(largestId, note.id),
      0,
    ) + 1;
  }

  private save(): void {
    localStorage.setItem("cute-notes", JSON.stringify(this.notes));
  }

  public getAll(): Note[] {
    return [...this.notes];
  }

  public add(title: string, content: string, mood: NoteMood): void {
    if (!title.trim() || !content.trim()) {
      throw new Error("Please add both a title and some note text.");
    }
    this.notes.unshift({
      id: this.nextId,
      title: title.trim(),
      content: content.trim(),
      mood,
      createdAt: new Date().toLocaleDateString(),
    });
    this.nextId += 1;
    this.save();
  }

  public remove(id: number): void {
    this.notes = this.notes.filter((note) => note.id !== id);
    this.save();
  }
}

const notebook = new NoteBook();
const noteForm = document.querySelector<HTMLFormElement>("#note-form")!;
const titleInput = document.querySelector<HTMLInputElement>("#title")!;
const contentInput = document.querySelector<HTMLTextAreaElement>("#content")!;
const moodInput = document.querySelector<HTMLSelectElement>("#mood")!;
const searchInput = document.querySelector<HTMLInputElement>("#search")!;
const noteList = document.querySelector<HTMLElement>("#note-list")!;
const noteCount = document.querySelector<HTMLElement>("#note-count")!;
const message = document.querySelector<HTMLElement>("#message")!;

// This function counts words by calling itself.
function countWords(words: string[]): number {
  if (words.length === 0) return 0;
  return 1 + countWords(words.slice(1));
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    };
    return entities[character];
  });
}

function moodEmoji(mood: NoteMood): string {
  const emojis: Record<NoteMood, string> = {
    sunny: "☀️",
    cozy: "🧸",
    dreamy: "🌙",
    focused: "🌱",
  };
  return emojis[mood];
}

function renderNotes(notes: Note[]): void {
  noteCount.textContent = `${notes.length} ${notes.length === 1 ? "note" : "notes"}`;
  if (notes.length === 0) {
    noteList.innerHTML = '<p class="empty-state">No notes found. Try a new thought! ✨</p>';
    return;
  }
  noteList.innerHTML = notes.map((note) => `
    <article class="note-card ${note.mood}">
      <div class="note-topline"><span class="mood-pill">${moodEmoji(note.mood)} ${note.mood}</span>
        <button class="delete-button" data-id="${note.id}" aria-label="Delete ${escapeHtml(note.title)}">×</button></div>
      <h2>${escapeHtml(note.title)}</h2><p>${escapeHtml(note.content)}</p>
      <footer>${escapeHtml(note.createdAt)} · ${countWords(note.content.split(/\s+/))} words</footer>
    </article>`).join("");
}

function filterNotes(): void {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const filteredNotes = notebook.getAll().filter((note) => `${note.title} ${note.content}`.toLowerCase().includes(searchTerm));
  renderNotes(filteredNotes);
}

// This waits briefly before showing the saved message.
async function showSaveMessage(): Promise<void> {
  message.textContent = "Saving your tiny thought...";
  await new Promise((resolve) => window.setTimeout(resolve, 350));
  message.textContent = "Saved with a sprinkle of happy ✨";
  window.setTimeout(() => { message.textContent = ""; }, 2500);
}

noteForm.addEventListener("submit", async (event: SubmitEvent) => {
  event.preventDefault();
  try {
    notebook.add(titleInput.value, contentInput.value, moodInput.value as NoteMood);
    noteForm.reset();
    filterNotes();
    await showSaveMessage();
  } catch (error) {
    message.textContent = error instanceof Error ? error.message : "Something went wrong.";
  }
});

searchInput.addEventListener("input", filterNotes);
noteList.addEventListener("click", (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  const deleteButton = target.closest<HTMLButtonElement>(".delete-button");
  if (!deleteButton) return;
  notebook.remove(Number(deleteButton.dataset.id));
  filterNotes();
});

renderNotes(notebook.getAll());
