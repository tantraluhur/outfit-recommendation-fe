import axios from "axios"
import { DatasetResponse, ImageResponse } from "../types"

export const getAllDataset = async (setDataset: React.Dispatch<React.SetStateAction<DatasetResponse[]>>, 
    setCurrentValue: React.Dispatch<React.SetStateAction<string>>, 
    setDatasetId: React.Dispatch<React.SetStateAction<number | null>>,
    setTotalImage: React.Dispatch<React.SetStateAction<number>>) => {
    try {
        const response = await axios.get("https://outfit-recommendation.vercel.app/api/v1/dataset/")
        const data = response.data.data
        if(data){
            setCurrentValue(data[0].name)
            setDatasetId(data[0].id)
            setTotalImage(data[0].total_image)
            setDataset(data)
        }
        return true
    } catch (error: any) {
        const message = error.response?.data?.message || error.response?.data?.detail || "An unexpected error occurred.";
        return false
    }
}

export const getAllImage = async (datasedId: number, setImageData: React.Dispatch<React.SetStateAction<ImageResponse[]>>) => {
    try {
        const response = await axios.get(`https://outfit-recommendation.vercel.app/api/v1/clothes/${datasedId}/`)
        const data = response.data.data
        if(data){
            setImageData(data)
        }
        return true
    } catch (error: any) {
        const message = error.response?.data?.message || error.response?.data?.detail || "An unexpected error occurred.";
        return false
    }
}