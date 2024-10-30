import Link from "next/link";
import WhatsappIcon from "../../icons/Whatsapp";
import MailIcon from "../../icons/Mail";
import PhoneIcon from "../../icons/Phone";
import LocationIcon from "../../icons/Location";
import { navLinks } from "@/utils/constants";

export default function Info() {
  const fore = "black";
  const back = "white";
  return (
    <div
      id="info-container"
      className={` flex flex-col justify-start text-center text-${fore} bg-${back} py-5 rounded shadow-sm`}
    >
      <div className="flex flex-row justify-evenly place-items-start flex-wrap gap-3 my-5 px-1">
        <div className="flex flex-col justify-around gap-3 text-left w-44">
          <h5 className="font-MontserratBold text-lg mb-3">Categorías</h5>
          {/* Links */}
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.link}
              className="font-MontserratMedium text-sm"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col justify-start gap-3 text-left w-44 ">
          <h5 className="font-MontserratBold text-lg mb-3">Contactanos</h5>
          <Link
            href="https://wa.me/5491160198300"
            className="font-MontserratMedium text-sm"
          >
            <div className="flex flex-row place-items-center gap-2">
              <WhatsappIcon width={20} height={20} fill={fore} />
              <span>Whatsapp</span>
            </div>
          </Link>
          <a href="tel:2612166458" className="font-MontserratMedium text-sm">
            <div className="flex flex-row place-items-center gap-2">
              <PhoneIcon width={22} height={22} stroke={fore} />
              <span>2612166458</span>
            </div>
          </a>
          <a
            href="mailto:andresbonellipiano@gmail.com"
            className="font-MontserratMedium text-sm"
          >
            <div className="flex flex-row place-items-center gap-2">
              <MailIcon width={22} height={22} stroke={fore} />
              <span>Mail</span>
            </div>
          </a>
          <div className="font-MontserratMedium text-sm">
            <div className="flex flex-row place-items-center gap-2">
              <LocationIcon width={22} height={22} stroke={fore} />
              <span>Av. Perú 765, Mendoza, Argentina</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-around gap-3 text-left  ">
          <h5 className="font-MontserratBold text-lg mb-3">Medios de Pago</h5>
          <div className="flex flex-row flex-wrap gap-3 w-44">
            <img
              src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visa@2x.png"
              data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visa@2x.png"
              className="icon-logo ls-is-cached lazyloaded"
              alt="visa"
              width="40"
              height="25"
            />
            <img
              src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/paypal@2x.png"
              data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/paypal@2x.png"
              className="icon-logo ls-is-cached lazyloaded"
              alt="paypal"
              width="40"
              height="25"
            />
            <img
              src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mastercard@2x.png"
              data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mastercard@2x.png"
              className="icon-logo ls-is-cached lazyloaded"
              alt="mastercard"
              width="40"
              height="25"
            ></img>
            <img
              src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/amex@2x.png"
              data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/amex@2x.png"
              className="icon-logo ls-is-cached lazyloaded"
              alt="amex"
              width="40"
              height="25"
            ></img>
            <img
              src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/banelco@2x.png"
              data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/banelco@2x.png"
              className="icon-logo ls-is-cached lazyloaded"
              alt="ar_banelco"
              width="40"
              height="25"
            ></img>
            <img
              src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/cabal@2x.png"
              data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/cabal@2x.png"
              className="icon-logo ls-is-cached lazyloaded"
              alt="ar_cabal"
              width="40"
              height="25"
            ></img>
            <img
              src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/tarjeta-naranja@2x.png"
              data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/tarjeta-naranja@2x.png"
              className="icon-logo ls-is-cached lazyloaded"
              alt="ar_tarjeta-naranja"
              width="40"
              height="25"
            ></img>
            <img
              src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mercadopago@2x.png"
              data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mercadopago@2x.png"
              className="icon-logo ls-is-cached lazyloaded"
              alt="mercadopago"
              width="40"
              height="25"
            ></img>
            <img
              src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/pagofacil@2x.png"
              data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/pagofacil@2x.png"
              className="icon-logo ls-is-cached lazyloaded"
              alt="pagofacil"
              width="40"
              height="25"
            ></img>
            <img
              src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/rapipago@2x.png"
              data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/rapipago@2x.png"
              className="icon-logo ls-is-cached lazyloaded"
              alt="rapipago"
              width="40"
              height="25"
            ></img>
          </div>
        </div>
        <div className="flex flex-col justify-around gap-3 text-left w-44">
          <h5 className="font-MontserratBold text-lg mb-3">Formas de Envío</h5>

          <p className="font-MontserratMedium text-sm">Correo Argentino</p>
          <p className="font-MontserratMedium text-sm">Oca</p>
          <p className="font-MontserratMedium text-sm">Mercado Envíos</p>
          <p className="font-MontserratMedium text-sm">Retiro en local</p>
        </div>
      </div>
    </div>
  );
}
