import { Checkbox } from "@mui/material";

type BoxDisplayProps = {
    index: number
    color: string
    displayedColor: string[]
    setDisplayedColor: React.Dispatch<React.SetStateAction<string[]>>
}

export const BoxDisplay: React.FC<BoxDisplayProps>  = ( {color, index, displayedColor, setDisplayedColor} ) => {
    const boxStyle = {
        backgroundColor: color,
    };
    return (
        <div className="bg-white w-20 h-20 rounded-lg flex flex-col">
            <div className="flex justify-center items-center text-black gap-1 font-bold p-[0.5rem]">
                {index}.
                <Checkbox
                checked={!displayedColor.includes(color)}
                onChange={(e) => {
                    if (!e.target.checked) {
                        setDisplayedColor((prev) => [...prev, color]);
                    } else {
                        setDisplayedColor((prev) => prev.filter((item) => item !== color));
                    }
                }}
                />
            </div>
            <div className={`w-full h-full rounded-bl-md rounded-br-md`} style={boxStyle}>
            </div>
        </div>
    )
}