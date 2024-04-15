import { ImageResponse, ModalProps, SegmentationResponse } from "@/components/home/types";
import { useEffect, useRef, useState } from "react";
import { getImageDetail, getSegmentation } from "../services";
import { LoadingSpinner } from "@/components/commons";

export const Modal : React.FC<ModalProps> = ( {isOpen, setIsOpen, imageId} ) => {
    const [imageDetail, setImageDetail] = useState<ImageResponse | undefined>()
    const [segmentation, setSegmentation] = useState<SegmentationResponse[] | undefined>([])
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [currentValue, setCurrentValue] = useState<string>("")
    const modalRef = useRef<HTMLDivElement>(null)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if(isOpen){
            Promise.all([getImageDetail(imageId, setImageDetail), getSegmentation(imageId, setSegmentation, setCurrentValue)]).then(() => {
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
        if (value) {
            setCurrentValue(value);
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
                        <div className="relative" ref={dropdownRef}>
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
                                            {segmentation?.map((item:any    ) => {
                                                return (
                                                    <li key={item.id}>
                                                        <a onClick={changeCurrentValue}
                                                        key={item.id} 
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
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}