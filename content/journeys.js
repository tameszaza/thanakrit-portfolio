export const journeys = {
  "kvis-sc": {
    role: "I led the IT team and built room and sports-field bookings, equipment lending, and the council feed.",
    frames: [
      { image: "kvis-bookings.webp", label: "Reserve a room", alt: "Weekly room timetable with available reservation slots", caption: "Check a room and reserve a slot.", wide: true },
    ],
    flow: {
      caption: "What changed in the booking system",
      steps: [["Shared spreadsheet", "Conflicting bookings"], ["Live timetable", "Rooms and sports fields"], ["Student services", "Equipment, news, feedback"]],
    },
  },
  "kampung-quest": {
    role: "I carried accessibility preferences into the quest chat and improved the slower chat and activity requests.",
    frames: [
      { image: "kampung-accessibility.webp", label: "Set preferences", alt: "Accessibility preferences on the mobile onboarding screen", caption: "Set mobility and access preferences.", portrait: true },
      { image: "kampung-assistant.webp", label: "Find an activity", alt: "Mobile conversation with the guided activity assistant", caption: "Find an activity with the assistant.", portrait: true },
      { image: "kampung-coordination.webp", label: "Make a group plan", alt: "Group conversation and the activity card it produces", caption: "Turn the conversation into a group plan.", wide: true },
    ],
  },
  tamestorage: {
    role: "I set up the NAS on a repurposed Lenovo, integrated the file and note workflows, and added two-way calendar sync.",
    frames: [
      { image: "tamestorage-files.webp", label: "My Files", alt: "Tamestorage file manager displaying a sample Studio folder", caption: "My Files with a sample project folder.", wide: true },
      { image: "storage-network.svg", label: "NAS topology", alt: "Network diagram for the primary NAS and backup disk", caption: "The home storage network.", wide: true },
      { image: "nas-notebook.webp", label: "Network notebook", alt: "Thanakrit’s handwritten sketch connecting five home server services", caption: "The original network notebook sketch.", wide: true },
    ],
    flow: {
      caption: "From handwritten notes to searchable pages",
      steps: [["Export", "Goodnotes over WebDAV"], ["Link the PDF", "NAS → Obsidian"], ["Extract text", "Native text or cached OCR"], ["Find the page", "Search with page references"]],
    },
  },
  mgans: {
    role: "Pasatorn Soikiri and I share first authorship. I worked on multi-generator anomaly detection for synthetic speech.",
    frames: [
      { image: "mgans-paper-architecture.webp", label: "Model architectures", alt: "The paper’s published architectures for eD-AnoGAN and RES-MGANomaly", caption: "Model architectures from Figure 1. © 2025 IEEE.", wide: true },
      { image: "mgans-paper-reconstructions.webp", label: "Reconstructions", alt: "Input and reconstructed speech spectrograms for four model variants", caption: "Spectrogram reconstructions from Figure 3. © 2025 IEEE.", wide: true },
      { image: "mgans-talk.webp", label: "Presenting the work", alt: "ICITEE presentation with the model architecture on screen", caption: "Presenting the architecture at ICITEE 2025." },
      { image: "mgans-venue.webp", label: "ICITEE 2025", alt: "Thanakrit beside the ICITEE conference backdrop", caption: "ICITEE 2025." },
    ],
  },
  sleeppilot: {
    role: "I built the FAQ assistant, added conversation history, and refined the embedding model and retrieval scoring.",
    frames: [
      { image: "sleeppilot-dialog.webp", label: "An answer with sources", alt: "SleepPilot Coach answering a question about wearables and showing its FAQ sources", caption: "A wearable-device question, answered from the indexed FAQ.", portrait: true, wide: true },
    ],
    flow: {
      caption: "How SleepPilot answers a question",
      steps: [["Ask", "Include recent context"], ["Embed", "Local sentence model"], ["Retrieve", "Rank 15 FAQs with cosine similarity"], ["Reply", "Answer from matching FAQs"]],
    },
  },
  luckdee: {
    role: "I developed the Django storefront and worked on lesson video delivery and course imagery.",
    frames: [
      { image: "simplesci-catalog.webp", label: "Course catalog", alt: "SimpleSci catalog with filters and three example course cards", caption: "Filter courses by subject and level.", wide: true },
      { image: "simplesci-course.webp", label: "Course details", alt: "SimpleSci’s example Biology Olympiad course with lesson topics and enrollment details", caption: "A demo course with lesson topics and enrollment details.", wide: true },
    ],
    flow: {
      caption: "From browsing to the first lesson",
      steps: [["Browse", "Choose a course"], ["Pay", "Submit a transfer slip"], ["Approve", "Tutor reviews payment"], ["Study", "Private videos and documents"]],
    },
  },
  sentctf: {
    role: "I competed as part of Team RIPGREP in the NTU Cybersecurity Club competition.",
    frames: [
      { image: "sentctf-certificate.webp", label: "Third-place certificate", alt: "Thanakrit Damduan’s SentCTF 2026 third-place certificate", caption: "My third-place certificate.", wide: true },
    ],
  },
};
