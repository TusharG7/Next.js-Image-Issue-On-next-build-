import fs from "fs";
import path from "path";

export const PUT = async (req) => {
  const { image } = await req.json();

  try {
    if (image) {
      const base64Data = image.replace(/^data:image\/\w+;base64,/, "");
      const buffer = Buffer.from(base64Data, "base64");
      const imagesFolder = path.join(process.cwd(), "public", "images");

      if (!fs.existsSync(imagesFolder)) {
        fs.mkdirSync(imagesFolder, { recursive: true });
      }

      // Save the image as PNG
      const pngImagePath = path.join(imagesFolder, `newImage.png`);
      fs.writeFileSync(pngImagePath, buffer);
    }

    return new Response(`Image updated`, { status: 200 });
  } catch (error) {
    return new Response(`Failed to update Image: ${error}`, { status: 500 });
  }
};
