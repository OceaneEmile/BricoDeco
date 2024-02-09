interface Props {
  about: {
    id: number;
    link: string;
    name: string;
    photo: string;
    tools: string;
    resume: string;
  };
}

export default function CardMember({ about }: Props) {
  return (
    <div className="max-w-sm border border-solid boder-black p-5 infoCard cursor-pointer">
      <img className="max-w rounded-full" src={about.photo} alt="" />
      <p className="text-center font-bold text-lg">{about.name}</p>
      <p className="text-center">Outils prefere : {about.tools}</p>
      <p className="text-center">{about.resume}</p>
    </div>
  );
}
