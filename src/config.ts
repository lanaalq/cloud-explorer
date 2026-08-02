// The three photo booth looks - see CONFIG.photoBoothMode below.
export type CameraMode = "vintage" | "modern" | "polaroid";

/* ============================================================
   CONFIG - edit these values to make the badge your own!
   ============================================================ */
export const CONFIG = {
  // 2–4 hex colors. The background will drift smoothly between them.
  // Visit https://coolors.co/palettes/trending for colors!
  // Colors must start with #
  gradientColors: ["#002d73", "#742f8b", "#742f8b"],

  // Your name (or nickname) as a plain string. Shows on the badge and sets
  // the initials in the avatar circle.
  name: "Lana Alqahtani",

  // One short sentence, shown under "Fun fact" on the badge. Keep it to
  // a single line - long text will wrap and may get cramped.
  funFact: "I treat naps like a hobby.",

  // true if you're running/deploying this from a cloud VM, false if it's
  // just running on your own laptop. Only changes the "My Laptop 💻" vs
  // "Alibaba Cloud ☁️" text on the badge - purely cosmetic.
  isOnCloud: false,

  // true/false. Lets students flip the card and take a photo with their
  // front camera. Turn off if the device/browser running this has no
  // camera, or you'd rather ship the badge without it.
  enablePhotoBooth: true,

  // The photo booth's look, baked into every shot you take. Only matters
  // if enablePhotoBooth is true above. One of these exact strings:
  //   "vintage"  - black & white film, light leaks, dust and scratches
  //   "modern"   - sharp and punchy, medium-high contrast
  //   "polaroid" - soft focus, warm and faded, like an instant camera
  photoBoothMode: "polaroid" as CameraMode,

  // The movie/game/show/anime shown in the poster frame on the badge.
  favorite: {
    // Which word appears in "My favorite ___ is..." on the badge. One of
    // these exact strings: "movie" | "game" | "tv show" | "anime"
    category: "movie",
    // The title, shown as plain text under the poster.
    title: "the Devil wears Prada ",
    // A direct image URL (or a local file like ./posters/mine.jpg) for the
    // poster/cover art. Go to Google -> search the title -> right-click
    // the poster -> "Copy Image Address" -> paste it in here.
    posterUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH_f60RbVZxkb01Oe465MUBnmPHcF3T_-d22k2KiHTHKbg5xcAPxZXw22O8kPTZtbWHtELe6FyVZ0LfUvy_NK4wW2EzuROtN8Tl5ZHBW1_sQ&s=10",
  },
};
