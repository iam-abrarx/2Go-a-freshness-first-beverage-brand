export const basePath = "";

export const getAssetPath = (path: string) => {
  if (!path) return "";
  if (
    path.startsWith("http") || 
    path.startsWith("mailto") || 
    path.startsWith("tel") || 
    path.startsWith("https://wa.me") ||
    path.startsWith("wa.me")
  ) {
    return path;
  }
  
  // Ensure the path starts with a slash
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  
  return normalizedPath;
};
