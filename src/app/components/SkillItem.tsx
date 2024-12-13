const SkillItem = ({skill}:{skill:string} ) => {
    return (
        
           <span  className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-gray-700
            dark:text-blue-400 border border-blue-400 inline-flex items-center justify-center">
                {skill}
            </span>
          
    )
}

export default SkillItem;