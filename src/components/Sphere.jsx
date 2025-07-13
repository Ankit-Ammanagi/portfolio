import React from 'react'

const Sphere = () => {
    return (
        <div className='banner'>
            <div
                className='slider'
                style={{ '--quantity': 6 }}
            >
                {[1, 2, 3, 4, 5, 6].map(pos => (
                    <div
                        key={pos}
                        className='item'
                        style={{ '--position': `${pos}` }}
                    >
                        <img
                            src={`/images/image_${pos}.png`}
                            alt="logo"
                        />
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Sphere
