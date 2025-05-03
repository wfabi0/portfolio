type SiocialMidiaProps = {
  name: string;
  link: string;
};

export default function SocialMidia({ name, link }: SiocialMidiaProps) {
  return (
    <a
      className="hover:text-blue-600 hover:underline dark:hover:text-blue-500 transition"
      href={link}
    >
      {name}
    </a>
  );
}
