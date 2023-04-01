import './Loading.css';
export const Loading = () => {
    return (
        <>
            <h2>Loading....Please wait....</h2>
            <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </>
    )
}