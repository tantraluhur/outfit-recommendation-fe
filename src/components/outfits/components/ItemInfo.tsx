import { ColorWheel } from "@/components/home"
import { Carousel } from "./Carousel"


type ItemInfoProps = {
    index: number
    image: string[]
    hexCode: string
    colorName: string
    percentage: string
    segmentation: string
}

export const ItemInfo: React.FC<ItemInfoProps> = ( { index, image, hexCode, colorName, percentage, segmentation } ) => {
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
            <div className="rounded-lg  w-full flex justify-center items-center p-5">
                <ColorWheel 
                baseColor={hexCode}
                width={100}
                height={100}
                />
            </div>
            <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-300" />
            <div>
                Color Code: {hexCode}
            </div>
            <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-300" />
            <div>
                Total Outfit: {image.length}
            </div>
            <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-300" />
            <div>
                Percentage: {percentage}
            </div>
            <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-300" />
            <div>
                Segmentation: {segmentation}
            </div>
        </div>
    )
}