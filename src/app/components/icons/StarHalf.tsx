import { svgProps } from "@/app/utils/interfaces";

export default function StarHalfIcon({ width, height, fill }: svgProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 25"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_120_1639)">
        <path d="M21.6748 9.91358L14.668 9.3088L11.9297 2.85132L9.1913 9.31855L2.18457 9.91358L7.50539 14.5275L5.9072 21.3849L11.9297 17.7464L17.9521 21.3849L16.3637 14.5275L21.6748 9.91358ZM11.9297 15.9223V6.85066L13.5961 10.7915L17.8644 11.1622L14.6291 13.9714L15.6036 18.1464L11.9297 15.9223Z" />
      </g>
      <defs>
        <clipPath id="clip0_120_1639">
          <rect
            width="23.3882"
            height="23.4108"
            fill="white"
            transform="translate(0.235352 0.900391)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
