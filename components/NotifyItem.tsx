type NotifyItemProps = {
    notify: {
        title: string
        description: string
        pedidoId?: string
    }
}

export function NotifyItem({notify}: NotifyItemProps) {
    return (
        <a href={`/dashboard/pedido/${notify.pedidoId}` || "/dashboard/notificacoes"}>
            <div className="flex flex-row justify-between w-full bg-gray-100 hover:bg-gray-200 p-2 rounded transition-all cursor-pointer">
                <div className="flex flex-row gap-2">
                    <div className="flex flex-col gap-2">
                        <h1 className="font-bold">{notify.title}</h1>
                        <p className="text-xs">{notify.description}</p>
                    </div>
                </div>
            </div>
        </a>
    )
}