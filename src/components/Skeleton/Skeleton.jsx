import './Skeleton.scss';

const Skeleton = () => {
    return (
        <>
            <h3 style={{fontStyle: 'italic', textAlign: 'center'}} className="char__select">Please select a character to see information...</h3>
            <div className="skeleton">
                <div className="pulse skeleton__header">
                    <div className="pulse skeleton__circle"></div>
                    <div className="pulse skeleton__mini"></div>
                </div>
                <div className="pulse skeleton__block"></div>
                <div className="pulse skeleton__block"></div>
                <div className="pulse skeleton__block"></div>
            </div>
        </>
    )
}

export default Skeleton;