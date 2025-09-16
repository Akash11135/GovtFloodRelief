import React, { useState, useEffect } from "react";

interface DonationFormProps {
  district: string;
  selectedNGO: string;
  onClose?: () => void;
}

const DonationForm: React.FC<DonationFormProps> = ({
  district,
  selectedNGO,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    ngo: selectedNGO || "",
    amount: "",
  });

  // Update NGO if selection changes
  useEffect(() => {
    setFormData((prev) => ({ ...prev, ngo: selectedNGO }));
  }, [selectedNGO]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `✅ Donation Successful!\n\nName: ${formData.name}\nEmail: ${formData.email}\nAddress: ${formData.address}\nNGO: ${formData.ngo}\nAmount: ₹${formData.amount}\n\n📌 District: ${district}`
    );

    setFormData({
      name: "",
      email: "",
      address: "",
      ngo: selectedNGO || "",
      amount: "",
    });
    if (onClose) onClose();
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow-lg border">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Donate to: {selectedNGO || "Select an NGO"}
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="mt-1 w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
        </div>

        {/* NGO (read-only) */}
        <div>
          <label className="block text-sm font-medium text-gray-700">NGO</label>
          <input
            type="text"
            name="ngo"
            value={formData.ngo}
            readOnly
            placeholder="Select an NGO from the left"
            className="mt-1 w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none bg-gray-100"
          />
        </div>

        {/* Donation Amount */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Donation Amount (₹)
          </label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
            min={1}
            className="mt-1 w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-2">
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
            >
              Cancel
            </button>
          )}
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Donate
          </button>
        </div>
      </form>
    </div>
  );
};

export default DonationForm;
