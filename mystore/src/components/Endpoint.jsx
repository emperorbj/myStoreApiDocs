const Endpoint = ({ title, description, exampleRequest, exampleResponse, query,parameters }) => {
    return (
        <section className="p-6 bg-white shadow-lg rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-4">{title}</h3>
            <p className="mb-4">{description}</p>
            <h1 className="font-bold">{query}</h1>
            <p>{parameters}</p>
            <div>
                <h4 className="text-lg font-medium">Example Request:</h4>
                <pre className="bg-gray-100 p-4 rounded-md mb-4">{exampleRequest}</pre>
                <h4 className="text-lg font-medium">Example Response:</h4>
                <pre className="bg-gray-100 p-2 rounded-md">{exampleResponse}</pre>
            </div>
        </section>
    );
};

export default Endpoint;