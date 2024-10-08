import { svgProps } from "@/utils/interfaces";

export default function Logo({ width, height, fill: fill }: svgProps) {
  return (
    <div id="logo-container">
      <svg
        width={width}
        height={height}
        viewBox="0 0 79 60"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1_23885)">
          <path d="M77.9361 59.6525H0.492487C0.246244 59.6525 0 59.4063 0 59.16C0 58.9138 0.246244 58.6675 0.492487 58.6675H77.9361C78.1824 58.6675 78.4286 58.9138 78.4286 59.16C78.4286 59.4063 78.2439 59.6525 77.9361 59.6525Z" />
          <path d="M57.436 26.225C57.1897 25.9172 56.8819 25.7941 56.5126 25.7941H20.1301L19.0835 22.7776C18.8988 22.2851 18.4679 21.9773 17.9754 21.9773H8.18724C7.51007 21.9773 7.01758 22.5313 7.01758 23.147C7.01758 23.8241 7.57163 24.3166 8.18724 24.3166H17.1136L25.2396 46.6632L23.085 55.0355C23.0234 55.4049 23.085 55.7742 23.2697 56.082C23.5159 56.3898 23.8237 56.513 24.1931 56.513H26.9633C27.4558 58.3598 29.1795 59.7141 31.211 59.7141C33.2425 59.7141 34.9047 58.3598 35.4587 56.513H43.0923C43.5848 58.3598 45.3085 59.7141 47.34 59.7141C49.7409 59.7141 51.7108 57.7442 51.7108 55.3433C51.7108 52.9424 49.7409 50.9725 47.34 50.9725C45.3085 50.9725 43.6463 52.3268 43.0923 54.1737H35.4587C34.9662 52.3268 33.2425 50.9725 31.211 50.9725C29.1795 50.9725 27.5174 52.3268 26.9633 54.1737H25.7321L27.3942 47.8329H52.388C52.942 47.8329 53.4345 47.4635 53.5576 46.9095L57.6822 27.2715C57.7438 26.8406 57.6822 26.4712 57.436 26.225ZM47.34 53.3118C48.4481 53.3118 49.3715 54.2352 49.3715 55.3433C49.3715 56.4514 48.4481 57.3748 47.34 57.3748C46.2319 57.3748 45.3085 56.4514 45.3085 55.3433C45.3085 54.2352 46.2319 53.3118 47.34 53.3118ZM31.211 53.3118C32.3191 53.3118 33.2425 54.2352 33.2425 55.3433C33.2425 56.4514 32.3191 57.3748 31.211 57.3748C30.1645 57.3748 29.3026 56.5745 29.1795 55.528C29.1795 55.4664 29.1795 55.4049 29.1795 55.4049V55.2817C29.3026 54.1737 30.1645 53.3118 31.211 53.3118ZM42.4767 45.432L39.5217 37.9831H44.8775L47.8325 45.432H42.4767ZM34.5353 45.432L31.5804 37.9831H36.9362L39.8911 45.432H34.5353ZM24.5624 37.9831H28.9948L31.9497 45.432H27.2711L24.5624 37.9831ZM33.0578 28.1334L36.0128 35.5823H30.657L27.702 28.1334H33.0578ZM38.5368 35.5823L35.5818 28.1334H40.9376L43.8926 35.5823H38.5368ZM43.5232 28.1334H48.879L51.8339 35.5823H46.4781L43.5232 28.1334ZM53.8039 34.1048L51.403 28.1334H55.0351L53.8039 34.1048ZM25.1165 28.1334L28.0714 35.5823H23.7621L21.0535 28.1334H25.1165ZM51.403 45.432H50.3565L47.4015 37.9831H52.7573L52.8805 38.3525L51.403 45.432Z" />
          <path d="M54.6665 12.8047C54.0509 12.9893 53.6815 13.605 53.8047 14.2821C54.5434 17.1755 54.4818 20.3151 53.62 23.1469C53.4353 23.7625 53.8047 24.4397 54.4203 24.6244C54.5434 24.6244 54.6665 24.6244 54.7896 24.6244C55.2821 24.6244 55.7746 24.3166 55.8977 23.7625C56.9443 20.4382 57.0058 16.9292 56.0824 13.605C55.9593 12.9893 55.3437 12.62 54.6665 12.8047Z" />
          <path d="M42.4158 2.89335C45.7401 3.7552 48.695 5.72515 50.8496 8.37227C51.2806 8.86476 52.0193 8.98788 52.5118 8.55695C53.0043 8.12603 53.1274 7.3873 52.6965 6.89481C50.234 3.81676 46.7866 1.60057 42.9699 0.554036C36.6906 -1.04655 29.9189 0.80028 25.3634 5.41735C20.6848 10.1575 18.8995 17.3602 20.8695 23.7625C21.0542 24.255 21.4851 24.6244 21.9776 24.6244C22.1007 24.6244 22.2238 24.6244 22.3469 24.5628C22.9626 24.3781 23.3319 23.7009 23.1472 23.0853C21.4235 17.5448 22.9626 11.2656 27.0871 7.14105C31.027 3.07803 36.9369 1.47745 42.4158 2.89335Z" />
          <path d="M57.1287 8.43386C56.7593 7.87981 56.0206 7.75669 55.4665 8.12605L37.306 20.3151L34.1664 12.3738C33.9202 11.7581 33.243 11.4503 32.6274 11.6966C32.0118 11.9428 31.704 12.62 31.9502 13.2356L35.6439 22.5313C35.767 22.8391 36.0748 23.1469 36.3826 23.2085C36.5057 23.27 36.6289 23.27 36.752 23.27C36.9982 23.27 37.2445 23.2085 37.4292 23.0854L56.8208 10.0344C57.3749 9.72663 57.498 8.9879 57.1287 8.43386Z" />
        </g>
        <defs>
          <clipPath id="clip0_1_23885">
            <rect width="78.4286" height="59.7141" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
