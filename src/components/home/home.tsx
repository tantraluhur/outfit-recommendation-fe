import { useEffect, useState } from "react"

import { Card, Dropdown } from "./components"
import { DatasetResponse } from "./types"

export const HomeSection = () => {
    const [dataset, setDataset] = useState<DatasetResponse[]>([])
    const [currentValue, setCurrentValue] = useState<string>('')
    const [datasetId, setDatasetId] = useState<number | null>(null)
    const [detailDataset, setDetailDataset] = useState<DatasetResponse>()

    return (
        <div>
            <Dropdown
            dataset={dataset}
            setDataset={setDataset}
            currentValue={currentValue}
            setCurrentValue={setCurrentValue}
            setDatasetId={setDatasetId}
            setDetailDataset={setDetailDataset}
            />
            <div className="flex flex-wrap gap-16">
                { datasetId && detailDataset && <Card datasetDetail={detailDataset} datasetId={datasetId}/>}
            </div>
        </div>
    )
}