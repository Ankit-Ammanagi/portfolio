
const Sphere = ({banner,item,images}) => {
    return (
        <div className={`${banner}`}>
            <div
                className='slider'
                style={{ '--quantity': 12 }}
            >
                {images.map((img,pos) => (
                    <div
                        key={pos+1}
                        className={`${item}`}
                        style={{ '--position': `${pos}` }}
                    >
                        <img
                            src={`./images/${img}.png`}
                            alt="logo"
                        />
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Sphere
