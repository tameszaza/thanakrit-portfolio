const git="https://github.com/tameszaza/";
export const projects=[
{
    slug: "kvis-sc",
    name: "KVIS SC",
    tag: "Campus software",
    image: "kvis-sc.webp",
    alt: "KVIS Student Committee homepage with a group portrait and student services",
    caption: "The student committee homepage.",
    summary: "One front door for student life at Kamnoetvidya Science Academy.",
    body: "As head of the student committee’s IT team, I developed and maintained our school’s student services website. Students could go from a council announcement to booking a music or dance room in the same place.",
    extra: "kvis-bookings.webp",
    extraAlt: "Room reservation calendar for KVIS students",
    extraCaption: "The room reservation calendar.",
    tech: "Flask · Student services"
  },
{
    slug: "kampung-quest",
    name: "Kampung Quest",
    tag: "Community",
    image: "kampung-quest.webp",
    alt: "Activity dashboard from the Kampung Quest demo",
    caption: "The activity dashboard from the Senior Quest prototype.",
    summary: "Helping older neighbours turn shared interests into plans.",
    body: "An activity suggestion is only the beginning. Kampung Quest carries an idea through invitations, a group conversation and a confirmed arrangement, taking mobility needs and availability into account.",
    tech: "Next.js · PostgreSQL",
    url: git+"Kampung-quest"
  },
{
    slug: "tamestorage",
    name: "Tamestorage",
    tag: "Infrastructure",
    image: "storage-network.svg",
    alt: "Topology of the personal storage network and its backup disk",
    caption: "The storage network I run at home.",
    summary: "A second life for a Lenovo laptop, as my personal NAS.",
    body: "Goodnotes sends a PDF over WebDAV. A watcher links it into Obsidian, and cached OCR makes its pages searchable. The server keeps my files on an external drive and mirrors them to a second disk.",
    tech: "Flask · Docker · Tailscale",
    url: git+"Storage"
  },
{
    slug: "mgans",
    name: "mGANs",
    tag: "Speech research",
    image: "mgans.svg",
    alt: "eD-AnoGAN scores of 0.9211 ROC AUC on WaveFake and 0.8428 on ASVspoof2019 LA",
    caption: "Reported ROC AUC for eD-AnoGAN across two speech datasets.",
    summary: "Can anomaly detection distinguish synthetic voices from human speech?",
    body: "Pasatorn Soikiri and I share first authorship on Synthetic Speech Detection via Multi-Generator GANs with Anomaly Detection Architectures. We evaluated how well the detector generalised across datasets, including ASVspoof2019 LA.",
    tech: "ICITEE 2025 · Equal first author",
    url: "https://doi.org/10.1109/ICITEE66631.2025.11338480",
    link: "Read the paper"
  },
{
    slug: "sleeppilot",
    name: "SleepPilot Coach",
    tag: "Applied ML",
    image: "sleeppilot.webp",
    alt: "SleepPilot cover artwork featuring three mobile mockups",
    caption: "Original product artwork for SleepPilot.",
    summary: "A retrieval-augmented assistant with a deliberately small knowledge base.",
    body: "I built an inspectable RAG pipeline around 15 product FAQs. It embeds questions locally, ranks matches in SQLite and uses the retrieved context to answer. Out-of-scope questions have an explicit fallback.",
    tech: "FastAPI · SentenceTransformers · SQLite",
    url: git+"EndToEndRAG"
  },
{
    slug: "luckdee",
    name: "P’ Luckdee SimpleSci",
    tag: "Education",
    image: "simplesci-poster.webp",
    alt: "Original P’ Luckdee SimpleSci course poster",
    caption: "Original course artwork from the tutoring platform.",
    summary: "A Thai tutoring storefront that follows students from checkout to class.",
    body: "Students browse courses, submit a bank transfer slip and access private learning materials after approval. Their dashboard brings lessons, documents and remaining viewing hours together.",
    tech: "Django · PostgreSQL · HTMX",
    url: git+"simplesci"
  }
];
export const bySlug = (slug) => projects.find((project) => project.slug === slug);