import { useLoaderData, Form, redirect } from "react-router-dom";
import { getContact, updateContact } from "./contacts";

export async function action({request, params}) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    await updateContact(params.contactId, updates);
    return redirect(`/contacts/${params.contactId}`);
}

export function ProductForm() {
    // const { contact } = useLoaderData();

    return (
        <Form method="post" id="product-form">
            <span>Nombre</span>
            <input
                placeholder="Nombre..."
                type='text'
                name='name'
                // defaultValue={contact.name}
            ></input>

            <span>Descripcion</span>
            <input
                placeholder="Descripcion..."
                type='text'
                name='description'
                // defaultValue={contact.description}
                />

            <span>Stock</span>
            <input
                placeholder="Stock..."
                type='number'
                name='stock'
                // defaultValue={contact.stock}
                />

            <span>Precio</span>
            <input
                placeholder="Precio..."
                type='number'
                name='price'
                // defaultValue={contact.price}
                />

            <span>Calificaciones</span>
            <input
                placeholder="Calificaciones..."
                type='number'
                name='rating'
                // defaultValue={contact.rating}
                />
            
            <button type='submit'>Guardar</button>
            <button type='cancel'>Cancelar</button>
        </Form>
    )
}