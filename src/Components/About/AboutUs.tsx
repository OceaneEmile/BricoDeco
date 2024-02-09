import CardMember from "./CardMember";

export default function AboutUS() {
  // define the about array
  const about = [
    {
      id: 1,
      name: "Océane EMILE",
      link: "https://www.github.com",
      photo:
        "https://kazan.kronostime.ru/upload/images.opt/iblock/5d3/u0l1tqhz9ngu2ksf7ah5exzukuxfz098/WFGG-W85_2.webp",
      tools: "Rouleau",
      resume:
        "Je suis une personne qui aime les rouleaux,merci copilot pour ces magnifiques phrases d'accroches ",
    },
    {
      id: 2,
      name: "Kim PHAM",
      link: "https://www.github.com",
      photo:
        "https://kazan.kronostime.ru/upload/images.opt/iblock/5d3/u0l1tqhz9ngu2ksf7ah5exzukuxfz098/WFGG-W85_2.webp",
      tools: "Rouleau",
      resume:
        "Je suis une personne qui aime les rouleaux,merci copilot pour ces magnifiques phrases d'accroches ",
    },
    {
      id: 3,
      name: "Firat ASLAN",
      link: "https://www.github.com",
      photo:
        "https://kazan.kronostime.ru/upload/images.opt/iblock/5d3/u0l1tqhz9ngu2ksf7ah5exzukuxfz098/WFGG-W85_2.webp",
      tools: "Rouleau",
      resume:
        "Je suis une personne qui aime les rouleaux,merci copilot pour ces magnifiques phrases d'accroches ",
    },
    {
      id: 4,
      name: "Lucas Depoot",
      link: "https://www.github.com",
      photo:
        "https://kazan.kronostime.ru/upload/images.opt/iblock/5d3/u0l1tqhz9ngu2ksf7ah5exzukuxfz098/WFGG-W85_2.webp",
      tools: "Rouleau",
      resume:
        "Je suis une personne qui aime les rouleaux,merci copilot pour ces magnifiques phrases d'accroches ",
    },
  ];
  return (
    <div className="h-[68vh]">
      <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  pt-10 sm:mt-4 sm:pt-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
        {/* For each member of team create CardMember */}
        {about.map((about) => (
          <CardMember about={about} key={about.id} />
        ))}
      </div>
    </div>
  );
}
