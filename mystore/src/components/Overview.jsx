

const Overview = () => {
    return (
        <section className="p-6 bg-white shadow-lg rounded-lg mb-6">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p>
                The MyStore API provides access to product data, allowing users to retrieve, update, and delete products.
                The API supports sorting and filtering, making it easy to manage and access product information efficiently.
            </p>
            <h2 className="text-2xl font-semibold my-4">Base Url</h2>
            <p>All API requests should be made to the following base URL:</p>
            <pre className="bg-gray-100 p-2 rounded-md">https://mystore-self.vercel.app/api</pre>
        </section>
    );
};

export default Overview;