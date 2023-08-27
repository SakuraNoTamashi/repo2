import React, { useEffect } from 'react'
import { useState } from 'react';
import MatrixRain from './matrixLoad';
import { preLoaderAnim } from './PreloaderAni';


export default function ScreenPreLoader() {
    useEffect(
        () => {
            preLoaderAnim()
        }, []
    );



    return (
        <div className='preloader'>
            <span className='text-container'><MatrixRain /></span>
        </div>
    )
}
