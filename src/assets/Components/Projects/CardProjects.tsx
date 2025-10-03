import { type ReactNode } from "react";
import "./index.css";

type Props = {
  img?: string;
  title: string;
  description: string;
  children: ReactNode;
  linkimg: string;
};

function CardProjects({ img, title, description, children, linkimg }: Props) {
  return (
    <div className="project">
      <a href={linkimg} target="_blank">
        <img src={img} className="img-card " alt={title} />
      </a>
      <div className="card-body">
        <h5 className="card-title text-white my-2">{title}</h5>
        <p className="card-text">{description}</p>
        {children}
      </div>
    </div>
  );
}

export default CardProjects;
