import React from "react"
import { useAllImages } from "@hooks/useAllImages"
import { useUploadFolder } from "@hooks/useUploadFolder"

const CloudinaryImage = ({ name, alt, className }) => {
  const publicId = `${useUploadFolder()}/${name}`
  const image = useAllImages().find((img) => img.public_id === publicId)

  return <img src={image.secure_url} className={className} alt={alt} />
}

export default CloudinaryImage
