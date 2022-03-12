interface StyledButtonProps {
    onClick?,
    label?: string
}
const StyledButton = ({ onClick, label }: StyledButtonProps) => {
    return <button onClick={onClick} className="text-sm border border-white px-4 py-1 rounded-md hover:bg-white active:bg-gray-100 hover:text-black transition-colors ease-in duration-100">{label}</button>
}

export default StyledButton