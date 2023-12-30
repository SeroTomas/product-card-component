interface Props {
    icon: string
    text: string
}

const Button = ({ icon, text }: Props) => {
    return (
        <button className="bg-p-darkCyan text-white text-sm font-medium flex items-center justify-center py-3 gap-2 rounded-xl">
            <img src={icon} />
            <span>{text}</span>
        </button>
    )
}
export default Button