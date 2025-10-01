import type { ReactNode } from "react";
import "./index.css";

type CardContent = {
  title?: string;
  subtitle?: string;
  text?: string;
  icon?: ReactNode;
};

type Props = {
  contents: CardContent[];
};

function AboutMeCard({ contents }: Props) {
  return (
    <div className="card card-container">
      <div className="card-body">
        {contents.map((item, index) => (
          <div key={index} className="mb-1">
            <h5 className="card-title mb-3 d-flex align-items-center gap-2">
              {item.icon && (
                <span className="d-flexflex-column-reverse align-items-center ">
                  {item.icon}
                </span>
              )}
              {item.title}
            </h5>
            {item.subtitle && (
              <h6 className="card-subtitle mb-2 text-body-primary">
                {item.subtitle}
              </h6>
            )}
            {item.text && <p className="card-text">{item.text}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutMeCard;
