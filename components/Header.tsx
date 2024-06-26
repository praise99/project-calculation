import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <div className="px-6 pt-6 lg:px-8">
      <nav className="flex items-center justify-between" aria-label="Global">
        <div className="flex ">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Code of Relevancy</span>
            <Image
              width={50}
              height={50}
              src="/logo.png"
              alt="Code of Relevancy"
            />
          </a>
        </div>
        <div
          className="flex flex-1 justify-end max-sm:flex-col max-sm:flex-none"
          style={{ gap: "20px" }}
        >
          <Link
            href="/production-calculator"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Production Rate<span aria-hidden="true">&rarr;</span>
          </Link>
          <Link
            href="/npv-calculator"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Net Present Value<span aria-hidden="true">&rarr;</span>
          </Link>
          <Link
            href="/payout"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Payout Calculator <span aria-hidden="true">&rarr;</span>
          </Link>
          <Link
            href="/profitability-index"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Profitability Index <span aria-hidden="true">&rarr;</span>
          </Link>
          <Link
            href="/irr-calculator"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Economic Limit <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
