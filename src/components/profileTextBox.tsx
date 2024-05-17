interface ProfileTextBoxProps {
    title: string;
    label: string;
    last_name?: string;
}

export function ProfileTextBox({ title, label, last_name}: ProfileTextBoxProps) {
    return (
        <div className=" w-full">
            <p className=" font-normal text-sm">Your <span className=" font-bold text-sm">{title}</span></p>
            <div className="  bg-white2 h-11 p-4 rounded-lg mt-2">
                <p className=" font-normal text-sm">{label} {last_name}</p>
            </div>
        </div>
    )
}