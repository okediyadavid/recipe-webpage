import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart } from "lucide-react"
import Link from "next/link"
import type { Product } from "@/lib/api"

interface ProductCardProps {
    product: Product
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <Card className="overflow-hidden">
            <Link href={`/products/${product.uuid}`}>
                <CardHeader className="p-0">
                    <img
                        src={product.productImage || "/placeholder.svg"}
                        alt={product.title}
                        className="h-48 w-full object-cover"
                        onError={(e) => {
                            e.currentTarget.src = "/placeholder.svg"
                        }}
                    />
                </CardHeader>
            </Link>
            <CardContent className="p-4">
                <Link href={`/products/${product.uuid}`} className="hover:underline">
                    <h3 className="font-semibold text-lg mb-1 line-clamp-1">{product.title}</h3>
                </Link>
                <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between">
                    <span className="font-bold">₦{product.price.toFixed(2)}</span>
                    <Badge variant={product.quantity > 0 ? "default" : "destructive"}>
                        {product.quantity > 0 ? "In Stock" : "Out of Stock"}
                    </Badge>
                </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
                <Button className="w-full" disabled={product.quantity === 0}>
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                </Button>
            </CardFooter>
        </Card>
    )
} 