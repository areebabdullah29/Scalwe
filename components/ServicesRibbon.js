import { Fragment } from "react";
import { siteConfig } from "@/lib/site-config";

export default function ServicesRibbon() {
  const items = siteConfig.services.map((s) => s.name);
  const track = [...items, ...items, ...items];

  return (
    <div className="services-ribbon" aria-hidden="true">
      <div className="services-ribbon-inner">
        <div className="services-ribbon-track">
          {track.map((name, i) => (
            <Fragment key={i}>
              <span className="ribbon-item">{name}</span>
              <span className="ribbon-star">&#10022;</span>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
