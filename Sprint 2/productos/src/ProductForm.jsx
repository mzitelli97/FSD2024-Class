import { useLoaderData, Form, redirect } from "react-router-dom";
import { updateContact } from "./contacts";

export async function action({ request, params }) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    await updateContact(params.contactId, updates);
    return redirect(`/contacts/${params.contactId}`);
}

export function ProductForm() {
    const { contact } = useLoaderData();

    return (
        <Form method="post" id="product-form" className="space-y-6 max-w-md mx-auto p-4 bg-white shadow rounded-lg">
            <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
                <input
                    className="w-full px-3 py-2 border rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="Nombre..."
                    type="text"
                    name="name"
                    defaultValue={contact?.name}
                />
            </div>

            <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Descripción</label>
                <input
                    className="w-full px-3 py-2 border rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="Descripción..."
                    type="text"
                    name="description"
                    defaultValue={contact?.description}
                />
            </div>

            <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Stock</label>
                <input
                    className="w-full px-3 py-2 border rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="Stock..."
                    type="number"
                    name="stock"
                    defaultValue={contact?.stock}
                />
            </div>

            <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Precio</label>
                <input
                    className="w-full px-3 py-2 border rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="Precio..."
                    type="number"
                    name="price"
                    defaultValue={contact?.price}
                />
            </div>

            <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Calificaciones</label>
                <input
                    className="w-full px-3 py-2 border rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="Calificaciones..."
                    type="number"
                    name="rating"
                    defaultValue={contact?.rating}
                />
            </div>

            <div className="flex space-x-4">
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Guardar
                </button>
                <button
                    type="button"
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                >
                    Cancelar
                </button>
            </div>
        </Form>
    )
}