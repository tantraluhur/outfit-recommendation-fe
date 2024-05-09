import { useEffect, useState } from "react"

import { Card, Dropdown } from "@/components/home/components"
import { DatasetResponse } from "@/components/home/types"
import { Navbar } from "@/components/layouts"
import Link from "next/link"
import { Button } from "@mui/material"

const HomeSection = () => {
    const [dataset, setDataset] = useState<DatasetResponse[]>([])
    const [currentValue, setCurrentValue] = useState<string>('')
    const [datasetId, setDatasetId] = useState<number | null>(null)
    const [detailDataset, setDetailDataset] = useState<DatasetResponse>()

    return (
        <div>
            <Navbar />
            <div className="m-10">
                <div className="flex justify-between">
                    <div className="text-3xl underline decoration-[1.19px] underline-offset-8 decoration-gray-300 mb-8">
                        Clothes
                    </div>
                    <div className="flex gap-4">
                        <Dropdown
                        dataset={dataset}
                        setDataset={setDataset}
                        currentValue={currentValue}
                        setCurrentValue={setCurrentValue}
                        setDatasetId={setDatasetId}
                        setDetailDataset={setDetailDataset}
                        />
                        <Link href={`/outfits/${datasetId}`}>
                            <Button
                            variant="outlined"
                            sx={{
                                height: 45,
                                borderColor: "#1c8aa3",
                                ":hover" : {
                                    borderColor: "#1c8aa3",

                                }
                            }}
                            className="text-[#1c8aa3]"
                            >
                                Recommended Outfits
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-wrap gap-16">
                    { datasetId && detailDataset && <Card datasetDetail={detailDataset} datasetId={datasetId}/>}
                </div>
            </div>
      </div>
    )
}

export default HomeSection