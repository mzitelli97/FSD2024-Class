import Link from "next/link";

export default function DashboardLayout ({children}) {
    return (
        <div className="flex h-screen bg-gray-100">
            <div className="w-64 bg-gray-800 text-white p-4">
                <h2 className="text-2xl font-bold mb-4">Menu</h2>
                <div className="space-y-2">
                    <Link 
                        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                        href="customer">
                            Customer
                    </Link>
                    <Link
                        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                        href="invoices">
                            Invoices
                    </Link>
                    <Link
                        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                        href="https://localhost:3000/login/">
                            Logout
                    </Link>
                </div>
            </div>
            <div className="flex-1 p-4">
                {children}
            </div>
        </div>
    )
}