import { Fragment } from "react";
import { siteConfig } from "@/lib/site-config";

export default function CapabilitiesMarquee() {
  const track = [...siteConfig.capabilities, ...siteConfig.capabilities, ...siteConfig.capabilities];

  return (
    <div className="capabilities-marquee" aria-hidden="true">
      <div className="capabilities-track">
        {track.map((item, i) => (
          <Fragment key={i}>
            <span className="capability-item">{item}</span>
            <span className="capability-dot">•</span>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
