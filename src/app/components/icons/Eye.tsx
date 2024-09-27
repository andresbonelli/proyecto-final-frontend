import { svgProps } from "@/app/utils/interfaces";

export default function EyeIcon({ width, height, fill: fill }: svgProps) {
  return (
    <svg
      className="flex-shrink-0"
      width={width}
      height={height}
      viewBox="0 0 25 18"
      fill="none"
      stroke={fill}
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g clipPath="url(#clip0_1_16793)">
        <path d="M0.833008 8.00016C0.833008 8.00016 4.16634 1.3335 9.99967 1.3335C15.833 1.3335 19.1663 8.00016 19.1663 8.00016C19.1663 8.00016 15.833 14.6668 9.99967 14.6668C4.16634 14.6668 0.833008 8.00016 0.833008 8.00016Z" />
        <path d="M10 10.5C11.3807 10.5 12.5 9.38071 12.5 8C12.5 6.61929 11.3807 5.5 10 5.5C8.61929 5.5 7.5 6.61929 7.5 8C7.5 9.38071 8.61929 10.5 10 10.5Z" />
      </g>
      <defs>
        <clipPath id="clip0_1_16793">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
