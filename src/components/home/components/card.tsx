import { useEffect, useState } from "react";
import { CardProps, ImageResponse } from "@/components/home/types";
import { getAllImage } from "@/components/home/services";
import { LoadingDot } from "@/components/commons";


export const Card : React.FC<CardProps> = ( {datasetId, datasetDetail} ) => {
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
                <table>
                    <tbody>
                        <tr>
                            <td> Name </td>
                            <td> : {datasetDetail.name} </td>
                        </tr>
                        <tr>
                            <td> Generation </td>
                            <td> : {datasetDetail.generation} </td>
                        </tr>
                        <tr>
                            <td> Season </td>
                            <td> : {datasetDetail.season} </td>
                        </tr>
                        <tr>
                            <td> Source Type </td>
                            <td> : {datasetDetail.source_type} </td>
                        </tr>
                        <tr>
                            <td> Total Image </td>
                            <td> : {datasetDetail.total_image} </td>
                        </tr>
                    </tbody>
                </table>
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