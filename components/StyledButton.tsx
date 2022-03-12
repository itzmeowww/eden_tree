interface StyledButtonProps {
    onClick?,
    label?: string
}
const StyledButton = ({ onClick, label }: StyledButtonProps) => {
    return <button onClick={onClick} className="text-sm border border-white px-4 py-1 rounded-md hover:bg-white hover:text-black transition-colors">{label}</button>
}

export default StyledButton