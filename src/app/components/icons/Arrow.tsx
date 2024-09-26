import { svgProps } from "@/app/utils/interfaces";

export default function ArrowIcon({ width, height, fill: fill }: svgProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 25"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13.9796 18.2566L15.3896 16.8466L10.8096 12.2566L15.3896 7.66659L13.9796 6.25659L7.97965 12.2566L13.9796 18.2566Z" />
    </svg>
  );
}
