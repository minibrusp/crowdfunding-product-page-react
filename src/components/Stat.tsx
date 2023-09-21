import { useCallback, useMemo } from "react"

type StatProps = {
    value: number | undefined,
    type: 'backed' | 'backers' | 'days'
}



function Stat({value, type} : StatProps) {

    const setItems = useCallback((item: 'description' | 'value') => {
        if(item === 'description') {
            switch(type) {
                case 'backed':
                    return 'of 100,000 backed'
                case 'backers':
                    return 'total backers'
                case 'days': 
                    return 'days left'
                default:
                    return ''
            }
        } else {
            switch(type) {
                case 'backed':             
                    return `$${value ? value.toLocaleString() : 0 }`
                case 'backers':
                    return `${value ? value.toLocaleString() : 0 }`
                case 'days': 
                    return `${value ? value : 0 }`
                    
            }
        }
    }, [value])

    const calculatedDescription = useMemo(() => setItems('description'), [])

    const calculatedValue = useMemo(() => setItems('value'), [value])

    

  return (
    <p 
        className="my-[15px] leading-[1.7] text-sm text-neutral-dark-gray even:border-y even:border-solid even:border-[lightgray] even:max-w-[85px] even:mx-auto even:my-0 even:py-[19px] md:m-0 md:mr-10 md:even:m-0 md:even:mr-10 md:even:py-0 md:even:pr-[90px] md:even:pl-[45px] md:even:border-y-0 md:even:max-w-none md:even:border-x md:even:border-[#d3d3d3]"
    >
        <strong 
            className="block text-neutral-black text-[2rem]"
        >
            {calculatedValue}
        </strong>
        {calculatedDescription}
    </p>
  )
}

export default Stat