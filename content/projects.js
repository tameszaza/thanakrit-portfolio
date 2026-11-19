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
  },
{
    slug: "kampung-quest",
    name: "Kampung Quest",
    tag: "Community",
    image: "kampung-quest.webp",
    alt: "Activity dashboard from the Kampung Quest demo",
    caption: "The activity dashboard from the Senior Quest prototype.",
    summary: "Helping older neighbours turn shared interests into plans.",
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
    url: git+"simplesci"
  },
  {
    slug: "sentctf",
    name: "SentCTF 2026",
    tag: "Hackathon",
    image: "sentctf-stage.webp",
    alt: "Team RIPGREP on stage under the SentCTF 2026 event screen",
    caption: "The SentCTF awards at NTU.",
    summary: "Third prize with Team RIPGREP.",
  },
];
export const bySlug = (slug) => projects.find((project) => project.slug === slug);