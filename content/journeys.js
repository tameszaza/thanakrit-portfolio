export const journeys = {
  "kvis-sc": {
    role: "I led the IT team and built room and sports-field bookings, equipment lending, and the council feed.",
    frames: [
      { image: "kvis-bookings.webp", alt: "Weekly room timetable with available reservation slots", caption: "Check a room and reserve a slot.", wide: true },
    ],
    flow: {
      caption: "What changed in the booking system",
      steps: [["Shared spreadsheet", "Conflicting bookings"], ["Live timetable", "Rooms and sports fields"], ["Student services", "Equipment, news, feedback"]],
    },
  },
  "kampung-quest": {
    role: "I carried accessibility preferences into the quest chat and improved the slower chat and activity requests.",
    frames: [
      { image: "kampung-accessibility.webp", alt: "Accessibility preferences on the mobile onboarding screen", caption: "Set mobility and access preferences.", portrait: true },
      { image: "kampung-assistant.webp", alt: "Mobile conversation with the guided activity assistant", caption: "Find an activity with the assistant.", portrait: true },
      { image: "kampung-coordination.webp", alt: "Group conversation and the activity card it produces", caption: "Turn the conversation into a group plan.", wide: true },
    ],
  },
  tamestorage: {
    role: "I set up the NAS on a repurposed Lenovo, integrated the file and note workflows, and added two-way calendar sync.",
    frames: [
      { image: "nas-notebook.webp", alt: "Thanakrit’s handwritten sketch connecting five home server services", caption: "The original network notebook sketch.", wide: true },
    ],
    flow: {
      caption: "From handwritten notes to searchable pages",
      steps: [["Export", "Goodnotes over WebDAV"], ["Link the PDF", "NAS → Obsidian"], ["Extract text", "Native text or cached OCR"], ["Find the page", "Search with page references"]],
    },
  },
  mgans: {
    role: "I co-authored the ICITEE paper with Pasatorn Soikiri and worked on multi-generator anomaly detection for synthetic speech.",
    frames: [
      { image: "mgans-talk.webp", alt: "ICITEE presentation with the model architecture on screen", caption: "Presenting the architecture at ICITEE 2025." },
      { image: "mgans-venue.webp", alt: "Thanakrit beside the ICITEE conference backdrop", caption: "ICITEE 2025." },
    ],
    flow: {
      caption: "The eD-AnoGAN experiment",
      steps: [["Speech samples", "Mel spectrograms"], ["Assign clusters", "Multiple generator–encoder branches"], ["Score anomalies", "Reconstruction and latent consistency"], ["Evaluate", "WaveFake and ASVspoof2019 LA"]],
    },
  },
  sleeppilot: {
    role: "I built the FAQ assistant, added conversation history, and refined the embedding model and retrieval scoring.",
    frames: [],
    sample: { question: "Does SleepPilot work without a wearable device?", source: "Yes. SleepPilot can work without a wearable device. Users can manually enter their bedtime, wake-up time, sleep quality, and daily habits." },
    flow: {
      caption: "How SleepPilot answers a question",
      steps: [["Ask", "Include recent context"], ["Embed", "Local sentence model"], ["Retrieve", "Rank 15 FAQs with cosine similarity"], ["Reply", "Answer from matching FAQs"]],
    },
  },
  luckdee: {
    role: "I developed the Django storefront and worked on lesson video delivery and course imagery.",
    frames: [
      { image: "luckdee-chemistry.webp", alt: "Second original P’ Luckdee SimpleSci course poster", caption: "Original SimpleSci course artwork.", portrait: true, wide: true },
    ],
    flow: {
      caption: "From browsing to the first lesson",
      steps: [["Browse", "Choose a course"], ["Pay", "Submit a transfer slip"], ["Approve", "Tutor reviews payment"], ["Study", "Private videos and documents"]],
    },
  },
  sentctf: {
    role: "I competed as part of Team RIPGREP in the NTU Cybersecurity Club competition.",
    frames: [
      { image: "sentctf-team.webp", alt: "Team RIPGREP posing with their certificates at SentCTF", caption: "Team RIPGREP after the awards.", wide: true },
    ],
  },
};
