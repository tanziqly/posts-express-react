import TagIcon from "../assets/TagIcon.svg";
import { SideBlock } from "./SideBlock";

export const TagsBlock = ({ items, isLoading = false }) => {
  return (
    <SideBlock title="Теги">
      <div>
        {(isLoading ? [...Array(5)] : items).map((name, i) => (
          <a href={`/tags/${name}`} key={i}>
            <div>
              <button className="flex items-center py-2 hover:bg-neutral-100 rounded-md w-full">
                <img className="pl-4 pr-8 h-5" src={TagIcon} alt="" />
                {isLoading ? (
                  <span className="text-lg text-neutral-600">Loading...</span>
                ) : (
                  <span>{name}</span>
                )}
              </button>
            </div>
          </a>
        ))}
      </div>
    </SideBlock>
  );
};
