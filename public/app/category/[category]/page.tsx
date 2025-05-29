import { notFound } from "next/navigation";

export default function CategoryPage({ params }: { params: { category: string } }) {
  // You can fetch and filter posts by params.category here
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4 capitalize">
        Category: {params.category}
      </h1>
      <p className="text-gray-600">Show posts for this category here.</p>
    </div>
  );
}