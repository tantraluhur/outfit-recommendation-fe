import axios from "axios"
import { DatasetResponse, ImageResponse, SegmentationResponse } from "../types"

export const getAllDataset = async (setDataset: React.Dispatch<React.SetStateAction<DatasetResponse[]>>, 
    setCurrentValue: React.Dispatch<React.SetStateAction<string>>, 
    setDatasetId: React.Dispatch<React.SetStateAction<number | null>>,
    setDetailDataset: React.Dispatch<React.SetStateAction<DatasetResponse | undefined>>) => {
    try {
        const response = await axios.get("https://outfit-recommendation.vercel.app/api/v1/dataset/")
        const data = response.data.data
        if(data){
            setCurrentValue(data[0].name)
            setDatasetId(data[0].id)
            setDetailDataset(data[0])
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

export const getImageDetail = async (imageId: number | null, setImageDetail: React.Dispatch<React.SetStateAction<ImageResponse | undefined>>) => {
    try {
        const response = await axios.get(`https://outfit-recommendation.vercel.app/api/v1/clothes/detail/${imageId}/`)
        const data = response.data.data
        if(data){
            setImageDetail(data)
        }
        return true
    } catch (error: any) {
        const message = error.response?.data?.message || error.response?.data?.detail || "An unexpected error occurred.";
        return false
    } 
}

export const getSegmentation = async (imageId: number | null, 
                                      setSegmentation: React.Dispatch<React.SetStateAction<SegmentationResponse[]>>,
                                      setCurrenValue: React.Dispatch<React.SetStateAction<string>> ,
                                        setIndexCurrentValue: React.Dispatch<React.SetStateAction<number>>) => {
    try {
        const response = await axios.get(`https://outfit-recommendation.vercel.app/api/v1/clothes/segmentation/${imageId}/`)
        const data = response.data.data
        if(data){
            setSegmentation(data)
            setCurrenValue(data[0].part)
            setIndexCurrentValue(0)
        }
        return true
    } catch (error: any) {
        const message = error.response?.data?.message || error.response?.data?.detail || "An unexpected error occurred.";
        return false
    }
}