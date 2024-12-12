import { useEffect, useState, useRef } from "react";

export default function Input({ label, type = 'text', ...props }) {

    const [show, setShow] = useState(false)
    const [inputType, setType] = useState(type)


    useEffect(() => {
        if (show) {
            setType('text')
        }
        else if (type == 'password') {
            setType('password')
        }

    }, [show])



    return (
        <label className="block relative flex bg-zinc-50 border rounded-sm focus-within:border-gray-400 " >
            <input required={true} type={inputType} className=" px-2 outline-none  w-full h-[38px] text-xs valid:pt-[10px] peer" {...props} />
            <small className="absolute top-1/2 left-[9px] text-xs cursor-text text-gray-400 -translate-y-1/2 peer-valid:top-2 peer-valid:">{label}</small>
            {type == 'password' && props?.value && (
                <div type="button" onClick={() => setShow(show => !show)} className=" select-none cursor-pointer h-full  flex items-center text-sm font-semibold pr-2">
                    {show ? 'Hide' : 'Show'}
                </div>
            )}
        </label>
    )
}