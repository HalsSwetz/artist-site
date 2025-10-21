const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "dghgutvux";

export const cld = {
  full: (publicId: string, width: number, cropMode: string = "fit", quality: number = 85): string => {
    const cleanId = publicId.replace(/^\/+/, '');
    // Add version param to bust cache
    const url = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_${width},c_${cropMode},f_auto,q_${quality}/${cleanId}?v=2`;
    
    console.log('Cloudinary URL:', url);
    
    return url;
  },
};