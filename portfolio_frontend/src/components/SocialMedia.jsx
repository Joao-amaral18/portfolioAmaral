import React from 'react'

import { LinkedinLogo, InstagramLogo } from 'phosphor-react'

function SocialMedia() {
    return (
        <div className='app__social'>
            <div>
                <LinkedinLogo />
            </div>
            <div>
                <InstagramLogo />
            </div>
        </div>
    )
}

export default SocialMedia