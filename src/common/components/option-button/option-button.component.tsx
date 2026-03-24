import { Option } from "../../models/option.model";

interface Props {
  option: Option;
  onClick: () => void;
}

export const OptionButton: React.FC<Props> = (props) => {
  const { option, onClick } = props;
  const ff = option.featureFlag;
  return (
    <div
      className={`card transition-all duration-200 cursor-pointer group ${
        ff
          ? "bg-accent/10 border-2 border-accent shadow-md shadow-accent/30 hover:border-accent hover:shadow-xl hover:shadow-accent/40 hover:scale-[1.03]"
          : "bg-base-100 border border-base-content/20 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/20"
      }`}
      onClick={onClick}
    >
      <div className="card-body gap-3 flex flex-col justify-between">
        <div className="flex flex-col gap-3">
          <span
            className={`text-4xl font-black transition-colors leading-none ${
              ff
                ? "text-accent/60 group-hover:text-accent"
                : "text-primary/20 group-hover:text-primary/40"
            }`}
          >
            {String(option.id).padStart(2, "0")}
          </span>
          <div>
            {ff && (
              <span className="badge badge-accent text-xs font-semibold mb-1">
                Feature flag
              </span>
            )}
            <h2
              className={`card-title text-lg ${
                ff ? "text-accent" : "text-base-content"
              }`}
            >
              {option.title}
            </h2>
            <p className="text-base-content/50 text-sm">{option.description}</p>
          </div>
        </div>
        <div className="card-actions justify-end mt-2">
          <button
            className={`btn btn-sm ${
              ff
                ? "btn-accent group-hover:btn-accent"
                : "btn-outline btn-primary group-hover:btn-primary"
            }`}
          >
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
};
