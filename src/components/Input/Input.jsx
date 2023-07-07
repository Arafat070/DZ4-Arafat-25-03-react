import {useRef} from "react";

const Input = () => {
    const ref = useRef(null)
    const focusInput = () => {
        ref.current.focus()
    }
    const buttonProps = {onClick:focusInput}

    return (
        <div className='wrapper'>
            <input ref={ref} type="text"/>
            <button {...buttonProps}>Focus</button>
        </div>
    )
}
export default Input