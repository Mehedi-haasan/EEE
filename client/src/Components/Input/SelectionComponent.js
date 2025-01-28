import React, { useState } from 'react'

const SelectionComponent = ({ options, onSelect,label }) => {
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <div className='py-1 w-full'>
      <label for={label} className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
      <select value={selectedOption} onChange={(e) => {onSelect(e.target.value);setSelectedOption(e.target.value);}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        {options.map(({ id, name, charge }) => {
          return <option value={id} className=''>{name}</option>
        })}
      </select>
    </div>
  )
}

export default SelectionComponent
