import React from 'react'

import { NavgationDots, SocialMedia } from '../components'

const AppWrapper = (Component, idName, ClassNames) => function HOC() {
    return (
        <div id={idName} className={`app__cotainer ${ClassNames}`}>
            <SocialMedia />
            <div className='app__wrapper app__flex'>
                <Component />
                <div className='copyright'>
                    <p className='p-text'>@2022 JOAO</p>
                    <p className='p-text'>All rights reserved</p>
                </div>
            </div>
            <NavgationDots active={idName} />
        </div>
    )
}

export default AppWrapper