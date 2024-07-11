'use client';

import SpinnerIcon from "../icons/loadingicon"
import { twMerge } from "tailwind-merge";

import { EButtonType, IButton } from "./type";


export const Button=({
    className,
    leftSymbol,
    rightSymbol,
    colorTheme=EButtonType.PRIMARY_WHITE,
    children,
    isLoading,
    isFullWidth,
    isDisable,...props
    }:IButton
) => {
    const buttonsClasses: { [key: string]: string } = {
        [EButtonType.OUTLINE]: `${
          !isDisable
            ? 'bg-transparent !text-white border-white border'
            : 'bg-grey-50 text-grey-70 cursor-not-allowed'
        } ${isLoading && 'cursor-not-allowed hover:bg-white hover:text-grey-10'}`,
        [EButtonType.PRIMARY_WHITE]: `${
          !isDisable
            ? 'bg-white dark:bg-red-500 text-grey-10 lg:hover:bg-mint-300 focus:bg-white'
            : 'bg-grey-50 text-grey-70 cursor-not-allowed'
        } ${isLoading && 'cursor-not-allowed hover:bg-white hover:text-grey-10'}`,
        [EButtonType.PRIMARY_DARK]: `${
          !isDisable
            ? 'bg-grey-10 text-white lg:hover:text-grey-10 lg:hover:bg-mint-300 focus:bg-grey-15 focus:text-white'
            : 'bg-grey-50 text-grey-70 cursor-not-allowed'
        } ${
            isLoading &&
          'bg-grey-20 text-grey-95 lg:hover:bg-grey-20 lg:hover:text-grey-95 cursor-not-allowed'
        }`,
        [EButtonType.SECONDARY_DARK]: `${
          !isDisable
            ? 'text-white bg-grey-20 lg:hover:text-grey-10 lg:hover:bg-mint-300 focus:text-white focus:bg-grey-20'
            : 'bg-grey-50 text-grey-70 cursor-not-allowed'
        } ${
            isLoading &&
          'bg-grey-30 text-grey-95 lg:hover:bg-grey-30 lg:hover:text-grey-95 cursor-not-allowed'
        }`,
        [EButtonType.TEXT_DARK]: `${
          !isDisable
            ? 'text-white lg:hover:text-mint-300 focus:text-grey-15 focus:border-none'
            : 'text-grey-30 cursor-not-allowed'
        } ${isLoading && 'text-grey-50 hover:text-grey-50 cursor-not-allowed'}`,
      };
   
    const buttonStyle=twMerge("px-0.8em flex text-1em",isFullWidth && "w-full",className)
    return (
        <button
        
            {...props}
            className={twMerge("rounded-xl",className,buttonsClasses[colorTheme])}
        >
        {isLoading&& <SpinnerIcon/> }
        {!isLoading&& 
            <span className={buttonStyle}> 
                {leftSymbol}{children}{rightSymbol}
            </span>
        }

        </button>
    );
};
export default {Button}