import React, { useState } from 'react';
import { uploadImage } from '../api/uploader';
import Button from '../components/ui/Button';
import useProducts from '../hooks/useProducts';

export default function NewProduct() {
  const [product, setProduct] = useState({
    title: '',
    price: '',
    category: '',
    description: '',
    options: '',
  });
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState(null);

  const { addProduct } = useProducts();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert('Please upload an image.');
      return;
    }

    setIsUploading(true);

    try {
      const url = await uploadImage(file);
      addProduct.mutate(
        { product, url },
        {
          onSuccess: () => {
            setSuccess('✅ Product successfully added!');
            setTimeout(() => setSuccess(null), 4000);
            setProduct({ title: '', price: '', category: '', description: '', options: '' });
            setFile(null);
          },
        }
      );
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      setFile(files[0]);
    } else {
      setProduct((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <section className="bg-brand-green m-6 rounded-3xl p-10 relative">
      <h2 className="text-2xl font-semibold mb-6">Register New Product</h2>

      {success && (
        <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-60">
          <p className="text-2xl font-bold text-green-600">{success}</p>
        </div>
      )}

      <div className="flex flex-col md:flex-row justify-between gap-6">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full md:w-1/2">
          <label className="cursor-pointer">
            <input type="file" accept="image/*" name="file" required onChange={handleChange} className="hidden" />
            <span className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg text-sm">Upload Image</span>
          </label>

          <input type="text" name="title" value={product.title} placeholder="Product Name" required onChange={handleChange} />
          <input type="number" name="price" value={product.price} placeholder="Price" required onChange={handleChange} />
          <input type="text" name="category" value={product.category} placeholder="Category" required onChange={handleChange} />
          <textarea name="description" value={product.description} placeholder="Description" required onChange={handleChange} rows="4" />
          <input type="text" name="options" value={product.options} placeholder="Options (comma-separated)" required onChange={handleChange} />

          <Button disabled={isUploading}>{isUploading ? 'Uploading...' : 'Register Product'}</Button>
        </form>

        {file && (
          <img className="w-80 h-80 rounded-md shadow-md object-cover" src={URL.createObjectURL(file)} alt="Preview" />
        )}
      </div>
    </section>
  );
}
