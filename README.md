# U-Script

**Stories that grip. Facts that hold.**

U-Script is a script studio for story-driven informative channels. Pick a topic (or hit **Amaze me**), a genre, a length and a language. U-Script writes a director-grade prompt for Claude, ChatGPT or Gemini. Paste the AI's answer back and you get a scene-by-scene board with voiceover, ComfyUI visual prompts, music cues and sound effects, each downloadable as its own `.md` file.

Everything here runs on free tiers: GitHub Pages for hosting, Firebase Spark for Google sign-in and cloud sync.

## Features

- **Studio**: 17 genres (mystery, true crime, horror, survival, love, history, war, science & space, disaster, biography, scams, nature, psychology, tech, mythology, unsolved, motivation); lengths from 45 seconds to 30 minutes; narrator, hook, ending, intensity, audience, visual style, music direction and pace.
- **Truth Lock**: for real-events stories, the prompt requires research before writing, 2–3 independent sources per fact, a truth ledger, no invented quotes, and cutting anything unverifiable.
- **One-tap AI launch**: copies the prompt and opens Claude, ChatGPT or Gemini.
- **Scene Board**: turns the AI's JSON into scene cards. Downloads: voiceover, ComfyUI visuals (with negative and motion prompts), music, SFX, full script, project JSON.
- **Voice preview player**: every scene has a **Listen** button, and starting one scene stops the other. Hindi and English voices; pauses (`...`, `[pause]`, sentence ends) become real silences; delivery notes (slow, deep, whisper, *pause after 'words'*) shape speed and tone; speed, tone and pause-length controls; Play all. It uses the free voices built into the browser. The most natural Hindi comes from **Microsoft Edge** (Swara / Madhur Natural) or **Chrome** (Google हिन्दी). New scripts include a Devanagari `tts_text` per scene so the Hindi voice reads correctly.
- **Voice Lab**: a 20-line dialect test in Hinglish, English, Urdu or Nepali. It builds a *Voice DNA* profile that is added to every future prompt, so scripts sound like you.
- **Profiles & library**: Google sign-in syncs your profile, Voice DNA and scripts across devices. Without signing in, everything is saved in the browser.

## Run it

It's a static site; no build step.

```bash
# any static server works
npx serve .
# or
python3 -m http.server 8000
```

Open `http://localhost:8000`. Open it through a server, not by double-clicking `index.html`: Firebase sign-in doesn't work from `file://`.

## Publish free on GitHub Pages

1. Repo → **Settings → Pages**.
2. Source: **Deploy from a branch** → `main` → `/ (root)` → **Save**.
3. After a minute the app is live at `https://prasant793001-stack.github.io/U-Script/`.

## Turn on Google sign-in (free, about 10 minutes)

The app works without this step (data stays in the browser). To add Google login and cloud sync:

1. **Create the project.** Go to <https://console.firebase.google.com> → **Add project** → name it `u-script` → Google Analytics is optional → create. You stay on the free **Spark** plan; no card is needed.
2. **Register the web app.** Project overview → **</>** (Web) → nickname `U-Script` → **Register app**. Copy the `firebaseConfig` values into [`firebase-config.js`](firebase-config.js).
3. **Enable Google login.** **Build → Authentication → Get started → Sign-in method → Google → Enable**, pick a support email, **Save**. Then **Authentication → Settings → Authorized domains → Add domain** and add:
   - `prasant793001-stack.github.io`
   - `localhost` (usually already listed)
4. **Create the database.** **Build → Firestore Database → Create database** → choose the location closest to your users (e.g. `asia-south1` Mumbai or `me-central1` Doha) → **Start in production mode**.
5. **Lock it down.** Firestore → **Rules** → replace everything with the contents of [`firestore.rules`](firestore.rules) → **Publish**. Each user can only read and write their own data.
6. Commit and push `firebase-config.js`. The **Continue with Google** button appears on the next load.

> The Firebase web config is not a secret. It's meant to be public. Your data is protected by the Firestore rules and the authorized-domains list.

### What "free" covers

The Spark plan includes Google sign-in and a free Firestore quota (storage plus a daily allowance of reads and writes). That is plenty for a creator and a small team. Check the current limits at <https://firebase.google.com/pricing>. U-Script reads your data once per sign-in and writes only when you save.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole app (HTML, CSS, JS) |
| `firebase-config.js` | Your Firebase web keys (paste them here) |
| `firestore.rules` | Security rules to paste into the Firebase console |
| `manifest.webmanifest`, `icon.svg` | Lets phones "Add to Home Screen" as an app |

## Data layout

```
users/{uid}/items/profile        name, channel, language, Voice DNA per language
users/{uid}/items/proj_<id>      brief, generated prompt, pasted AI result
```

## A note on "100% true"

Truth Lock makes the AI research, source and log every fact, and it flags anything it couldn't verify. AI can still make mistakes, so use a model with web search turned on and check the yellow *needs verification* / *disputed* rows in the truth ledger before recording.
