import React from "react";
import GoContainer from "../../common/Container";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    // image: "https://via.placeholder.com/400",
    live: "#",
    github: "#",
  },
  {
    id: 2,
    title: "E-commerce UI",
    // image: "https://via.placeholder.com/400",
    live: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Dashboard Design",
    // image: "https://via.placeholder.com/400",
    live: "#",
    github: "#",
  },
  {
    id: 4,
    title: "Blog Website",
    // image: "https://via.placeholder.com/400",
    live: "#",
    github: "#",
  },
  {
    id: 5,
    title: "Landing Page",
    // image: "https://via.placeholder.com/400",
    live: "#",
    github: "#",
  },
  {
    id: 6,
    title: "Admin Panel",
    // image: "https://via.placeholder.com/400",
    live: "#",
    github: "#",
  },
  {
    id: 7,
    title: "React App",
    // image: "https://via.placeholder.com/400",
    live: "#",
    github: "#",
  },
  {
    id: 8,
    title: "UI Design",
    // image: "https://via.placeholder.com/400",
    live: "#",
    github: "#",
  },
];

const Project = () => {
  return (
    <div className="py-20">
      <GoContainer>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((item) => (
            <div
              key={item.id}
              className="bg-gray-800 rounded-2xl overflow-hidden group" >
              <div className="h-60 overflow-hidden">
                {/* <img
                  // src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 duration-300"/> */}
              </div>
              <div className="p-4 text-white">
                <h2 className="text-lg font-semibold mb-3">{item.title}</h2>
                <div className="flex gap-2">
                  <a href={item.live}
                    className="bg-orange-600 px-3 py-1 rounded-lg text-sm hover:bg-orange-500">Live</a>
                  <a href={item.github}className="border border-orange-600 px-3 py-1 rounded-lg text-sm hover:bg-orange-600">Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </GoContainer>
    </div>
  );
};

export default Project;
