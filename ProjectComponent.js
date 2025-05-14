function Project({ title, image, link, github }) {
  return (
    <div className="project-container">
      <h1 className="project-title">
        <a href={link} target="_blank">
          {title}
        </a>
      </h1>
      <div className="project-image-container">
        <a href={link} target="_blank">
          <img src={image} className="project-image" />
        </a>
      </div>
      <div className="project-link-container">
        <ul>
          <li>
            <a href={github} target="_blank" className="fa fa-github"></a>
          </li>
        </ul>
      </div>
    </div>
  );
}
