


const CategoriesPage = async({params}) => {
    const {categoriesSlug} = await params;
    console.log(categoriesSlug)
    return (
        <div>
            catfd card
        </div>
    );
};

export default CategoriesPage;