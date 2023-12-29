
interface Props {
    children: React.ReactNode
}

const AppLayout = ({ children }: Props) => {
    return (
        <div className="bg-p-cream h-screen">
            {children}
        </div>
    )
}
export default AppLayout