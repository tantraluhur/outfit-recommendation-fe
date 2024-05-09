import { RecommendationResponse } from "../types"
import { ItemInfo } from "./ItemInfo"

type ItemListProps = {
    data: RecommendationResponse | undefined
    displayedNumber: number

}

export const ItemList: React.FC<ItemListProps> = ( {data, displayedNumber} ) => {
    return (
        <div className="flex flex-wrap gap-8">
            {
                data?.rec_color.map((item, index) => {
                    if(index <= displayedNumber - 1)
                    return (
                        <ItemInfo 
                        key={index}
                        index={index+1}
                        hexCode={item}
                        image={data.rec_data[item]["image"]}
                        colorName={data.rec_data[item]["color_name"]}
                        />
                    )
                })
            }
        </div>
    )

}