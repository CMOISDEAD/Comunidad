interface Props {
  feature: any;
}

export const Marker = ({ feature }: Props) => {
  const handleClick = () => console.log("Marker clicked", feature);

  return (
    <button className="bg-emerald-500 rounded px-2 py-1" onClick={handleClick}>
      {feature.properties.title}
    </button>
  );
};
