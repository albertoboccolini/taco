import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import TacoInputColor from "./TacoInputColor";
import CustomizationEngine from "./CustomizationEngine";

const Footer = () => {
  const {
    bgColor,
    setShowColorPicker,
    showColorPicker,
    changeBgColor,
    textColor,
    hexToRgba,
  } = CustomizationEngine();

  return (
    <footer
      className={`fixed bottom-0 left-0 h-20 w-full rounded-t-xl py-2.5 text-center text-sm font-bold`}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="flex w-full flex-row items-center justify-between px-4">
        <p className="flex-1 text-center">
          &copy; {new Date().getFullYear()} albertoboccolini | taco
        </p>
        <div className="relative rounded-full">
          <FontAwesomeIcon
            className={`mr-4 flex cursor-pointer rounded-full p-4 shadow-xl duration-500 hover:scale-125`}
            icon={faPencil as any}
            style={{
              backgroundColor: hexToRgba(bgColor, 10),
              color: textColor,
            }}
            onClick={() => setShowColorPicker(!showColorPicker)}
            size="xl"
          />
          {showColorPicker && (
            <div className="absolute bottom-full right-0 mb-2 rounded-md border-4">
              <TacoInputColor
                selectedColor={bgColor}
                onChange={(e) => changeBgColor(e.target.value)}
              />
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
