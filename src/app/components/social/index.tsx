import Link from "next/link";
import FacebookIcon from "../icons/Facebook";
import InstagramIcon from "../icons/Instagram";
import TwitterIcon from "../icons/Twitter";
import YoutubeIcon from "../icons/Youtube";

export default function Social() {
  return (
    <div
      id="social-container"
      className="flex flex-col justify-start text-center  py-10 gap-10"
    >
      <h1 className="text-xl font-MontserratBold">SEGUINOS EN REDES</h1>
      <div className="flex flex-row flex-wrap justify-center gap-5">
        <Link
          target="blank"
          href="https://www.youtube.com/channel/UC8RAPtWPYY9VIp9c9BuKj5g"
        >
          <InstagramIcon width={50} height={50} fill="black" />
        </Link>
        <Link
          target="blank"
          href="https://www.youtube.com/channel/UC8RAPtWPYY9VIp9c9BuKj5g"
        >
          <TwitterIcon width={50} height={50} fill="black" />
        </Link>
        <Link
          target="blank"
          href="https://www.youtube.com/channel/UC8RAPtWPYY9VIp9c9BuKj5g"
        >
          <FacebookIcon width={50} height={50} fill="black" />
        </Link>
        <Link
          target="blank"
          href="https://www.youtube.com/channel/UC8RAPtWPYY9VIp9c9BuKj5g"
        >
          <YoutubeIcon width={50} height={50} fill="black" />
        </Link>
      </div>
    </div>
  );
}
