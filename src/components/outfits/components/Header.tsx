import { useState } from "react";

import { Navbar } from "@/components/layouts"
import { BoxDisplay } from "./BoxDisplay";
import {

    FormControl,
    InputLabel,
    Select,
    MenuItem,
  } from "@mui/material";
import { ColorWheel } from "@/components/home";

type HeaderSectionProps = {
    color: string[] | undefined
    displayedNumber: number
    setDisplayedNumber: (num: number) => void
}

export const HeaderSection: React.FC<HeaderSectionProps>  = ( {color, displayedNumber, setDisplayedNumber} ) => {
    const [displayedColor, setDisplayedColor] = useState<string[]>([])

    return (
        <div>
            <Navbar />
            <div className="flex justify-between p-8 text-white bg-[#373737]">
                <div className="grid gap-4 w-full">
                    <FormControl sx={{minWidth: 120, maxWidth: 700 }} >
                        <InputLabel shrink htmlFor="select-multiple-native" sx={{
                            textDecorationColor: "white"
                        }}>
                            <div className="text-white">
                                Number of Outfits   
                            </div>
                        </InputLabel>
                        <Select
                            value={displayedNumber}
                            label="Number of Outfits"   
                            inputProps={{
                                id: 'select-multiple-native'
                              }}
                              sx={{width: 650, 
                                color: "white",
                                '.MuiOutlinedInput-notchedOutline': {
                                borderColor: 'rgba(228, 219, 233, 0.25)',
                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'rgba(228, 219, 233, 0.25)',
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'rgba(228, 219, 233, 0.25)',
                                },
                                '.MuiSvgIcon-root ': {
                                fill: "white !important",
                                }
                              }}
                              onChange={(event: any) => {
                                setDisplayedNumber(event.target.value);
                              }}
                            >
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={15}>15</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                        </Select>
                    </FormControl>
                    <div className="flex flex-wrap gap-4">
                        {
                            color?.map((item, index) => {
                                if(index <= displayedNumber-1)
                                return (
                                    <BoxDisplay 
                                    key={index}
                                    index={index + 1}
                                    color={item}
                                    displayedColor={displayedColor}
                                    setDisplayedColor={setDisplayedColor}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
                <div className="colorwheel w-full flex justify-center items-center">
                    {
                        color?.map((item, index) => {
                            if(index <= displayedNumber-1 && !displayedColor.includes(item))
                            return (
                                <ColorWheel 
                                key={index}
                                baseColor={item}
                                width={180}
                                height={180}
                                isAbsolute={true}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}