interface DayButtonProps {
    isActive: boolean
}

export function DayButton({isActive}: DayButtonProps) {
    return (
        <a className="flex flex-col gap-2 cursor-pointer" href={`/dashboard?day=17&month=10`}>
            {isActive ? <div className="w-9 h-9 rounded-full bg-red-800"></div> : <div className="w-9 h-9 rounded-full bg-gray-200"></div>}
            <span>
                19/11
            </span>
        </a>
    )
}