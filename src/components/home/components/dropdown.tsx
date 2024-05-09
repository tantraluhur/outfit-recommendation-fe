import { useState, useRef, useEffect } from 'react';
import { getAllDataset } from '@/components/home/services';
import { DropdownProps } from '@/components/home/types';
import { LoadingSpinner } from '@/components/commons';

export const Dropdown: React.FC<DropdownProps> = ({ currentValue, setCurrentValue, dataset, setDataset, setDatasetId, setDetailDataset }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true)
    const dropdownRef = useRef<HTMLDivElement>(null);
    
    const changeCurrentValue = (event: any) => {
        const id = event.currentTarget.id;
        const value = event.currentTarget.textContent;
        const data = JSON.parse(event.currentTarget.getAttribute('dataset-detail'));
        if (value || id || data) {
            setCurrentValue(value);
            setDatasetId(id);
            setDetailDataset(data)
            setIsOpen(false);
        }
    }
    
    useEffect(() => {
        getAllDataset(setDataset, setCurrentValue, setDatasetId, setDetailDataset).then((isValid) => {
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

  return (
        <div className="relative" ref={dropdownRef}>
            <div className='w-auto'>
                <div className="absolute -top-2 left-2 bg-white px-1 text-xs font-medium text-[#409db2]">Dataset</div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="py-2 px-4 border-[3px] border-[#1c8aa3] rounded shadow truncate"
                >
                    {currentValue}
                    <span className={`transform ${isOpen ? 'rotate-180' : ''} inline-block ml-2 text-xs text-[#757575]`}>
                    ▼
                    </span>
                </button>
                {isOpen && (
                    <div className="dropdown absolute mt-1 rounded-b w-full bg-white">
                        <ul className="block">
                            <button>
                                {dataset.map((item:any) => {
                                    return (
                                        <li key={item.id}><a onClick={changeCurrentValue}
                                        key={item.id} 
                                        id={item.id} 
                                        dataset-detail={JSON.stringify(item)}
                                        className="px-4 py-2 block hover:bg-[#edf7f9] truncate">{item.name}</a></li>
                                    )
                                })}
                            </button>
                        </ul>
                    </div>
                )}
            </div>
        </div>
  );
}
