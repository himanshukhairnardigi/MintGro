import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function Button({
  href,
  children,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className="
        group
        inline-flex
        h-11
        items-center
        justify-center
        gap-2
        rounded-md
        bg-[#008F6B]
        px-5
        text-sm
        font-medium
        text-white
        transition-all
        duration-200
        hover:bg-[#00795B]
      "
    >
      {children}

      <ArrowRight
        size={16}
        className="transition-transform duration-200 group-hover:translate-x-1"
      />
    </Link>
  );
}
<Button href="/signup">
  Start Free Trial
</Button>