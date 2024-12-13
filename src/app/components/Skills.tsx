import SkillItem from "./SkillItem";

const Skills = () => {
    return (
        <div className="w-1/2 m-auto mt-8 text-center">
           
           <SkillItem skill={"JavaScript"} />
           <SkillItem skill={"Java"} />
           <SkillItem skill={"PHP"} />

        </div>
    )
}

export default Skills;