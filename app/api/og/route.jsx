import { ImageResponse } from "next/server";

export const runtime = "edge";

export async function GET() {
    const imageData = await fetch(new URL("./og.png", import.meta.url)).then(
        (res) => res.arrayBuffer()
    );
    return new ImageResponse(
        (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <img width="1200" height="630" src={imageData} />
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    );
}
