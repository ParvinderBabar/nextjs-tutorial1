import Link from "next/link.js"
export default function products() {
    const productId=100
    return (
        <div>
            <h1>Hello welcome to Products intro</h1>
            <p><Link href="/products/1">product 1</Link></p>
            <p><Link href="/products/2">product 2</Link></p>
            <p><Link href="/products/3" replace>product 3</Link></p>
            <p><Link href={`products/${productId}`}>product{productId }</Link></p>
        </div>
    )
}