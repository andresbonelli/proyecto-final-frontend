import { colors } from "@/app/constants";
import ArrowIcon from "../../icons/Arrow";

interface CarrouselArrowProps {
  isDisabled?: boolean;
  onPress: Function;
  xOffset: string;
  direction: "rotate-90" | "-rotate-90" | "" | "rotate-180";
}

export default function CarrouselArrow({
  isDisabled,
  onPress,
  xOffset,
  direction,
}: CarrouselArrowProps) {
  return (
    <div
      className={`z-50 absolute ${xOffset}  top-1/2 flex -translate-y-1/2 transform justify-between`}
    >
      <button
        disabled={isDisabled}
        className={`${direction} bg-white rounded-full shadow-lg opacity-70 active:opacity-70 hover:opacity-85 ${
          isDisabled && "hidden"
        }`}
        onClick={() => onPress()}
      >
        <ArrowIcon width={40} height={40} fill={colors.grey} />
      </button>
    </div>
  );
}
