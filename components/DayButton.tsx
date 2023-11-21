interface DayButtonProps {
    isActive: boolean
    day: number
}

export function DayButton({isActive, day}: DayButtonProps) {
    return (
        <a className="flex flex-col gap-2 cursor-pointer" href={`/dashboard?day=17&month=10`}>
            {isActive ? <div className="w-9 h-9 rounded-full bg-red-800"></div> : <div className="w-9 h-9 rounded-full bg-gray-200"></div>}
            <span>
                {21 + day}/11
            </span>
        </a>
    )
}