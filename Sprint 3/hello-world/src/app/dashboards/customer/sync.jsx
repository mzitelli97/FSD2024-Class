'use client';

import { revalidateTag } from "next/cache";

export function SyncButton() {
    return (
        <button onClick={() => revalidateTag("listUsers")}>Sync</button>
    )
}