import React from 'react'

function NavigationDots({ active }) {
    return (
        <div className='app__navigation'>
            {['home', 'work', 'skills', 'contact'].map((item) => (
                <a
                    key={item + index}
                    href={`#${item}`}
                    className="app__navigation-dot"
                    style={active === item ? { backgroundColor: '#fff' } : {}}
                    onClick={() => setToggle(false)}
                />
            ))}
        </div>
    )
}

export default NavigationDots