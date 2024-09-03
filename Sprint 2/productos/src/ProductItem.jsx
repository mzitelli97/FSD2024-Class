import { useLoaderData } from "react-router-dom";
import { getContact } from "./contacts";

export async function loader({params}) {
    const contact = await getContact(params.contactId);
    return { contact };
}

export function ProductItem() {
    const {contact} = useLoaderData();
    return (
        <table className='w-full border-collapse border border-gray-400 mt-4'>
            <thead>
                <tr className='bg-gray-200'>
                    <th className='px-4 py-2'>Nombre</th>
                    <th className='px-4 py-2'>Descripcion</th>
                    <th className='px-4 py-2'>Stock</th>
                    <th className='px-4 py-2'>Precio</th>
                    <th className='px-4 py-2'>Calificaciones</th>
                    <th className='px-4 py-2'>Foto</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='px-4 py-2'>{contact?.name}</td>
                    <td className='px-4 py-2'>{contact?.description}</td>
                    <td className='px-4 py-2'>{contact?.stock}</td>
                    <td className='px-4 py-2'>{contact?.price}</td>
                    <td className='px-4 py-2'>{contact?.rating}</td>
                </tr>
            </tbody>
        </table>
    )
}