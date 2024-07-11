'use client';


import { ChangeEvent, useEffect, useState } from "react";
import { Button } from "../buttons/button";
import { IInput } from "./type";
import { twMerge } from "tailwind-merge";
import { EButtonType } from "../buttons/type";



export const RangePicker=({
    className,
    isFullWidth=false,
    ...props
    }:IInput
) => {
    const [value,setValue]=useState('?-? VND')
    const [start,setStart]=useState(0)
    const [end,setEnd]=useState(0)
    const [visible,setVisible]=useState(false)
    const handleDrop=()=>{
        visible==true? setVisible(false) : setVisible(true)
    }
    const handleStartChange=(e:ChangeEvent<HTMLInputElement>)=>{
        if(Number(e.target.value) >=0 && Number(e.target.value) <= Number(end))
            setStart(Number(e.target.value))
    }
    const handleEndChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setEnd(Number(e.target.value))
    }
    const handleCancle=()=>{
        visible==true? setVisible(false) : setVisible(true)
    }
    const handleDelete=()=>{
        setValue('?-? VND')
        visible==true? setVisible(false) : setVisible(true)
        setStart(0)
        setEnd(0)
    }
    useEffect(()=>{
        setValue(start+'-'+end+' VND' )
    },[start,end])
    return (
      <div className={className}>
        <button onClick={handleDrop}  className="border-2 w-8em border-black rounded-xl  flex bg-slate-300 justify-around">
            <input 
                className={twMerge(" w-6em "," text-center rounded-full bg-inherit font-bold text-1em p-0.2em  pointer-events-none outline-none")}  
                placeholder={value}
            />
            <button onClick={handleDelete} className={twMerge(start===0 ?`hidden`:`rounded-full w-2em h-2em items-center`)}>X</button>
        </button>
        <div className={twMerge("flex flex-col items-center w-8em border-2 border-black rounded-md",!visible && "hidden")}>
            <div className=" flex mt-0.2em border-2 border-black rounded-full justify-around mb-1em pl-1em pr-1em">
                <input 
                    type="number" 
                    className="text-0.75em text-center w-3em outline-none rounded-full" 
                    value={start}
                    onChange={handleStartChange}
                />
                <span>|</span>
                <input 
                    type="number" 
                    className="text-0.75em text-center w-3em outline-none rounded-full" 
                    value={end}
                    onChange={handleEndChange}
                />
            </div>

            <div className="w-8em flex justify-around mb-0.5em">
                <Button className="rounded-full text-0.75em" colorTheme={EButtonType.PRIMARY_DARK}  onClick={handleDrop} >Apply</Button>
                <Button className="rounded-full text-0.75em" colorTheme={EButtonType.PRIMARY_DARK} onClick={handleCancle}>Cancel</Button>
            </div>
        </div>
      </div>
      )

};