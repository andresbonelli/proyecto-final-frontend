import { verifySession } from "@/lib/session";
import { getUser } from "@/actions/user";
import ContactForm from "@/app/components/forms/contact_form";

export default async function ContactPage() {
  const session = await verifySession();
  const user = session ? await getUser(session.id) : null;
  const email = user ? user.email : null;

  return (
    <div
      id="main-sections"
      className="fex flex-col 2xl:px-80 xl:px-60 lg:px-40 md:px-20 px-3 pt-10 mb-5"
    >
      <h1 className="font-MontserratBold text-3xl text-center mb-5">
        Contacto
      </h1>
      <p className="text-center text-sm text-wrap">
        Escribinos tus dudas o sugerencias a través de nuestro formulario de
        consulta.
      </p>
      <ContactForm userEmail={email} />
    </div>
  );
}
