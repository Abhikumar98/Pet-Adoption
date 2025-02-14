import React, { useState } from 'react'

const useDropdown = (label, defaultState, options) => {
    const [state, setState] = useState(defaultState);
    const id = `use-dropdown-${label.replace(' ','').toLowerCase()}`;
    console.log("label        =====> ",label);
    console.log("defaultState =====> ", defaultState);
    console.log("options      =====> ", options);
    
    const Dropdown = () => (
        <label htmlFor={id}>
            {label}
            <select
                id={id}
                value={state}
                onChange={e => setState(e.target.value)}
                onBlur={e => setState(e.target.value)}
                disabled={options.length === 0}
            >
                <option value='All'>All</option>
                {
                    options.map( item => (
                        <option value={item} key={item}>{item}</option>
                    ))
                }
            </select>
        </label>
    )

    return [state, Dropdown, setState];
}

export default useDropdown;