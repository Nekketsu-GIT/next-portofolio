import Link from "next/link";
import Image from "next/legacy/image";

type Props = {
  title: React.ReactNode;
  icon?: React.ReactNode;
  link?: string;
};

export default function Title({ title, icon, link }: Props) {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <h3 className="text-lg font-bold text-yaleblue ">{title}</h3>
      {link && (
        <Link
          href={link}
          aria-label={`See all ${title}`}
          className="flex items-center"
        >
          <Image
            src="/images/arrow.svg"
            alt="arrow"
            width={24}
            height={24}
            className="animate-pulse"
          />
        </Link>
      )}
    </div>
  );
}
