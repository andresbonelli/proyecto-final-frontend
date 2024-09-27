import { svgProps } from "@/app/utils/interfaces";

export default function StarFilledIcon({ width, height, fill }: svgProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 25"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_120_1633)">
        <path d="M12.542 17.7464L18.5644 21.3849L16.9662 14.5275L22.2871 9.91358L15.2803 9.31855L12.542 2.85132L9.8036 9.31855L2.79688 9.91358L8.1177 14.5275L6.5195 21.3849L12.542 17.7464Z" />
      </g>
      <defs>
        <clipPath id="clip0_120_1633">
          <rect
            width="23.3882"
            height="23.4108"
            fill="white"
            transform="translate(0.847656 0.900391)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
