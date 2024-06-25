import React,{useId} from 'react'
 const Input=React.forwardRef(function Input({
    type="text",
    className="",
    label,
    ...props
 },ref){

    const id=useId()
    return(
        <div className='w-full'>
        {label && <label 
        className='inline-block mb-1 pl-1' 
        htmlFor={id}>
            {label}
        </label>
        }
        <input
        type={type}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        // yhi chez reference degi aapko aapke parent container k ander isi k lie forw ref use kia compenent algh to ref yha se pass v kiya jaayega or fir yha se state ka access liya jaaygea tabhi to input m jo v fill hoga vo kr paaynege else kha lgaaoge onclick yhe sb
        ref={ref}
        {...props}
        id={id}
        />
    </div>
    )
 })
 
export default Input
