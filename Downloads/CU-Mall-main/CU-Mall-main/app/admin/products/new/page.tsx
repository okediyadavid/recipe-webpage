"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Loader2 } from "lucide-react"
import { useAuth } from "@/context/AuthContext"
import { adminProductsApi, categoriesApi, type Category } from "@/lib/api"
import { useToast } from "@/components/ui/use-toast"

export default function AddProductPage() {
  const { isAdmin, isAuthenticated } = useAuth()
  const router = useRouter()
  const { toast } = useToast()
  const [categories, setCategories] = useState<Category[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    quantity: "",
    productImage: "",
    room_number: "",
    hall: "",
    productId: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  useEffect(() => {
    if (!isAuthenticated || !isAdmin) {
      router.push("/login")
      return
    }

    const fetchCategories = async () => {
      try {
        const data = await categoriesApi.getAll()
        setCategories(data)
      } catch (error) {
        console.error("Failed to fetch categories:", error)
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to load categories",
        })
      }
    }

    fetchCategories()
  }, [isAuthenticated, isAdmin, router, toast])

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.title.trim()) newErrors.title = "Product title is required"
    if (!formData.description.trim()) newErrors.description = "Product description is required"
    if (!formData.category) newErrors.category = "Category is required"
    if (!formData.price || Number.parseFloat(formData.price) <= 0) newErrors.price = "Valid price is required"
    if (!formData.quantity || Number.parseInt(formData.quantity) < 0) newErrors.quantity = "Valid quantity is required"
    if (!selectedFile) newErrors.productImage = "Product image is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)

    try {
      // Create FormData for file upload
      const formDataToSend = new FormData()
      formDataToSend.append("title", formData.title)
      formDataToSend.append("description", formData.description)
      formDataToSend.append("category", formData.category)
      formDataToSend.append("price", formData.price)
      formDataToSend.append("quantity", formData.quantity)

      // Add the image file if selected
      if (selectedFile) {
        formDataToSend.append("productImage", selectedFile)
      }

      // Make the API request with FormData
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://cumall-backend.onrender.com/api'}/product/add`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: formDataToSend
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Failed to create product')
      }

      const data = await response.json()

      if (!data.success) {
        throw new Error(data.message || 'Failed to create product')
      }

      toast({
        title: "Success",
        description: "Product created successfully",
      })

      // Reset form after successful upload
      setFormData({
        title: "",
        description: "",
        category: "",
        price: "",
        quantity: "",
        productImage: "",
        room_number: "",
        hall: "",
        productId: "",
      })
      setSelectedFile(null)
      setErrors({})

      // Don't redirect, stay on the same page
      // router.push("/admin/products") - Removed this line

    } catch (error) {
      console.error("Failed to create product:", error)
      toast({
        variant: "destructive",
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to create product. Please try again.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  // Add form reset function
  const handleReset = () => {
    setFormData({
      title: "",
      description: "",
      category: "",
      price: "",
      quantity: "",
      productImage: "",
      room_number: "",
      hall: "",
      productId: "",
    })
    setSelectedFile(null)
    setErrors({})
  }

  // Add loading state to form elements
  const inputProps = {
    disabled: isLoading,
    className: "w-full"
  }

  if (!isAuthenticated || !isAdmin) {
    return null
  }

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-4 pt-16">
        <div className="container mx-auto">
          <Link
            href="/admin/products"
            className="inline-flex items-center text-primary-foreground hover:underline mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
          <h1 className="text-2xl font-bold">Add New Product</h1>
          <p>Create a new product listing for your store</p>
        </div>
      </div>

      <div className="container mx-auto p-6">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Product Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Product Title</Label>
                <Input
                  id="title"
                  placeholder="Enter product title"
                  value={formData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  {...inputProps}
                />
                {errors.title && <p className="text-sm text-destructive">{errors.title}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Enter product description"
                  rows={4}
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  {...inputProps}
                />
                {errors.description && <p className="text-sm text-destructive">{errors.description}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => handleInputChange("category", value)}
                  disabled={isLoading}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Stationeries">Stationeries</SelectItem>
                    <SelectItem value="Personal Care">Personal Care</SelectItem>
                    <SelectItem value="Dorm Essentials">Dorm Essentials</SelectItem>
                    <SelectItem value="Sports & Fitness">Sports & Fitness</SelectItem>
                    <SelectItem value="Electronics">Electronics</SelectItem>
                  </SelectContent>
                </Select>
                {errors.category && <p className="text-sm text-destructive">{errors.category}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="price">Price (₦)</Label>
                  <Input
                    id="price"
                    type="number"
                    placeholder="0.00"
                    value={formData.price}
                    onChange={(e) => handleInputChange("price", e.target.value)}
                    {...inputProps}
                  />
                  {errors.price && <p className="text-sm text-destructive">{errors.price}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input
                    id="quantity"
                    type="number"
                    placeholder="0"
                    value={formData.quantity}
                    onChange={(e) => handleInputChange("quantity", e.target.value)}
                    {...inputProps}
                  />
                  {errors.quantity && <p className="text-sm text-destructive">{errors.quantity}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="productImage">Product Image</Label>
                <Input
                  id="productImage"
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0]
                    if (file) {
                      setSelectedFile(file)
                      handleInputChange("productImage", file.name)
                    }
                  }}
                  {...inputProps}
                />
                {errors.productImage && <p className="text-sm text-destructive">{errors.productImage}</p>}
              </div>

              <div className="flex justify-end space-x-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleReset}
                  disabled={isLoading}
                >
                  Reset
                </Button>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creating...
                    </>
                  ) : (
                    "Create Product"
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
