
export type DatasetResponse = {
    id: number,
    total_image: number,
    name: string,
    source_type: string,
    generation: string,
    season: string
}

export type ImageResponse = {
    id: number,
    colour_model: string,
    file_extension: string,
    width: number,
    height: number,
    name: string,
    image: string | '',
    dataset: number
}

export type DropdownProps = {
    currentValue: string;
    setCurrentValue: React.Dispatch<React.SetStateAction<string>>;
    dataset: DatasetResponse[];
    setDataset: React.Dispatch<React.SetStateAction<DatasetResponse[]>>;
    setDatasetId: React.Dispatch<React.SetStateAction<number | null>>;
    setDetailDataset: React.Dispatch<React.SetStateAction<DatasetResponse | undefined>>;
};

export type CardProps = {
    datasetId: number
    datasetDetail: DatasetResponse
}

export type ModalProps = {
    isOpen: boolean
    imageId: number | null
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export type PercentChartProps = {
    percent: number
    hexColor: string
}

export type ColorWheelProps = {
    baseColor: string
    width: number
    height: number
    isAbsolute?: boolean
}

export type SegmentationColor = {
    rgb_code: string,
    percentage: number,
    position_category: string,
}

export type SegmentationResponse = {
    id: number,
    part: string,
    size: number,
    segmantation_colour: SegmentationColor[]
}