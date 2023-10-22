import React, { useState } from 'react';

function MushroomForm() {
  const [formData, setFormData] = useState({
    capShape: '',
    capSurface: '',
    capColor: '',
    bruises: '',
    odor: '',
    gillAttachment: '',
    gillSpacing: '',
    gillSize: '',
    gillColor: '',
    stalkShape: '',
    stalkRoot: '',
    stalkSurfaceAboveRing: '',
    stalkSurfaceBelowRing: '',
    stalkColorAboveRing: '',
    stalkColorBelowRing: '',
    veilType: '',
    veilColor: '',
    ringNumber: '',
    ringType: '',
    sporePrintColor: '',
    population: '',
    habitat: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 border rounded-lg shadow">
      <h2 className="text-2xl text-center mb-4">Mushroom Characteristics</h2>
      <form onSubmit={handleSubmit}>
        {/* Cap Shape */}
        <div className="mb-4">
          <label className="block font-semibold">Cap Shape:</label>
          <input
            type="text"
            name="capShape"
            value={formData.capShape}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Cap Surface */}
        <div className="mb-4">
          <label className="block font-semibold">Cap Surface:</label>
          <input
            type="text"
            name="capSurface"
            value={formData.capSurface}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Cap Color */}
        <div className="mb-4">
          <label className="block font-semibold">Cap Color:</label>
          <input
            type="text"
            name="capColor"
            value={formData.capColor}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Bruises */}
        <div className="mb-4">
          <label className="block font-semibold">Bruises:</label>
          <input
            type="text"
            name="bruises"
            value={formData.bruises}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Odor */}
        <div className="mb-4">
          <label className="block font-semibold">Odor:</label>
          <input
            type="text"
            name="odor"
            value={formData.odor}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Gill Attachment */}
        <div className="mb-4">
          <label className="block font-semibold">Gill Attachment:</label>
          <input
            type="text"
            name="gillAttachment"
            value={formData.gillAttachment}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Gill Spacing */}
        <div className="mb-4">
          <label className="block font-semibold">Gill Spacing:</label>
          <input
            type="text"
            name="gillSpacing"
            value={formData.gillSpacing}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Gill Size */}
        <div className="mb-4">
          <label className="block font-semibold">Gill Size:</label>
          <input
            type="text"
            name="gillSize"
            value={formData.gillSize}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Gill Color */}
        <div className="mb-4">
          <label className="block font-semibold">Gill Color:</label>
          <input
            type="text"
            name="gillColor"
            value={formData.gillColor}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Stalk Shape */}
        <div className="mb-4">
          <label className="block font-semibold">Stalk Shape:</label>
          <input
            type="text"
            name="stalkShape"
            value={formData.stalkShape}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Stalk Root */}
        <div className="mb-4">
          <label className="block font-semibold">Stalk Root:</label>
          <input
            type="text"
            name="stalkRoot"
            value={formData.stalkRoot}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Stalk Surface Above Ring */}
        <div className="mb-4">
          <label className="block font-semibold">Stalk Surface Above Ring:</label>
          <input
            type="text"
            name="stalkSurfaceAboveRing"
            value={formData.stalkSurfaceAboveRing}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Stalk Surface Below Ring */}
        <div className="mb-4">
          <label className="block font-semibold">Stalk Surface Below Ring:</label>
          <input
            type="text"
            name="stalkSurfaceBelowRing"
            value={formData.stalkSurfaceBelowRing}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Stalk Color Above Ring */}
        <div className="mb-4">
          <label className="block font-semibold">Stalk Color Above Ring:</label>
          <input
            type="text"
            name="stalkColorAboveRing"
            value={formData.stalkColorAboveRing}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Stalk Color Below Ring */}
        <div className="mb-4">
          <label className="block font-semibold">Stalk Color Below Ring:</label>
          <input
            type="text"
            name="stalkColorBelowRing"
            value={formData.stalkColorBelowRing}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Veil Type */}
        <div className="mb-4">
          <label className="block font-semibold">Veil Type:</label>
          <input
            type="text"
            name="veilType"
            value={formData.veilType}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Veil Color */}
        <div className="mb-4">
          <label className="block font-semibold">Veil Color:</label>
          <input
            type="text"
            name="veilColor"
            value={formData.veilColor}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Ring Number */}
        <div className="mb-4">
          <label className="block font-semibold">Ring Number:</label>
          <input
            type="text"
            name="ringNumber"
            value={formData.ringNumber}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Ring Type */}
        <div className="mb-4">
          <label className="block font-semibold">Ring Type:</label>
          <input
            type="text"
            name="ringType"
            value={formData.ringType}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Spore Print Color */}
        <div className="mb-4">
          <label className="block font-semibold">Spore Print Color:</label>
          <input
            type="text"
            name="sporePrintColor"
            value={formData.sporePrintColor}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Population */}
        <div className="mb-4">
          <label className="block font-semibold">Population:</label>
          <input
            type="text"
            name="population"
            value={formData.population}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Habitat */}
        <div className="mb-4">
          <label className="block font-semibold">Habitat:</label>
          <input
            type="text"
            name="habitat"
            value={formData.habitat}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default MushroomForm;