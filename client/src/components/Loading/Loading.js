import './Loading.css';
export const Loading = () => {
    return (
        <div className='loader-wrapper'>
            <h2 className='loading-header'>Loading....Please wait....</h2>
            <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}