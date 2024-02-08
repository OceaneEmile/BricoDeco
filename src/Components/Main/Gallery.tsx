import Card from "./Card";
import Button from "../Button/Button";

export default function Gallery() {
  const posts = [
    {
      id: 1,
      title: "titre1",
      category: "categorie1",
      date: "date1",
      author: "auteur1",
    },
    {
      id: 2,
      title: "titre1",
      category: "categorie1",
      date: "date1",
      author: "auteur1",
    },
    {
      id: 3,
      title: "titre1",
      category: "categorie1",
      date: "date1",
      author: "auteur1",
    },
    {
      id: 4,
      title: "titre1",
      category: "categorie1",
      date: "date1",
      author: "auteur1",
    },
    {
      id: 5,
      title: "titre1",
      category: "categorie1",
      date: "date1",
      author: "auteur1",
    },
    {
      id: 6,
      title: "titre1",
      category: "categorie1",
      date: "date1",
      author: "auteur1",
    },
    {
      id: 7,
      title: "titre1",
      category: "categorie1",
      date: "date1",
      author: "auteur1",
    },
    {
      id: 8,
      title: "titre1",
      category: "categorie1",
      date: "date1",
      author: "auteur1",
    },
    {
      id: 9,
      title: "titre1",
      category: "categorie1",
      date: "date1",
      author: "auteur1",
    },
    {
      id: 10,
      title: "titre1",
      category: "categorie1",
      date: "date1",
      author: "auteur1",
    },
    {
      id: 11,
      title: "titre1",
      category: "categorie1",
      date: "date1",
      author: "auteur1",
    },
    {
      id: 12,
      title: "titre1",
      category: "categorie1",
      date: "date1",
      author: "auteur1",
    },
  ];
  return (
    <div className="py-24 sm:py-10">
      {/*  titre les derniers tutos*/}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl text-left">
            Les Derniers Tutos :
          </h3>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-4 sm:pt-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {/* for each tuto create card */}
          {posts.map((post) => (
            <Card key={post.id} />
          ))}
        </div>
        <div className="mt-10">
          <Button text="Voir plus" />
        </div>
      </div>
    </div>
  );
}
