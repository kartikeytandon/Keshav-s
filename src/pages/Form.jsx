import React, { useState } from 'react';
import axios from 'axios';

function MushroomForm() {
  const [formData, setFormData] = useState({
    cap_color: '',
    bruises: '',
    odor: '',
    gill_size: '',
    gill_color: '',
    stalk_surface_above_ring: '',
    stalk_surface_below_ring: '',
    ring_type: '',
    spore_print_color: '',
    population: '',
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
    
    axios.post('https://mushroomclass-mycb.onrender.com/prediction', formData)
    .then((response) => {
      console.log('Response:', response.data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 border rounded-lg shadow">
      <h2 className="text-2xl text-center mb-4">Mushroom Characteristics</h2>
      <form onSubmit={handleSubmit}>
      <div className="mb-4">
          <label className="block font-semibold">Cap Color:</label>
          <select
            name="cap_color"
            value={formData.cap_color}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="n">n</option>
            <option value="y">y</option>
            <option value="w">w</option>
            <option value="g">g</option>
            <option value="e">e</option>
            <option value="p">p</option>
            <option value="b">b</option>
            <option value="u">u</option>
            <option value="c">c</option>
            <option value="r">r</option>
          </select>
        </div>


        <div className="mb-4">
          <label className="block font-semibold">Bruises:</label>
          <select
            name="bruises"
            value={formData.bruises}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="t">t</option>
            <option value="f">f</option>
          </select>
        </div>


        {/* Odor */}
        <div className="mb-4">
          <label className="block font-semibold">Odor:</label>
          <select
            name="odor"
            value={formData.odor}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="p">p</option>
            <option value="a">a</option>
            <option value="l">l</option>
            <option value="n">n</option>
            <option value="f">f</option>
            <option value="c">c</option>
            <option value="y">y</option>
            <option value="s">s</option>
            <option value="m">m</option>
          </select>
        </div>

        {/* Gill Size */}
        <div className="mb-4">
          <label className="block font-semibold">Gill Size:</label>
          <select
            name="gill_size"
            value={formData.gill_size}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="n">n</option>
            <option value="b">b</option>
          </select>
        </div>

        {/* Gill Color */}
        <div className="mb-4">
          <label className="block font-semibold">Gill Color:</label>
          <select
            name="gill_color"
            value={formData.gill_color}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="k">k</option>
            <option value="n">n</option>
            <option value="g">g</option>
            <option value="p">p</option>
            <option value="w">w</option>
            <option value="h">h</option>
            <option value="u">u</option>
            <option value="b">b</option>
            <option value="r">r</option>
            <option value="y">y</option>
          </select>
        </div>

        {/* Stalk Surface Above Ring */}
        <div className="mb-4">
          <label className="block font-semibold">Stalk Surface Above Ring:</label>
          <select
            name="stalk_surface_above_ring"
            value={formData.stalk_surface_above_ring}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="s">s</option>
            <option value="f">f</option>
            <option value="k">k</option>
            <option value="y">y</option>
          </select>
        </div>

        {/* Stalk Surface Below Ring */}
        <div className="mb-4">
          <label className="block font-semibold">Stalk Surface Below Ring:</label>
          <select
            name="stalk_surface_below_ring"
            value={formData.stalk_surface_below_ring}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="s">s</option>
            <option value="f">f</option>
            <option value="k">k</option>
            <option value="y">y</option>
          </select>
        </div>

        {/* Ring Type */}
        <div className="mb-4">
          <label className="block font-semibold">Ring Type:</label>
          <select
            name="ring_type"
            value={formData.ring_type}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="p">p</option>
            <option value="e">e</option>
            <option value="l">l</option>
            <option value="f">f</option>
            <option value="n">n</option>
          </select>
        </div>

        {/* Spore Print Color */}
        <div className="mb-4">
          <label className="block font-semibold">Spore Print Color:</label>
          <select
            name="spore_print_color"
            value={formData.spore_print_color}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="k">k</option>
            <option value="n">n</option>
            <option value="u">u</option>
            <option value="h">h</option>
            <option value="w">w</option>
            <option value="r">r</option>
            <option value="o">o</option>
            <option value="y">y</option>
            <option value="b">b</option>
          </select>
        </div>

        {/* Population */}
        <div className="mb-4">
          <label className="block font-semibold">Population:</label>
          <select
            name="population"
            value={formData.population}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="s">s</option>
            <option value="n">n</option>
            <option value="a">a</option>
            <option value="v">v</option>
            <option value="y">y</option>
            <option value="c">c</option>
          </select>
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