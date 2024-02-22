import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import {
  inputMailUser,
  inputSubjectUser,
  inputContentUser,
  sendMailContact,
} from "../../store/reducer/contact";

export default function Contact() {
  const dispatch = useDispatch();

  function inputMail(e: any) {
    dispatch(inputMailUser(e.target.value));
  }
  function inputSubject(e: any) {
    dispatch(inputSubjectUser(e.target.value));
  }
  function inputContent(e: any) {
    dispatch(inputContentUser(e.target.value));
  }
  function sendMail(e: any) {
    e.preventDefault();
    dispatch(sendMailContact() as any);
  }

  return (
    <div className="h-screen">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h3 className="mt-10 text-center text-2xl font-bold leading-9 tracking-wide text-gray-900">
            Contactez nous
          </h3>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={sendMail}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              ></label>
              <div className="mt-2">
                <input
                  id="email"
                  onChange={inputMail}
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder=" Email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="text"
                  className="block text-sm font-medium leading-6 text-gray-900"
                ></label>
              </div>
              <div className="mt-2">
                <input
                  id="sujet"
                  onChange={inputSubject}
                  name="sujet"
                  type="sujet"
                  placeholder=" Sujet"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="text"
                  className="block text-sm font-medium leading-6 text-gray-900"
                ></label>
              </div>
              <div className="mt-2">
                <textarea
                  id="content"
                  name="content"
                  onChange={inputContent}
                  placeholder=" Votre message,vos suggestions ou vos questions"
                  required
                  rows={5}
                  style={{ resize: "none" }}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></textarea>
              </div>
            </div>
            <button type="submit">
              <Button text={"Envoyez nous votre message"} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
