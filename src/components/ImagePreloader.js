// components/ImagePreloader.jsx
import React, { useEffect } from "react";
import illustrationMap from "../data/Illustrationmap"; // Importuj existující mapu
import illustrationsJson from "../data/illustrations.json"; // Importuj json s obrázky

const ImagePreloader = () => {
  useEffect(() => {
    // Funkce pro přednačítání obrázků
    const preloadImages = (images) => {
      images.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };

    // Přednačítáme obrázky z illustrationMap
    const imagePathsFromMap = Object.values(illustrationMap);
    preloadImages(imagePathsFromMap);

    // Přednačítáme obrázky z illustrations.json
    const imagesFromJson = [];
    Object.values(illustrationsJson).forEach(category => {
      category.categories.forEach(subCategory => {
        imagesFromJson.push(...subCategory.images);
      });
    });
    preloadImages(imagesFromJson);
  }, []);

  return null; // Tento komponent nic nezobrazuje, slouží pouze pro přednačítání
};

export default ImagePreloader;
