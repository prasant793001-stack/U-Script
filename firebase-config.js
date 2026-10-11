// U-Script · Firebase settings
// ------------------------------------------------------------
// 1. Create a free Firebase project (Spark plan, no card needed).
// 2. Project settings → General → Your apps → Web app (</>) → copy the config.
// 3. Paste the values below, commit, and push.
//
// These values are NOT secret. Firebase web keys are designed to be public;
// your data is protected by firestore.rules and the "Authorized domains" list.
// Full walkthrough: README.md → "Turn on Google sign-in".

export const firebaseConfig = {
  apiKey: "PASTE_YOUR_API_KEY",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:0000000000000000000000"
};
