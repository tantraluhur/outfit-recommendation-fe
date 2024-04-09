import { useState, useRef, useEffect } from 'react';
import { getAllDataset } from '@/components/home/services';
import { DropdownProps } from '@/components/home/types';
import { LoadingSpinner } from '@/components/commons';

export const Dropdown: React.FC<DropdownProps> = ({ currentValue, setCurrentValue, dataset, setDataset, setDatasetId, setTotalImage }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true)
    const dropdownRef = useRef<HTMLDivElement>(null);
    
    const changeCurrentValue = (event: any) => {
        const id = event.currentTarget.id;
        const value = event.currentTarget.textContent;
        const totalImage = event.currentTarget.getAttribute('total-image');

        if (value || id) {
            setCurrentValue(value);
            setDatasetId(id);
            setTotalImage(totalImage)
            setIsOpen(false);
        }
    }
    
    useEffect(() => {
        getAllDataset(setDataset, setCurrentValue, setDatasetId, setTotalImage).then((isValid) => {
            if(isValid){
                setIsLoading(false)
            }
        })
    }, [])

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [dropdownRef]);

    if(isLoading){
        return (
            <LoadingSpinner />
        )
    }

  return (
    <div className="flex justify-between">
        <div className="text-3xl underline decoration-[1.19px] underline-offset-8 decoration-gray-300 mb-8">
            Clothes
        </div>
        <div className="relative" ref={dropdownRef}>
            <div className='w-auto min-w-52'>
                <div className="absolute -top-2 left-2 bg-white px-1 text-xs font-medium text-[#409db2]">Dataset</div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="py-2 px-4 border-[3px] border-[#1c8aa3] rounded shadow"
                >
                    {currentValue}
                    <span className={`transform ${isOpen ? 'rotate-180' : ''} inline-block ml-2 text-xs text-[#757575]`}>
                    ▼
                    </span>
                </button>
                {isOpen && (
                    <div className="dropdown absolute mt-1 rounded-b w-full bg-white">
                        <ul className="block">
                            {dataset.map((item:any) => {
                                return (
                                    <li key={item.id}><a onClick={changeCurrentValue}
                                     key={item.id} 
                                     id={item.id} 
                                     total-image={item.total_image}
                                     className="px-4 py-2 block hover:bg-[#edf7f9]">{item.name}</a></li>
                                )
                            })}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    </div>
  );
}
