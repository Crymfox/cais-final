import React from 'react';
import Creator from '../components/Creator.tsx';

const Final: React.FC = () => {
    return (
        <>
        <img className="absolute top-0 h-full w-full opacity-70" src="/trophy.jpeg" />
        <div className='grid grid-flow-col grid-cols-4 px-4 h-screen place-items-center relative'>
            <div className='grid grid-flow-row grid-col-8 w-full h-full place-items-center relative '>
                <Creator final first />
                <Creator final first />
                <Creator final first />
                <Creator final first />
                <Creator final first />
                <Creator final first />
                <Creator final first />
                <Creator final first />
                <div className='
                    -top-[6%]
                    absolute
                    -z-10
                    w-full
                    h-full
                    border-black
                    grid grid-flow-row grid-col-8 place-items-center
                '>
                    <div className='w-full h-full border-b-2 border-black'></div>
                    <div className='w-full h-full border-r-2 border-b-2 border-black'></div>
                    <div className='w-full h-full border-b-2 border-black'></div>
                    <div className='w-full h-full border-r-2 border-b-2 border-black'></div>
                    <div className='w-full h-full border-b-2 border-black'></div>
                    <div className='w-full h-full border-r-2 border-b-2 border-black'></div>
                    <div className='w-full h-full border-b-2 border-black'></div>
                    <div className='w-full h-full border-r-2 border-b-2 border-black'></div>
                </div>
            </div>
            <div className='grid grid-flow-row grid-col-4 w-full h-full place-items-center relative z-10'>
                <Creator final />
                <Creator final />
                <Creator final />
                <Creator final />
                <div className='
                    -top-[12.5%]
                    absolute
                    -z-10
                    w-full
                    h-full
                    border-black
                    grid grid-flow-row grid-col-4 place-items-center
                '>
                    <div className='w-full h-full border-b-2 border-black'></div>
                    <div className='w-full h-full border-b-2 border-r-2 border-black'></div>
                    <div className='w-full h-full border-b-2 border-black'></div>
                    <div className='w-full h-full border-b-2 border-r-2 border-black'></div>
                </div>
            </div>
            <div className='grid grid-flow-row grid-col-2 w-full h-full place-items-center relative'>
                <Creator final />
                <Creator final />
                <div className='
                    -top-[25%]
                    absolute
                    -z-10
                    w-full
                    h-full
                    border-black
                    grid grid-flow-row grid-col-4 place-items-center
                '>
                    <div className='w-full h-full border-b-2 border-black'></div>
                    <div className='w-full h-full border-b-2 border-r-2 border-black'></div>
                </div>
            </div>
            <div className='grid grid-flow-row grid-cols-1 w-full h-full place-items-center relative'>
                <Creator final />
                <div className='
                    -top-[50%]
                    absolute
                    -z-10
                    w-full
                    h-full
                    border-black
                    grid grid-flow-row grid-col-4 place-items-center
                '>
                    <div className='w-full h-full border-b-2 border-black'></div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Final;