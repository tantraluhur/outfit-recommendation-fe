import { useEffect, useState } from "react";
import { CardProps, ImageResponse } from "@/components/home/types";
import { getAllImage } from "@/components/home/services";
import { LoadingDot } from "@/components/commons";


export const Card : React.FC<CardProps> = ( {datasetId, totalImage} ) => {
    const [imageData, setImageData] = useState<ImageResponse[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        if(datasetId){
            getAllImage(datasetId, setImageData).then((isValid) => {
                if(isValid){
                    setIsLoading(false)
                }
            })
        }
    }, [datasetId])

    if(isLoading){
        return (
            <LoadingDot />
        )
    }

    return (
        <div className="grid gap-2">
            <div className="text-lg">
                Total Image: {totalImage}
            </div>
            <div className="flex flex-wrap gap-16">
                {imageData && imageData.map((item) => {
                    return (
                        <img src={item.image} key={item.id} className="card-image object-cover w-56 h-36"/>
                    )
                })}
            </div>
        </div>
    )
}