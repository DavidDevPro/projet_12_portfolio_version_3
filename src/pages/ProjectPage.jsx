import { useState } from "react";
import HeadPages from "../components/HeadPages";
import { FaDev } from "react-icons/fa6";
import dataFilter from "../data/filterProject.json";

const ProjectPage = () => {
  const [filteredId, setFilteredId] = useState(0);
  console.log(filteredId);

  function handleCurentId(currentId) {
    setFilteredId(currentId);
  }

  return (
    <main>
      <HeadPages headText="Mes projets" icon={<FaDev size={45} />} />
      <section>
        <div className="filter">
          <ul className="filter_items">
            {dataFilter.map((item, index) => (
              <li
                className={item.filterId === filteredId ? "active" : ""}
                onClick={() => handleCurentId(item.filterId)}
                key={`item + ${index}`}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default ProjectPage;
