import { useState } from "react";
import HeadPages from "../components/HeadPages";
import { FaDev } from "react-icons/fa6";
import dataFilter from "../data/filterProject.json";
import dataProject from "../data/listProject.json";

const ProjectPage = () => {
  const [filteredId, setFilteredId] = useState(0);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleCurentId(currentId) {
    setFilteredId(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  const filteredItems =
    filteredId === 0
      ? dataProject
      : dataProject.filter((item) => item.filterId === filteredId);
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
          <div className="cards">
            {filteredItems.map((item, index) => (
              <div
                className="cards_item"
                key={`item + ${index}`}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleHover(null)}
              >
                <div className="cards_item_img-wrapper">
                  <img src={item.cover} alt={`image du ${item.title}`} />
                  <p>{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectPage;
