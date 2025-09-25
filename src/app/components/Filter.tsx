"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"

const Filter = () => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()

    const handleFilter = (value: string) => {
    const params = new URLSearchParams(searchParams)
    params.set("sort", value)
    router.push(`${pathname}?${params.toString()}`, {scroll: false})
  }

    return (
        <div className="flex items-center justify-end gap-4 mb-4 text-sm text-gray-500 my-6">
            <span>Sort by:</span>
            <select name="sort" id="sort" className="cursor-pointer ring ring-gray-300 rounded px-2 py-1 hover:ring-black shadow-md" onChange={(e) => handleFilter(e.target.value)} defaultValue={searchParams.get("sort") || "newest"}>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
            </select>
        </div>
    )
}
export default Filter;