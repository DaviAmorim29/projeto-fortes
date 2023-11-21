import Image from "next/image"
import Link from "next/link"

export type ItemProps = {
    id: string
    name: string
    description: string
    date: Date
    image: string
}

function calcularDiferencaDeTempo(dataPostagem: Date): string {
    const agora = new Date();
    const diferencaEmMilissegundos = agora.getTime() - dataPostagem.getTime();
    const diferencaEmSegundos = Math.floor(diferencaEmMilissegundos / 1000);
    const diferencaEmMinutos = Math.floor(diferencaEmSegundos / 60);
    const diferencaEmHoras = Math.floor(diferencaEmMinutos / 60);
    const diferencaEmDias = Math.floor(diferencaEmHoras / 24);
  
    if (diferencaEmDias > 0) {
      return `Postado ${diferencaEmDias} dia${diferencaEmDias > 1 ? 's' : ''} atrás`;
    } else if (diferencaEmHoras > 0) {
      return `Postado ${diferencaEmHoras} hora${diferencaEmHoras > 1 ? 's' : ''} atrás`;
    } else if (diferencaEmMinutos > 0) {
      return `Postado ${diferencaEmMinutos} minuto${diferencaEmMinutos > 1 ? 's' : ''} atrás`;
    } else {
      return 'Postado recentemente';
    }
  }
  

export function CardapioItem({item}: {item: ItemProps}) {
    const formattedDate = calcularDiferencaDeTempo(item.date)
    return (
        <Link href={`/dashboard/item/${item.id}`}>
            <div className="flex flex-row justify-between w-full hover:bg-gray-200 p-2 rounded transition-all cursor-pointer">
                <div className="flex flex-row gap-2">
                    <div className="relative w-14 h-14 lg:h-24 lg:w-24 overflow-hidden bg-gray-100 rounded">
                        <Image fill objectFit="cover" className="overflow-hidden rounded" alt="Foto da comida" src={item.image} />    
                    </div> 
                    <div className="flex flex-col gap-2">
                        <h1>{item.name}</h1>
                        <p className="text-xs">{item.description}</p>
                    </div>
                </div>
                <span className="text-xs text-gray-400">{formattedDate}</span>
            </div>
        </Link>
    )
}