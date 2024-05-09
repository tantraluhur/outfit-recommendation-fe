import { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import { HeaderSection, ItemList, RecommendationResponse, getReccomendation } from "@/components/outfits"
import { LoadingSpinner } from "@/components/commons"


const Outfits = () => {
    const router = useRouter()
    const { id } = router.query
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState<RecommendationResponse>()
    const [displayedNumber, setDisplayedNumber] = useState(5)

    useEffect(() => {
        if(id)
        getReccomendation(id, setData).then(() => {
            setIsLoading(false)
        })
    }, [id])

    if(isLoading){
        return (
            <div className="h-screen">
                <LoadingSpinner />
            </div>
        )
    }
    return (
        <div className="grid gap-4">
            <HeaderSection 
            color={data?.rec_color}
            displayedNumber={displayedNumber}
            setDisplayedNumber={setDisplayedNumber}
            />
            <div className="m-4">
                <ItemList 
                data={data}
                displayedNumber={displayedNumber}
                />
            </div>
        </div>
    )
}

export default Outfits