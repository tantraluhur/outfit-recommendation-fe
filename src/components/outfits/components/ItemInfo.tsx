import { ColorWheel } from "@/components/home"
import { Carousel } from "./Carousel"


type ItemInfoProps = {
    index: number
    image: string[]
    hexCode: string
    colorName: string
}

export const ItemInfo: React.FC<ItemInfoProps> = ( { index, image, hexCode, colorName} ) => {
    const boxStyle = {
        backgroundColor: hexCode,
    };
    return (
        <div className="border-2 max-w-72 w-72 p-4 grid gap-2">
            <div className="flex items-center gap-2 justify-start">
                <div className="w-4 h-4 rounded-sm" style={boxStyle}/>
                <div className="">
                    {index}. {colorName}
                </div>
            </div>
            <Carousel 
            imageList={image}
            />
            <div className="rounded-lg  w-full flex justify-center items-center p-5" style={boxStyle}>
                <ColorWheel 
                baseColor={hexCode}
                width={100}
                height={100}
                />
            </div>
        </div>
    )
}