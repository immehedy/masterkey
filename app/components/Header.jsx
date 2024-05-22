import Link from "next/link";

const Header = () => {
  return (
    <nav className="bg-primary text-white w-full h-[60px] py-2">
      <div className="flex items-center justify-between container">
        <Link href="/" className="text-3xl font-bold">
          Masterkey Tech
        </Link>
      </div>
    </nav>
  );
};

export default Header;
