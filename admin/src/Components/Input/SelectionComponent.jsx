import React, { useState } from 'react'

const SelectionComponent = ({ options, onSelect, label }) => {
  const [selectedOption, setSelectedOption] = useState(1);

  return (
    <div className='py-1 w-full'>
      <h1 for={label} className="mb-2 text-start text-sm font-medium text-gray-900 dark:text-white">{label}</h1>
      <select value={selectedOption} onChange={(e) => { onSelect(e.target.value); setSelectedOption(e.target.value); }} className="bg-gray-50 border w-full min-w-[205px] border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:outline-none focus:border-blue-500 block p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        {options.map(({ id, name }) => {
          return <option key={id} value={name} className=''>{name}</option>
        })}
      </select>
    </div>
  )
}

export default SelectionComponent
