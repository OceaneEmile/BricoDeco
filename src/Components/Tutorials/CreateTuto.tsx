import Button from "../Button/Button";

export default function CreateTuto() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-wider text-gray-900">
          Créer votre Tuto
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium leading-6 text-gray-900 text-left"
            >
              Titre:
            </label>
            <div className="mt-2">
              <input
                id="title"
                name="title"
                type="title"
                placeholder=" Titre du tutoriel"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium leading-6 text-gray-900 text-left"
            >
              Decription:
            </label>

            <div className="mt-2">
              <textarea
                id="description"
                name="description"
                placeholder=" Rédigez la description de votre tutoriel ici"
                required
                rows={5}
                style={{ resize: "none" }}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </div>

          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium leading-6 text-gray-900 text-left"
            >
              Categorie:
            </label>

            <div className="mt-2">
              <select
                id="category"
                name="category"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="1">Brico</option>
                <option value="2">Deco</option>
              </select>
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="image"
              className="block text-sm font-medium leading-6 text-gray-900 text-left"
            >
              Télécharger un fichier :
            </label>
            <input
              type="file"
              id="file"
              name="file"
              className="block w-full mt-1 rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div>
            <label
              htmlFor="tools"
              className="block text-sm font-medium leading-6 text-gray-900 text-left"
            >
              Outils:
            </label>

            <div className="mt-2">
              <select
                id="tools"
                name="tools"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="1">Marteau</option>
                <option value="2">Pinceaux</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="etapes"
              className="block text-sm font-medium leading-6 text-gray-900 text-left"
            >
              Etape:
            </label>

            <div className="mt-2">
              <textarea
                id="etapes"
                name="etapes"
                placeholder=" Rédigez la description de l'etape de votre tutoriel ici"
                required
                rows={5}
                style={{ resize: "none" }}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="file"
              className="block text-sm font-medium leading-6 text-gray-900 text-left"
            >
              Ajouter une image de l'etape :
            </label>
            <input
              type="file"
              id="file"
              name="file"
              className="block w-full mt-1 rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <Button text={"Poster"} />
        </form>
      </div>
    </div>
  );
}
