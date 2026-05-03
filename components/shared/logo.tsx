import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href={"/"} className="flex items-center">
      <Image
        src="/logo.svg"
        alt="Silvestre"
        width={64}
        height={64}
        className="w-6 h-6 lg:w-12 lg:h-12"
        priority
      />
    </Link>
  );
}
