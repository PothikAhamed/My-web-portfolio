import { useEffect, useState } from "react";

const Counting = () => {
  const [edu, setEdu] = useState(0);
  const [exp, setExp] = useState(0);
  const [proj, setProj] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setEdu((prev) => {
        if (prev < 7) return prev + 1
        return prev
      })

      setExp((prev) => {
        if (prev < 4) return prev + 1
        return prev
      })

      setProj((prev) =>{
        if(prev < 25) return prev + 1
        return prev
      })
    }, 70)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex text-center justify-between mt-15">
      <div>
        <span className="text-4xl font-semibold text-orange-600">
          {edu}+
        </span>
        <p className="text-white text-[18px]">Education</p>
      </div>

      <div>
        <span className="text-4xl font-semibold text-orange-600">
          {exp}+
        </span>
        <p className="text-white text-[18px]">Years Experience</p>
      </div>

      <div>
        <span className="text-4xl font-semibold text-orange-600">
          {proj}+
        </span>
        <p className="text-white text-[18px]">Completed Project</p>
      </div>
    </div>
  );
};

export default Counting;