import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Badge = ({ skill, index,icon }: { skill: string, index: number, icon: any }) => {
    return (

        <span
            key={index}
            className="inline-flex items-center justify-center w-full px-1 py-1 text-sm font-medium 
            text-center text-gray-900 border border-gray-100 rounded-lg sm:w-auto bg-gray-100
            hover:bg-gray-300 m-2">
					<Link href="/"><FontAwesomeIcon icon={icon} className="ml-2"/></Link>
                    {skill} 
        </span>

    )
}


export default Badge;