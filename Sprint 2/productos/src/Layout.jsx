import {NavLink, Outlet, Form, redirect, useLoaderData, Link} from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
import { createContact, getContact, updateContact, getContacts } from './contacts';

export async function action() {
    const contact = await createContact();
    return redirect(`/contacts/${contact.id}/edit`);
}

export async function loader() {
    const contacts = await getContacts();
    return {contacts};
}

function Layout() {
    const {contacts} = useLoaderData();
    return(
        <div className="flex h-screen bg-gray-100">
            <div className="w-64 bg-gray-800 text-white p-4">
                <h2 className="text-2xl font-bold mb-4">Menu</h2>
                <div>
                    <Form method='post'>
                        <button type='submit'>
                            Nuevo
                        </button>
                    </Form>
                </div>
                <nav className="space-y-2">
                    <NavLink
                        to="/products"
                        className={({isActive}) => `
                            block py-2 px-4 rounded hover:bg-gray-700
                            ${isActive ? 'bg-gray-700': ''}
                        `}
                        >
                            Productos
                    </NavLink>
                    <NavLink
                        to="/add"
                        className={({isActive}) => `
                            block py-2 px-4 rounded hover:bg-gray-700
                            ${isActive ? 'bg-gray-700': ''}
                        `}
                        >
                            Agregar Producto
                    </NavLink>
                    {contacts.length > 0 &&
                        <ul>
                            {contacts.map(contact => 
                                <li key={contact.id}>
                                    <Link to={`contacts/${contact.id}`}>
                                        {contact.id}
                                    </Link>
                                </li>
                            )}
                        </ul>
                    }
                </nav>
            </div>
            <div className="flex-1 p-4">
                <ThemeProvider>
                    <Outlet />
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Layout;