import { useEffect, useState } from "react"

import { Card, Dropdown } from "@/components/home/components"
import { DatasetResponse } from "@/components/home/types"
import { Navbar } from "@/components/layouts"

const HomeSection = () => {
    const [dataset, setDataset] = useState<DatasetResponse[]>([])
    const [currentValue, setCurrentValue] = useState<string>('')
    const [datasetId, setDatasetId] = useState<number | null>(null)
    const [detailDataset, setDetailDataset] = useState<DatasetResponse>()

    return (
        <div>
            <Navbar />
            <div className="m-10">
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
      </div>
    )
}

export default HomeSection