import { useLoaderData } from "react-router-dom";
import { getContact } from "./contacts";

export async function loader({params}) {
    const contact = await getContact(params.contactId);
    return { contact };
}

export function ProductItem() {
    const {contact} = useLoaderData();
    return (
        <table>
            {contact && <tr>
                <td className='px-4 py-2'>{contact.name}</td>
                <td className='px-4 py-2'>{contact.description}</td>
                <td className='px-4 py-2'>{contact.stock}</td>
                <td className='px-4 py-2'>{contact.price}</td>
                <td className='px-4 py-2'>{contact.rating}</td>
            </tr>}
        </table>
    )
}