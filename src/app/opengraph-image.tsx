import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { consultant, siteConfig } from "@/data/content";

export const alt = `${siteConfig.name}: ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const photo = await readFile(join(process.cwd(), "public/apresentacao/foto.png"), "base64");
const photoSrc = `data:image/png;base64,${photo}`;

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#070b1a",
          color: "#ffffff",
          padding: "64px 72px",
          alignItems: "center",
          gap: 56,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", flex: 1, gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#8ecbff",
            }}
          >
            Consultoria em BI para escritórios contábeis
          </div>
          <div style={{ display: "flex", fontSize: 58, fontWeight: 700, lineHeight: 1.1 }}>
            Dados do escritório transformados em decisões
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#cbd4e6", lineHeight: 1.4 }}>
            Painéis gerenciais para a gestão do escritório e para os clientes dele.
          </div>
          <div style={{ display: "flex", marginTop: 16, fontSize: 24, color: "#ffffff" }}>
            {consultant.name} · Contador · Microsoft Certified: Power BI
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: 330,
            height: 440,
            borderRadius: 32,
            overflow: "hidden",
            background: "#ffffff",
            border: "6px solid #1c6bde",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photoSrc} width={330} height={440} style={{ objectFit: "cover" }} alt="" />
        </div>
      </div>
    ),
    { ...size },
  );
}
