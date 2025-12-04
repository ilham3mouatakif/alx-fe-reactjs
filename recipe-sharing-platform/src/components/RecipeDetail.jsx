import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import recipesData from '../data.json';

function RecipeDetail() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const foundRecipe = recipesData.find((r) => r.id === parseInt(id));
        setRecipe(foundRecipe);
    }, [id]);

    if (!recipe) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <p className="text-xl text-gray-600">Recipe not found</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-4xl mx-auto">
                <Link
                    to="/"
                    className="inline-block mb-6 text-blue-600 hover:text-blue-800 font-semibold"
                >
                    ← Back to Recipes
                </Link>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="w-full h-64 object-cover"
                    />

                    <div className="p-8">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">
                            {recipe.title}
                        </h1>
                        <p className="text-lg text-gray-600 mb-8">{recipe.summary}</p>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Ingredients
                                </h2>
                                <ul className="space-y-2">
                                    {recipe.ingredients.map((ingredient, index) => (
                                        <li key={index} className="text-gray-700 flex items-start">
                                            <span className="text-blue-600 mr-2">•</span>
                                            {ingredient}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Instructions
                                </h2>
                                <ol className="space-y-3">
                                    {recipe.instructions.map((instruction, index) => (
                                        <li key={index} className="text-gray-700">
                                            <span className="font-semibold text-blue-600 mr-2">
                                                {index + 1}.
                                            </span>
                                            {instruction}
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecipeDetail;
