"use client";

import { getTheme } from "../../utils/theme";
import { FaInfinity, FaImage, FaPalette, FaPrint, FaVectorSquare, FaBriefcase } from "react-icons/fa";

type AboutProps = {
  dark: boolean;
};

export default function About({ dark }: AboutProps) {
  const theme = getTheme(dark);

  const features = [
    {
      icon: <FaInfinity />,
      title: "Unlimited scans",
      text: "NeoRCode has no scan limits. Every generated QR stays active forever and never expires, making it ideal for long-term campaigns and printed materials."
    },
    {
      icon: <FaImage />,
      title: "QR Codes with Logo",
      text: "Add your brand logo in seconds. NeoRCode keeps codes readable with error correction up to 30%, so your design still scans reliably."
    },
    {
      icon: <FaPalette />,
      title: "Custom Design and Colors",
      text: "Shape, corners, colors, and gradients are fully customizable, so every QR can match your identity instead of looking generic."
    },
    {
      icon: <FaPrint />,
      title: "High resolution QR Codes",
      text: "Export high-resolution files for posters, packaging, and banners. PNG output is print-ready and stays crisp at large sizes."
    },
    {
      icon: <FaVectorSquare />,
      title: "QR Code Vector Formats",
      text: "Download vector formats including SVG, EPS, and PDF for clean scaling and easy editing in professional design tools."
    },
    {
      icon: <FaBriefcase />,
      title: "Free for commercial usage",
      text: "Every generated code is free to use, including business and commercial projects."
    }
  ];

  return (
    <section
      id="about"
      style={{
        color: theme.panelText,
        display: "flex",
        justifyContent: "center",
        padding: "6rem 1rem",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        <style>
          {`
            .about-heading {
              margin: 0;
              font-size: clamp(2rem, 5vw, 3.2rem);
              line-height: 1;
              letter-spacing: -0.03em;
              font-weight: 900;
            }

            .about-subheading {
              margin: 0.8rem 0 0;
              font-size: clamp(1rem, 2.5vw, 1.15rem);
              max-width: 60ch;
              opacity: 0.85;
            }

            .bento-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 1rem;
              margin-top: 2rem;
            }

            .bento-card {
              border: 2px solid ${theme.panelText};
              border-radius: 0;
              padding: 1.5rem;
              background: ${theme.panelBackground};
              box-shadow: 4px 4px 0px 0px ${theme.panelText};
              transition: transform 0.25s ease, box-shadow 0.25s ease;
            }

            .bento-card:hover {
              transform: translate(-2px, -2px);
              box-shadow: 6px 6px 0px 0px ${theme.panelText};
            }

            .feature-head {
              display: flex;
              align-items: center;
              gap: 0.85rem;
              margin-bottom: 1rem;
            }

            .feature-icon {
              color: ${theme.primary};
              font-size: 1.8rem;
              display: flex;
              align-items: center;
            }

            .feature-title {
              margin: 0;
              font-size: 1.3rem;
              line-height: 1.2;
            }

            .feature-text {
              margin: 0;
              line-height: 1.7;
              opacity: 0.9;
            }

            @media (min-width: 900px) {
              .bento-grid {
                grid-template-columns: repeat(2, minmax(0, 1fr));
                gap: 1.25rem;
              }

              .bento-card {
                padding: 1.8rem;
              }
            }
          `}
        </style>

        <div className="bento-grid">
          {features.map((feature, index) => (
            <article
              key={index}
              className="bento-card"
            >
              <div className="feature-head">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title" style={{ fontWeight: 700 }}>
                  {feature.title}
                </h3>
              </div>
              <p className="feature-text">{feature.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
