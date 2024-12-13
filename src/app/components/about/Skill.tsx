import Badge from "./Bagde";

import { skills } from "@/app/data/skills";

const Skill = () => {
    return (

        <div 
        key={0}
        className="w-1/2 m-auto text-center">
            {
                skills.map((distro, index) => (
                    <Badge key={index} skill={distro.name} index={index} icon={distro.icon} ></Badge>  
                ))
            }
        </div>
    )
}


export default Skill;