import { ImageResponse, ModalProps, SegmentationResponse } from "@/components/home/types";
import { useEffect, useRef, useState } from "react";
import { getImageDetail, getSegmentation } from "../services";
import { LoadingSpinner } from "@/components/commons";
import { ColorWheel, PercentChart } from "@/components/home/components";

export const Modal : React.FC<ModalProps> = ( {isOpen, setIsOpen, imageId} ) => {
    const [imageDetail, setImageDetail] = useState<ImageResponse | undefined>()
    const [segmentation, setSegmentation] = useState<SegmentationResponse[]>([])
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [currentValue, setCurrentValue] = useState<string>("")
    const [indexCurrentValue, setIndexCurrentValue] = useState<number>(0)
    const modalRef = useRef<HTMLDivElement>(null)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if(isOpen){
            Promise.all([getImageDetail(imageId, setImageDetail), getSegmentation(imageId, setSegmentation, setCurrentValue, setIndexCurrentValue)]).then(() => {
                setIsLoading(false)
            })  
        }
    }, [isOpen])

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setIsOpen(false);
                setIsLoading(true);
                setCurrentValue("")
            }

            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [modalRef,dropdownRef]);

    const changeCurrentValue = (event: any) => {
        const value = event.currentTarget.textContent;
        const index = event.currentTarget.getAttribute("index-value")
        if (value) {
            setCurrentValue(value);
            setIndexCurrentValue(index)
            setIsDropdownOpen(false);
        }
    }
    

    if(isLoading && isOpen){
        return (
            <div className="fixed right-0 top-0 left-0 flex justify-center items-center h-full bg-black bg-opacity-50">
                <LoadingSpinner />
            </div>
        )
    }

    return (
    <div className={`${!isOpen? 'hidden' : ''} fixed top-0 right-0 left-0 flex justify-center items-center h-full bg-black bg-opacity-40`}>
        <div className="w-auto h-[70%] overflow-y-auto"  ref={modalRef}>
            <div className="bg-white shadow">
                <div className="flex justify-between p-5 gap-5">
                    <div className="">
                        <div className="text-2xl underline decoration-[1.19px] underline-offset-8 decoration-gray-300 mb-2">
                            Clothes
                        </div>
                        <div className="text-base">
                            <table className="">
                                <tbody>
                                    <tr>
                                        <td className="font-bold"> File Name </td>
                                        <td> : {imageDetail?.name} </td>
                                    </tr>
                                    <tr>
                                        <td className="font-bold"> Width </td>
                                        <td> : {imageDetail?.width} </td>
                                    </tr>
                                    <tr>
                                        <td className="font-bold"> Height </td>
                                        <td> : {imageDetail?.height} </td>
                                    </tr>
                                    <tr>
                                        <td className="font-bold"> Format </td>
                                        <td> : {imageDetail?.file_extension} </td>
                                    </tr>
                                    <tr>
                                        <td className="font-bold"> Colour Model </td>
                                        <td> : {imageDetail?.colour_model} </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>  
                    </div>
                    <div className="">
                        <div className="text-2xl underline decoration-[1.19px] underline-offset-8 decoration-gray-300 mb-2">
                            Segmentation
                        </div>
                        <img src={imageDetail?.image} className="mb-2"/>
                        <div className="font-bold">
                            Part:
                        </div>
                        <div className="relative mb-2" ref={dropdownRef}>
                            <div className='w-auto'>
                                    <button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="py-2 px-4 border-[3px] rounded shadow"
                                >
                                    {currentValue? currentValue : "Choose Part"}
                                    <span className={`transform ${isDropdownOpen ? 'rotate-180' : ''} inline-block ml-2 text-xs text-[#757575]`}>
                                    ▼
                                    </span>
                                </button>
                                {isDropdownOpen && (
                                    <div className="dropdown absolute mt-1 rounded-b bg-white">
                                        <ul className="block">
                                            {segmentation?.map((item:any,index:number) => {
                                                return (
                                                    <li key={item.id}>
                                                        <a onClick={changeCurrentValue}
                                                        key={item.id}
                                                        index-value={index}
                                                        className="px-4 py-2 block hover:bg-[#edf7f9]">{item.part}
                                                        </a>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="grid gap-8">
                            <div>
                                <b>Size:</b> {segmentation?.length? segmentation[indexCurrentValue].size: ""}
                            </div>
                            {
                                segmentation?.length? segmentation[indexCurrentValue].segmantation_colour.map((item) => {
                                    return (
                                        <div key={item.percentage}>
                                            <b>Position Category</b>: {item.position_category} <br/>
                                            <b>Percentage (in %)</b>:
                                            <PercentChart 
                                            percent={item.percentage}
                                            hexColor={item.rgb_code}
                                            />
                                            <b>Colour Definition</b>:
                                            <ColorWheel 
                                            baseColor={item.rgb_code}
                                            />

                                        </div>
                                    )
                                }) : ""
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}