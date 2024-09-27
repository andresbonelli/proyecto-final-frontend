import { svgProps } from "@/app/utils/interfaces";

export default function ArrowIcon({ width, height, fill }: svgProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 25"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_120_380)">
        <path d="M9.99967 3.33325L9.05967 4.27325L12.113 7.33325H1.33301V8.66659H12.113L9.05301 11.7266L9.99967 12.6666L14.6663 7.99992L9.99967 3.33325Z" />
      </g>
    </svg>
  );
}
