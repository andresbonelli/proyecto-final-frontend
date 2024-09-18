interface svgProps {
  width: number;
  height: number;
  fill: string;
  stroke?: string;
}

interface navLink {
  label: string;
  link: string;
}

interface navbarProps {
  fixed?: boolean;
  padded?: boolean;
  inverted?: boolean;
  links: navLink[];
}
