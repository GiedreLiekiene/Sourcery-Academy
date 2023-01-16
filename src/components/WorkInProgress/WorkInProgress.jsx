import React from 'react';
import './work-in-progress.scss';
import CustomLink from '../Link/CustomLink';
import { assets } from '../../assets/svg/assets';


const { Construction, Gear, Hammer } = assets;

const WorkInProgress = () => {
    return (
        <div className='work-in-progress'>
            <div className='work-in-progress__container'>
                <div className='work-in-progress__construction-svg'>
                    <Construction />
                </div>
                <div className='work-in-progress__gear-svg'>
                    <Gear />
                </div>
                <div className='work-in-progress__hammer-svg'>
                    <Hammer />
                </div>
            </div>
            <h1 className='work-in-progress__header'>
                We're still working on this page. Check back soon.
            </h1>
            <div className='work-in-progress__link'>
                <CustomLink to="/" theme="primary">
                    Go home
                </CustomLink>
            </div>
        </div>
    )
}

export default WorkInProgress;