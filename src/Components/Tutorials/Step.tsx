export default function Step({ steps }) {
  return (
    <div>
      {steps
        ? steps.map((step) => (
            <div
              key={step.id}
              className="flex items-center p-4 flex-col-reverse border-t border-gray-200 sm:flex-row"
            >
              <div className="mr-4">
                <h4 className="font-bold text-lg text-left ">
                  Etape {step.ordre} :
                </h4>
                <p className="text-left">{step.contenu}</p>
              </div>
              <img
                className="sm:w-2/4 "
                src={step.imageEtape ? step.imageEtape : ""}
                alt=""
              />
            </div>
          ))
        : ""}
    </div>
  );
}
