import { svgProps } from "@/app/utils/interfaces";

export default function HeartIcon({ width, height, fill, stroke }: svgProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 21"
      fill={fill}
      stroke={stroke}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.8401 2.60987C20.3294 2.09888 19.7229 1.69352 19.0555 1.41696C18.388 1.14039 17.6726 0.998047 16.9501 0.998047C16.2276 0.998047 15.5122 1.14039 14.8448 1.41696C14.1773 1.69352 13.5709 2.09888 13.0601 2.60987L12.0001 3.66987L10.9401 2.60987C9.90843 1.57818 8.50915 0.998582 7.05012 0.998582C5.59109 0.998582 4.19181 1.57818 3.16012 2.60987C2.12843 3.64156 1.54883 5.04084 1.54883 6.49987C1.54883 7.95891 2.12843 9.35818 3.16012 10.3899L4.22012 11.4499L12.0001 19.2299L19.7801 11.4499L20.8401 10.3899C21.3511 9.87912 21.7565 9.27269 22.033 8.60523C22.3096 7.93777 22.4519 7.22236 22.4519 6.49987C22.4519 5.77738 22.3096 5.06198 22.033 4.39452C21.7565 3.72706 21.3511 3.12063 20.8401 2.60987Z" />
    </svg>
  );
}
