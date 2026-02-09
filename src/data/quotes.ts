export interface Quote {
  id: string
  text: string
  attribution: string
  platform: "reddit" | "lifehacker" | "appaddict"
  url: string
}

export const quotes: Quote[] = [
  {
    id: "quote-8",
    text: "The window management tool Apple should have built",
    attribution: "LifeHacker Review",
    platform: "lifehacker",
    url: "https://lifehacker.com/tech/swift-shift-is-the-window-management-tool-apple-should-have-built",
  },
  {
    id: "quote-1",
    text: "Simplicity. Freedom. What else? Genius.",
    attribution: "Community Member",
    platform: "reddit",
    url: "https://reddit.com/r/macapps/comments/1eiyz37/",
  },
  {
    id: "quote-2",
    text: "Wow, it's genuinely brilliant! Clean and simple too, exactly what I was looking for",
    attribution: "Jaiden97",
    platform: "reddit",
    url: "https://reddit.com/r/MacOS/comments/18ujz24/",
  },
  {
    id: "quote-3",
    text: "This utility is awesome. Will likely save me a lot of time!",
    attribution: "Community User",
    platform: "reddit",
    url: "https://reddit.com/r/MacOS/comments/18ujz24/",
  },
  {
    id: "quote-4",
    text: "I would definitely pay a few bucks to support development. It's one of those 'install and forget it's not part of the OS' apps—when I get on a machine without it, I miss it.",
    attribution: "Dedicated User",
    platform: "reddit",
    url: "https://reddit.com/r/MacOS/comments/18ujz24/",
  },
  {
    id: "quote-5",
    text: "This is pretty great, especially for trackpad users. Thanks!",
    attribution: "blissed_off",
    platform: "reddit",
    url: "https://reddit.com/r/MacOS/comments/18ujz24/",
  },
  {
    id: "quote-6",
    text: "SwiftShift moves and resizes windows way smoother than other tools",
    attribution: "Power User",
    platform: "reddit",
    url: "https://reddit.com/r/macapps/comments/1eiyz37/",
  },
  {
    id: "quote-7",
    text: "I love this—well done!",
    attribution: "scottlewis101",
    platform: "reddit",
    url: "https://reddit.com/r/MacOS/comments/18ujz24/",
  },
]
