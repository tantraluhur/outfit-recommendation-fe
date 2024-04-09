
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
    setTotalImage: React.Dispatch<React.SetStateAction<number>>;
};

export type CardProps = {
    datasetId: number
    totalImage: number
}