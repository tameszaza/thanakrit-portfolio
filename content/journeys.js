export const journeys = {
  "kvis-sc": {
    about: "Before this site, students used a shared spreadsheet to book rooms, and two groups could end up with the same slot. The live calendar gives everyone one place to see what’s free. The same site also handles equipment loans and student announcements.",
    role: "I led the student IT team and replaced a shared booking spreadsheet with a live calendar.",
    frames: [
      { image: "kvis-bookings.webp", label: "Reserve a room", alt: "Weekly room timetable with available reservation slots", caption: "See which rooms are free, then book a time.", wide: true },
    ],
  },
  "kampung-quest": {
    about: "A neighbour can tell the app what they enjoy, how far they can walk, and what would make an outing accessible. The app suggests activities that fit. Neighbours can then invite each other and use a group chat to settle the details.",
    role: "I made the activity chat remember access needs, such as avoiding stairs, and sped up slow requests.",
    frames: [
      { image: "kampung-accessibility.webp", label: "Set preferences", alt: "Accessibility preferences on the mobile onboarding screen", caption: "Tell the assistant how far you can walk and whether stairs are a problem.", portrait: true },
      { image: "kampung-assistant.webp", label: "Find an activity", alt: "Mobile conversation with the guided activity assistant", caption: "Find an activity that fits those needs.", portrait: true },
      { image: "kampung-coordination.webp", label: "Make a group plan", alt: "Group conversation and the activity card it produces", caption: "Agree on a plan with the group.", wide: true },
    ],
  },
  tamestorage: {
    about: "I use a web page to reach the files on my old laptop from other devices. When I export a PDF from my iPad, the server links it in Obsidian and reads the pages so I can search them later. A second drive holds a backup.",
    role: "I set up the storage and backups, made my iPad notes searchable, and synced calendar changes across devices.",
    frames: [
      { image: "tamestorage-files.webp", label: "My Files", alt: "Tamestorage file manager displaying a sample Studio folder", caption: "My Files with a sample project folder.", wide: true },
      { image: "storage-network.svg", label: "Storage and backups", alt: "Network diagram for the primary NAS and backup disk", caption: "One drive holds my files. A second drive stores a backup.", wide: true },
      { image: "nas-notebook.webp", label: "Network notebook", alt: "Damduan Thanakrit’s handwritten sketch connecting five home server services", caption: "The original network notebook sketch.", wide: true },
    ],
  },
  mgans: {
    about: "We built two models that learn patterns in speech and try to reconstruct them. The differences they find help score how unusual a recording is. We tested both models on one collection of recordings and then on a separate collection they hadn’t trained on.",
    role: "Pasatorn Soikiri and I share first authorship. I worked on the model that spots synthetic speech.",
    frames: [
      { image: "mgans.svg", label: "Results", alt: "eD-AnoGAN scores of 0.9211 ROC AUC on WaveFake and 0.8428 on ASVspoof2019 LA", caption: "Closer to 1 is better. The score drops on a different set of recordings.", wide: true },
      { image: "mgans-paper-architecture.webp", label: "Model architectures", alt: "The paper’s published architectures for eD-AnoGAN and RES-MGANomaly", caption: "Model architectures from Figure 1. © 2025 IEEE.", wide: true },
      { image: "mgans-paper-reconstructions.webp", label: "Original and rebuilt audio", alt: "Input and reconstructed speech spectrograms for four model variants", caption: "Original and rebuilt sound patterns from Figure 3. © 2025 IEEE.", wide: true },
      { image: "mgans-talk.webp", label: "Presenting the work", alt: "ICITEE presentation with the model architecture on screen", caption: "Presenting the architecture at ICITEE 2025." },
      { image: "mgans-venue.webp", label: "ICITEE 2025", alt: "Damduan Thanakrit beside the ICITEE conference backdrop", caption: "ICITEE 2025." },
    ],
  },
  sleeppilot: {
    about: "SleepPilot is a fictional sleep app with 15 help articles. The chatbot looks through those articles before answering and shows which ones it used. You can ask a follow-up without repeating the details from your first question.",
    role: "I built the search that finds the right help article and added follow-up questions that carry on the conversation.",
    frames: [
      { image: "sleeppilot-dialog.webp", label: "An answer with sources", alt: "SleepPilot Coach answering a question about wearables and showing its FAQ sources", caption: "Asked if a watch is required, the assistant answers and shows the help article it used.", portrait: true, wide: true },
    ],
  },
  luckdee: {
    about: "I built SimpleSci to sell to a friend who tutors science. The site lets them list courses and review bank transfer receipts. Once they confirm a payment, the student gets access to the lesson videos and study materials.",
    role: "I built the storefront, checkout and private lesson pages.",
    frames: [
      { image: "simplesci-catalog.webp", label: "Courses", alt: "English SimpleSci course catalog with subject and level filters", caption: "Browse by subject or level.", wide: true },
      { image: "simplesci-course.webp", label: "Course page", alt: "English SimpleSci course page with topics and enrollment details", caption: "See what the course covers before enrolling.", wide: true },
      { image: "simplesci-checkout.webp", label: "Checkout", alt: "English SimpleSci checkout where students can upload a demo bank transfer receipt", caption: "Upload a bank transfer receipt for the tutor to review.", wide: true },
    ],
  },
  gokila: {
    about: "GO-KILA was a team project to make it easier to find people to play sports with. Players can search for nearby venues, start a team around a time and place, and use team chat to agree on the details.",
    role: "I built the database and server routes, matched players by location, and set up live team chat.",
    frames: [
      { image: "gokila-create-team.webp", label: "Start a team", alt: "The GO-KILA team creation form with sport and venue choices", caption: "Pick a sport and venue when starting a team.", wide: true },
      { image: "gokila-leaderboard.webp", label: "Player rankings", alt: "The GO-KILA leaderboard with a sport filter", caption: "Compare hours played by sport.", wide: true },
      { image: "gokila-pitch.webp", label: "Project pitch", alt: "Damduan Thanakrit presenting GO-KILA from a sports field", caption: "Introducing the project on a sports field.", portrait: true, wide: true },
    ],
  },
  sentctf: {
    about: "SentCTF is a capture-the-flag competition run by NTU Sentinels. Teams solve cybersecurity puzzles and submit hidden codes called flags to earn points. The photos show the awards and the certificate from our third-place finish.",
    role: "I competed with Team RIPGREP.",
    frames: [
      { image: "sentctf-certificate.webp", label: "Third-place certificate", alt: "Damduan Thanakrit’s SentCTF 2026 third-place certificate", caption: "My third-place certificate.", wide: true },
    ],
  },
};
