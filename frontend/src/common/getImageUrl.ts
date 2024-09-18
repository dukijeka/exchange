function getImageUrl(fileName: string) {
  return new URL(`../assets/currencyIcons/${fileName}`, import.meta.url).href;
}

export default getImageUrl;
