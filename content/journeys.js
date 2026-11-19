export const journeys = {
  "kvis-sc": {
    role: "I led the student IT team and replaced a shared booking spreadsheet with a live calendar.",
    frames: [
      { image: "kvis-bookings.webp", label: "Reserve a room", alt: "Weekly room timetable with available reservation slots", caption: "See which rooms are free, then book a time.", wide: true },
    ],
  },
  "kampung-quest": {
    role: "I made the activity chat remember access needs, such as avoiding stairs, and sped up slow requests.",
    frames: [
      { image: "kampung-accessibility.webp", label: "Set preferences", alt: "Accessibility preferences on the mobile onboarding screen", caption: "Tell the assistant how far you can walk and whether stairs are a problem.", portrait: true },
      { image: "kampung-assistant.webp", label: "Find an activity", alt: "Mobile conversation with the guided activity assistant", caption: "Find an activity that fits those needs.", portrait: true },
      { image: "kampung-coordination.webp", label: "Make a group plan", alt: "Group conversation and the activity card it produces", caption: "Agree on a plan with the group.", wide: true },
    ],
  },
  tamestorage: {
    role: "I set up the storage and backups, made my iPad notes searchable, and synced calendar changes across devices.",
    frames: [
      { image: "tamestorage-files.webp", label: "My Files", alt: "Tamestorage file manager displaying a sample Studio folder", caption: "My Files with a sample project folder.", wide: true },
      { image: "storage-network.svg", label: "Storage and backups", alt: "Network diagram for the primary NAS and backup disk", caption: "One drive holds my files. A second drive stores a backup.", wide: true },
      { image: "nas-notebook.webp", label: "Network notebook", alt: "Thanakrit’s handwritten sketch connecting five home server services", caption: "The original network notebook sketch.", wide: true },
    ],
  },
  mgans: {
    role: "Pasatorn Soikiri and I share first authorship. I worked on the model that spots synthetic speech.",
    frames: [
      { image: "mgans.svg", label: "Results", alt: "eD-AnoGAN scores of 0.9211 ROC AUC on WaveFake and 0.8428 on ASVspoof2019 LA", caption: "Closer to 1 is better. The score drops on a different set of recordings.", wide: true },
      { image: "mgans-paper-architecture.webp", label: "Model architectures", alt: "The paper’s published architectures for eD-AnoGAN and RES-MGANomaly", caption: "Model architectures from Figure 1. © 2025 IEEE.", wide: true },
      { image: "mgans-paper-reconstructions.webp", label: "Original and rebuilt audio", alt: "Input and reconstructed speech spectrograms for four model variants", caption: "Original and rebuilt sound patterns from Figure 3. © 2025 IEEE.", wide: true },
      { image: "mgans-talk.webp", label: "Presenting the work", alt: "ICITEE presentation with the model architecture on screen", caption: "Presenting the architecture at ICITEE 2025." },
      { image: "mgans-venue.webp", label: "ICITEE 2025", alt: "Thanakrit beside the ICITEE conference backdrop", caption: "ICITEE 2025." },
    ],
  },
  sleeppilot: {
    role: "I built the search that finds the right help article and added follow-up questions that carry on the conversation.",
    frames: [
      { image: "sleeppilot-dialog.webp", label: "An answer with sources", alt: "SleepPilot Coach answering a question about wearables and showing its FAQ sources", caption: "Asked if a watch is required, the assistant answers and shows the help article it used.", portrait: true, wide: true },
    ],
  },
  luckdee: {
    role: "I built the storefront and worked on how lesson videos and course images are shown.",
    frames: [
      { image: "simplesci-catalog.webp", label: "Courses", alt: "English SimpleSci course catalog with subject and level filters", caption: "Browse by subject or level.", wide: true },
      { image: "simplesci-course.webp", label: "Course page", alt: "English SimpleSci course page with topics and enrollment details", caption: "See what the course covers before enrolling.", wide: true },
      { image: "simplesci-checkout.webp", label: "Checkout", alt: "English SimpleSci checkout where students can upload a demo bank transfer receipt", caption: "Upload a bank transfer receipt for the tutor to review.", wide: true },
    ],
  },
  sentctf: {
    role: "I competed with Team RIPGREP.",
    frames: [
      { image: "sentctf-certificate.webp", label: "Third-place certificate", alt: "Thanakrit Damduan’s SentCTF 2026 third-place certificate", caption: "My third-place certificate.", wide: true },
    ],
  },
};
