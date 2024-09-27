import { svgProps } from "@/app/utils/interfaces";

export default function EditCircleIcon({ width, height, fill }: svgProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        r="14.5"
        fill={fill}
        stroke="white"
        strokeWidth="3"
        cx="16"
        cy="16"
      />
      <path
        d="M10.6579 22.3154C10.6316 22.2885 10.6052 22.2616 10.6052 22.2348C10.5 22.1003 10.3947 21.9658 10.2368 21.8582C10.2105 21.8313 10.2105 21.8313 10.1841 21.8044C10.1578 21.7775 10.1314 21.7775 10.1052 21.7505C9.94731 21.643 9.76318 21.5622 9.60524 21.4816C9.5789 21.4816 9.5789 21.4816 9.55255 21.4547C9.52621 21.4547 9.49987 21.4547 9.49987 21.4277L9 23.1762V23.2568C9 23.3374 9.02634 23.3913 9.0789 23.4451C9.10524 23.4721 9.13159 23.499 9.1578 23.499H9.21049H9.26317H9.34207L11 22.988L10.9473 22.8804C10.8949 22.692 10.7895 22.5038 10.6579 22.3154Z"
        fill="white"
      />
      <path
        d="M22.7113 10.5635L21.45 9.28635C21.3287 9.16354 21.1831 9.08991 21.0375 9.04073C20.892 8.99156 20.7223 8.99156 20.5767 9.01615C20.3584 9.04073 20.1643 9.13896 20.0188 9.31093L19 10.3426L21.6683 13.1425L22.7112 12.0864C22.7355 12.0618 22.7355 12.0373 22.7598 12.0373C23.0994 11.5705 23.0751 10.9565 22.7112 10.5635L22.7113 10.5635Z"
        fill="white"
      />
      <path
        d="M12.4259 20.4126L12.0399 20.014L19.3181 12.4953L17.9948 11.0713L10.4962 18.8178C10.4686 18.8463 10.441 18.9032 10.441 18.9317L10.3583 19.1595L10 20.4126H10.0552C10.9925 20.6974 11.7093 21.4664 11.985 22.4061V22.4632L13.4461 22.0075H13.4737C13.4737 22.0075 13.5013 22.0075 13.5013 21.9789C13.5289 21.9789 13.5289 21.9504 13.5565 21.9504L21 14.2609L19.6768 12.8369L12.4259 20.4126Z"
        fill="white"
      />
    </svg>
  );
}
