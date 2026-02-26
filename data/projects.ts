import type { ProjectItem } from "@/config/types";

export const projectsData: ProjectItem[] = [
  {
    title: "Halcyon Theme",
    description: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.",
    tech: ["VS Code", "Sublime Text", "Atom", "iTerm2"],
    github: "#",
    external: "#",
    image: "https://picsum.photos/seed/halcyon/800/600?blur=2",
  },
  {
    title: "Spotify Profile",
    description:
      "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track.",
    tech: ["React", "Express", "Spotify API", "Styled Components"],
    github: "#",
    external: "#",
    image: "https://picsum.photos/seed/spotify/800/600?blur=2",
  },
];
