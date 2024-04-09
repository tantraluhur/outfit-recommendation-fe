import { useEffect, useState } from "react"

import { Card, Dropdown } from "./components"
import { LoadingSpinner } from "../commons"
import { DatasetResponse, ImageResponse } from "./types"
import { getAllImage } from "./services/dataset"

export const HomeSection = () => {
    const [dataset, setDataset] = useState<DatasetResponse[]>([])
    const [currentValue, setCurrentValue] = useState<string>('')
    const [datasetId, setDatasetId] = useState<number | null>(null)

    return (
        <div>
            <Dropdown
            dataset={dataset}
            setDataset={setDataset}
            currentValue={currentValue}
            setCurrentValue={setCurrentValue}
            setDatasetId={setDatasetId}
            />
            <div className="flex flex-wrap gap-16">
                { datasetId && <Card datasetId={datasetId}/>}
            </div>
        </div>
    )
}