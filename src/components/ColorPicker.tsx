import React, { useState } from 'react';
import { ColorResult, SketchPicker } from 'react-color';
import { CardTexts } from '../locale/en';

interface ColorPickerProps {
    onChangeComplete?: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ onChangeComplete }) => {
    const [color, setColor] = useState<string>('#FFFFFF')
    const [displayColorPicker, setDisplayColorPicker] = useState<boolean>(false)

    const handleClick = () => {
        setDisplayColorPicker(!displayColorPicker)
    }

    const handleClose = () => {
        setDisplayColorPicker(false)
    }

    const handleChangeComplete = (colorResult: ColorResult) => {
        setColor(colorResult.hex);
        if (onChangeComplete) {
            onChangeComplete(colorResult.hex)
        }
    }
  return (
    <div className='grid justify-items-center md:justify-items-end'>
        <button className='btn-white' onClick={handleClick}>{CardTexts.BG_CARD}</button>
        {displayColorPicker ? (
            <div className='absolute z-20'>
                <div className='fixed top-0 right-0 bottom-0 left-0' onClick={handleClose}/>
                <SketchPicker 
                    color={color}
                    onChangeComplete={handleChangeComplete}
                />
            </div>
        ) : null}
   </div> 
  )
}

export default ColorPicker