
interface Props {
    children: React.ReactNode
}

const AppLayout = ({ children }: Props) => {
    return (
        <div className="bg-p-cream h-screen grid place-items-center ">
            {children}
        </div>
    )
}
export default AppLayout