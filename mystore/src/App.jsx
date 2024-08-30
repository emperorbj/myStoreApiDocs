
import './App.css'
import Overview from './components/Overview';
import Endpoint from './components/Endpoint';

function App() {

  return (
    <div className="max-w-4xl mx-auto p-6">
    <h1 className="text-3xl font-bold text-center mb-12">MyStore API Documentation</h1>
    <Overview />
    <Endpoint
      title="Get All Products"
      query="Query Parameters"
      parameters="(1).name(optional): Filter products by name, (2).company(optional): Filter products by company. (3).price(optional): Filter products by price range. 
      (4).sort(optional): Sort products by a specific field (e.g., name, price). The default is ascending order; prepend with a minus (-) for descending order.
"
      description="This endpoint retrieves all products available in the store. Users can sort and filter products based on various criteria such as name, company, and price."
      exampleRequest={`GET https://mystore-self.vercel.app/api/products?name=phone&company=Apple&sort=-price`}
      exampleResponse={`[
{
  "id": "66c213bb055ff2f41128a82b",
  "name": "iPhone 13",
  "company": "Apple",
  "price": 999,
  "description": "Latest model of the iPhone series."
},
{
  "id": "77d123aa045ff2d42228b83d",
  "name": "Galaxy S21",
  "company": "Samsung",
  "price": 799,
  "description": "Flagship Samsung smartphone."
}
]`}
    />
   <Endpoint
        title="Get, Update, or Delete a Product by ID"
        description="This endpoint allows users to retrieve, update, or delete a specific product using its unique ID."
        exampleRequest={`GET https://mystore-self.vercel.app/api/products/66c213bb055ff2f41128a82b`}
        exampleResponse={`{
  "id": "66c213bb055ff2f41128a82b",
  "name": "iPhone 13",
  "company": "Apple",
  "price": 999,
  "description": "Latest model of the iPhone series."
}`}
      />

      <section className="p-6 bg-white shadow-lg rounded-lg mb-6">
        <h3 className="text-xl font-semibold mb-4">Path Parameter</h3>
        <ul className="list-disc pl-6">
          <li><strong>id</strong> (required): The unique identifier of the product.</li>
        </ul>
      </section>

      <section className="p-6 bg-white shadow-lg rounded-lg mb-6">
        <h3 className="text-xl font-semibold mb-4">Example Request: Get Product by ID</h3>
        <pre className="bg-gray-100 p-4 rounded-md mb-4">{`GET https://mystore-self.vercel.app/api/products/66c213bb055ff2f41128a82b`}</pre>
        <h3 className="text-xl font-semibold mb-4">Example Response: Get Product by ID</h3>
        <pre className="bg-gray-100 p-4 rounded-md mb-4">{`{
  "id": "66c213bb055ff2f41128a82b",
  "name": "iPhone 13",
  "company": "Apple",
  "price": 999,
  "description": "Latest model of the iPhone series."
}`}</pre>
      </section>

      <section className="p-6 bg-white shadow-lg rounded-lg mb-6">
        <h3 className="text-xl font-semibold mb-4">Example Request: Update Product by ID</h3>
        <pre className="bg-gray-100 p-4 rounded-md mb-4">{`PATCH https://mystore-self.vercel.app/api/products/66c213bb055ff2f41128a82b`}</pre>
        <h3 className="text-xl font-semibold mb-4">Example Response: Update Product by ID</h3>
        <pre className="bg-gray-100 p-4 rounded-md">{`{
  "id": "66c213bb055ff2f41128a82b",
  "name": "iPhone 13 Pro",
  "company": "Apple",
  "price": 1099,
  "description": "Latest model of the iPhone series with Pro features."
}`}</pre>
      </section>
      <section className="p-6 bg-white shadow-lg rounded-lg mb-6">
        <h3 className="text-xl font-semibold mb-4">Example Request: Delete Product by ID</h3>
        <pre className="bg-gray-100 p-4 rounded-md mb-4">{`DELETE https://mystore-self.vercel.app/api/products/66c213bb055ff2f41128a82b`}</pre>
        <h3 className="text-xl font-semibold mb-4">Example Response: Delete Product by ID</h3>
        <pre className="bg-gray-100 p-4 rounded-md mb-4">{`{
  "message": "Product deleted successfully."
}`}</pre>
      </section>

      <section className="p-6 bg-white shadow-lg rounded-lg mb-6">
        <h3 className="text-xl font-semibold mb-4">Error Responses</h3>
        <ul className="list-disc pl-6">
          <li>400 Bad Request: Invalid query parameters or data for update requests.</li>
          <li>404 Not Found: The product with the specified ID does not exist.</li>
          <li>500 Internal Server Error: If an unexpected error occurs.</li>
        </ul>
      </section>
  </div>
  )
}

export default App
