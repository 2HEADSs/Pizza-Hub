import './Search.css'



export const Search = () => {

    return (
        <>
            <section className='radio-btn-wrapper'>

                <h1>Search by</h1>
                <label className="label-radio">Name
                    <input type="radio" checked="checked" name="radio" />
                    <span className="checkmark"></span>
                </label>
                <label className="label-radio">Type
                    <input type="radio" name="radio" value="ssssssssssssssssssssssssssss"/>
                    <span className="checkmark"></span>
                </label>
                <label className="label-radio">Three
                    <input type="radio" name="radio" />
                    <span className="checkmark"></span>
                </label>
                <label className="label-radio">Four
                    <input type="radio" name="radio" />
                    <span className="checkmark"></span>
                </label>
            </section>
        </>
    )
}