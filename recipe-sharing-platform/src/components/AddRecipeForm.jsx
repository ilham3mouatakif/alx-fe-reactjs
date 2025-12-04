import { useState } from 'react';

function AddRecipeForm() {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [steps, setSteps] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        if (!title.trim()) {
            newErrors.title = 'Recipe title is required';
        }

        if (!ingredients.trim()) {
            newErrors.ingredients = 'Ingredients are required';
        } else {
            const ingredientList = ingredients.split('\n').filter(i => i.trim());
            if (ingredientList.length < 2) {
                newErrors.ingredients = 'Please provide at least 2 ingredients';
            }
        }

        if (!steps.trim()) {
            newErrors.steps = 'Preparation steps are required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            const newRecipe = {
                title,
                ingredients: ingredients.split('\n').filter(i => i.trim()),
                steps: steps.split('\n').filter(s => s.trim())
            };

            console.log('New Recipe:', newRecipe);
            alert('Recipe submitted successfully!');

            // Reset form
            setTitle('');
            setIngredients('');
            setSteps('');
            setErrors({});
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
                    Add New Recipe
                </h1>

                <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                    <div className="mb-6">
                        <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
                            Recipe Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.title ? 'border-red-500' : 'border-gray-300'
                                }`}
                            placeholder="Enter recipe title"
                        />
                        {errors.title && (
                            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
                        )}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="ingredients" className="block text-gray-700 font-semibold mb-2">
                            Ingredients (one per line)
                        </label>
                        <textarea
                            id="ingredients"
                            value={ingredients}
                            onChange={(e) => setIngredients(e.target.value)}
                            rows="6"
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.ingredients ? 'border-red-500' : 'border-gray-300'
                                }`}
                            placeholder="400g spaghetti&#10;200g pancetta&#10;4 large eggs"
                        />
                        {errors.ingredients && (
                            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
                        )}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="steps" className="block text-gray-700 font-semibold mb-2">
                            Preparation Steps (one per line)
                        </label>
                        <textarea
                            id="steps"
                            value={steps}
                            onChange={(e) => setSteps(e.target.value)}
                            rows="8"
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.steps ? 'border-red-500' : 'border-gray-300'
                                }`}
                            placeholder="Cook spaghetti in salted water&#10;Fry pancetta until crispy&#10;Mix eggs with cheese"
                        />
                        {errors.steps && (
                            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Submit Recipe
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddRecipeForm;
