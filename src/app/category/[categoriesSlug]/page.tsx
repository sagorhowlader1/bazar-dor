
interface CategoriesPageProps {
  params: Promise<{ categoriesSlug: string }>;
}

const CategoriesPage = async({params} : CategoriesPageProps) => {
    const {categoriesSlug} = await params;
    console.log(categoriesSlug, 'categeries card')
    return (
        <div>
            catfd card
        </div>
    );
};

export default CategoriesPage;