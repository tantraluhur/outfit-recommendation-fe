import axios from "axios"
import { RecommendationResponse } from "../types"


export const getReccomendation = async (datasetId: any, setData: any) => {
    try {
        const response = await axios.get(`https://outfit-recs-421406.et.r.appspot.com/api/v1/clothes/recommendation/${datasetId}?limit=20`)
        const data = response.data
        setData(data)
        return true
    } catch (error: any) {
        const message = error.response?.data?.message || error.response?.data?.detail || "An unexpected error occurred.";
        return false
    }
}