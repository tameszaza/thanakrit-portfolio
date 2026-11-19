const git="https://github.com/tameszaza/";
export const projects=[
{
    slug: "kvis-sc",
    name: "KVIS SC",
    tag: "Campus software",
    image: "kvis-sc.webp",
    label: "Council website",
    alt: "KVIS Student Committee homepage with a group portrait and student services",
    caption: "The student committee homepage.",
    summary: "A school site for reserving rooms, borrowing equipment and checking announcements.",
  },
{
    slug: "kampung-quest",
    name: "Kampung Quest",
    tag: "Community",
    image: "kampung-quest.webp",
    label: "Activity dashboard",
    alt: "Activity dashboard from the Kampung Quest demo",
    caption: "The activity dashboard from the Senior Quest prototype.",
    summary: "Helps older neighbours choose an activity they can do together and agree on a time and place.",
    url: git+"Kampung-quest"
  },
{
    slug: "tamestorage",
    name: "Tamestorage",
    tag: "Home server",
    image: "tamestorage-overview.webp",
    label: "Site overview",
    alt: "Tamestorage landing page with links to files, notes and plans",
    caption: "The page I use to reach my files, notes and plans.",
    summary: "An old Lenovo laptop turned into a home server for files, notes and backups.",
    url: git+"Storage"
  },
{
    slug: "mgans",
    name: "mGANs",
    tag: "Speech research",
    image: "mgans-paper-first-page.webp",
    label: "The paper",
    alt: "First page of Synthetic Speech Detection via Multi-Generator GANs with Anomaly Detection Architectures",
    caption: "The first page of the published ICITEE paper. © 2025 IEEE.",
    summary: "A study of how well a detector spots AI-generated speech on recordings from a different dataset.",
    citation: "T. Damduan, P. Soikiri, V. Kanjaras, R. Varathikul and K. Sumetpipat. ICITEE 2025, pp. 601–606. DOI 10.1109/ICITEE66631.2025.11338480.",
    url: "https://doi.org/10.1109/ICITEE66631.2025.11338480",
    link: "Read on IEEE Xplore"
  },
{
    slug: "sleeppilot",
    name: "SleepPilot Coach",
    tag: "Q&A assistant",
    image: "sleeppilot-ui.webp",
    label: "Assistant",
    alt: "SleepPilot landing page with its FAQ assistant open",
    caption: "Ask a question about the sleep app from its home page.",
    summary: "A help chatbot that answers questions about a sleep app and shows where each answer came from.",
    url: git+"EndToEndRAG"
  },
{
    slug: "luckdee",
    name: "P’ Luckdee SimpleSci",
    tag: "Education",
    image: "simplesci-storefront.webp",
    label: "Storefront",
    alt: "English preview of the P’ Luckdee SimpleSci storefront",
    caption: "The tutoring storefront in an English demo.",
    summary: "A science tutoring storefront I built to sell to a friend who tutors.",
    url: git+"simplesci"
  },
  {
    slug: "sentctf",
    name: "SentCTF 2026",
    tag: "Hackathon",
    image: "sentctf-stage.webp",
    label: "Awards stage",
    alt: "Team RIPGREP on stage under the SentCTF 2026 event screen",
    caption: "The SentCTF awards at NTU.",
    summary: "Third place at NTU’s cybersecurity competition with Team RIPGREP.",
  },
];
export const bySlug = (slug) => projects.find((project) => project.slug === slug);