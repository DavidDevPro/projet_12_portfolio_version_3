import PropTypes from "prop-types";
import { TbArrowBigRightLinesFilled } from "react-icons/tb";

const ProjectSectionText = ({ aboutTexts }) => {
  return (
    <div className="content_project one_project_page_section_about_project">
      {aboutTexts.map((text, index) => (
        <div
          key={`text ${index}`}
          className="one_project_page_section_about_project_content"
        >
          <TbArrowBigRightLinesFilled className="one_project_page_section_about_project_content_icon" />
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
};
ProjectSectionText.propTypes = {
  aboutTexts: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectSectionText;
