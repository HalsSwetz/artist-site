const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "dghgutvux";

export const cld = {
  /**
   * Generate a full Cloudinary URL with transformations
   * @param publicId - The Cloudinary public_id (including folder path)
   * @param width - Target width
   * @param cropMode - Crop/fit mode (e.g., "fit", "fill", "scale")
   * @param quality - Image quality (1-100)
   */
  full: (publicId: string, width: number, cropMode: string = "fit", quality: number = 85): string => {
    // Remove any leading slashes from publicId
    const cleanId = publicId.replace(/^\/+/, '');
    
    return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_${width},c_${cropMode},f_auto,q_${quality}/${cleanId}`;
  },
};