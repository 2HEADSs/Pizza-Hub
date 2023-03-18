import './CreatePizza.css'
export const CreatePizza = () => {
    return (
        <div className="create-form-wrap">
            <h2>Create your precious </h2>
            <form className="create-form">
                <input type="text" className="name" name="name" placeholder="Name of your pizza" />
                <input type="text" className="type" name="type" placeholder="MUST BE DROPDOWN" />
                <input 
                type="text" 
                className="ingrediants" 
                name="ingrediants"
                    placeholder="Write your ingrediants separete with comma: ',' "
                />
                <input type="number" className="prepTime" name="prepTime" placeholder="Preptime" />
                <input type="number" className="cookTime" name="cookTime" placeholder="Cooktime" />
                <input type="text" className="img" name="img" placeholder="Add link with image " />
                <textarea className="recipe" name="recipe" placeholder="Describe preparation..."></textarea>

                <input type="submit" className="login" value="Push in main branch" />
            </form>
        </div>
    )
}