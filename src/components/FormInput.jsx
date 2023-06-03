export const FormInput = (props) => {
    const {placeholder, name, type, value, onChange, isValid} = props

    if(!isValid){
        return (
            <input class="w-80 h-14 py-4 pl-4 placeholder:font-noto placeholder:font-normal placeholder:text-gray-mid border-red border"
            placeholder={placeholder} name={name} type={type} value={value} onChange={onChange}>
            </input>
        )
    }
    return (
        <input class="w-80 h-14 py-4 pl-4 mb-2 placeholder:font-noto placeholder:font-normal placeholder:text-gray-mid border-gray-input border"
            placeholder={placeholder} name={name} type={type} value={value} onChange={onChange}>
            </input>
    )
}