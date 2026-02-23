import Link from "next/link";
import { FaKitchenSet } from "react-icons/fa6";

interface LogoProps {
  onClose?: () => void;
}

export default function Logo({ onClose }: LogoProps) {
  return (
    <Link
      onClick={onClose}
      href={"/"}
      className={`text-[#f0f8ff] text-lg font-semibold flex items-center gap-2 `}
    >
      <FaKitchenSet className="text-accent" size={20} />
      KITCHOR
    </Link>
  );
}
