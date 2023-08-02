interface SectionHeadingProps {
  name: string;
}
const SectionHeading = ({ name }: SectionHeadingProps) => {
  return (
    <h1 className="px-4 text-4xl md:text-5xl 2 font-mono">
      {"<"}
      <span className="text-red-500">{`${name}`}</span>
      {`/>`}
    </h1>
  );
};

export default SectionHeading;
