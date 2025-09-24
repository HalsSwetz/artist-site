const CLOUD = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!;
export const cld = {
  full: (publicId: string, w: number, mode: "fill" | "fit" = "fill", q = 70) =>
    `https://res.cloudinary.com/${CLOUD}/image/upload/f_auto,q_${q},c_${mode},w_${w}/${publicId}`,

  lqip: (publicId: string) =>
    `https://res.cloudinary.com/${CLOUD}/image/upload/f_auto,q_10,e_blur:1200,w_24/${publicId}`,
};