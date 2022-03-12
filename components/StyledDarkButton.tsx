import { AiOutlineLoading3Quarters } from "react-icons/ai"

interface StyledButtonProps {
    onClick?,
    label?: string
    disabled?: boolean
    loading?: boolean
}
const StyledDarkButton = ({ onClick, label, disabled, loading }: StyledButtonProps) => {
    return <button disabled={disabled} onClick={onClick} className="border-blue-900 text-blue-900 text-sm border px-4 py-1 bg-white rounded-md hover:bg-blue-800 hover:text-white transition-colors ease-linear duration-100 active:bg-blue-900">
        {loading ? <AiOutlineLoading3Quarters className='animate-spin' /> : label}
    </button>
}

export default StyledDarkButton