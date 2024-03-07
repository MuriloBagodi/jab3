import Link from "next/link";

export const Navbar = () => {
  return (
    <nav
      className="w-full flex justify-between p-8
      "
    >
      <Link href="/">
        <img src="/Logo.png" alt="" className="w-full h-24" />
      </Link>
      <ul className=" flex gap-5 items-center">
        <li className="p-4 transition ease-in-out delay-15 hover:border-b-amber hover:border-b-2 hover:shadow-md duration-300">
          <Link className="text-lg font-semibold font-sans" href="#about">
            Sobre nós
          </Link>
        </li>
        <li className="p-4 transition ease-in-out delay-15 hover:border-b-amber hover:border-b-2 hover:shadow-md duration-300 ">
          <Link className="text-lg font-semibold font-sans" href="#services">
            Serviços
          </Link>
        </li>
        <li className="p-4 transition ease-in-out delay-15 hover:border-b-amber hover:border-b-2 hover:shadow-md duration-300">
          <Link className="text-lg font-semibold font-sans" href="#contact">
            Contato
          </Link>
        </li>
        <li className="p-4 transition ease-in-out delay-15 hover:border-b-amber hover:border-b-2 hover:shadow-md duration-300">
          <Link href="#zipZop">
            <img
              src="/icons/whatsapp.png"
              alt="whatsapp icone"
              className="w-full h-6"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
