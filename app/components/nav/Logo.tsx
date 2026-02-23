import Link from "next/link";
import { FaKitchenSet } from "react-icons/fa6";

export default function Logo() {
  return (
    <Link
      href={"/"}
      className={`text-[#f0f8ff] text-lg font-semibold flex items-center gap-2`}
    >
      <FaKitchenSet className="text-accent" size={18} />
      KITCHOR
    </Link>
  );
}
