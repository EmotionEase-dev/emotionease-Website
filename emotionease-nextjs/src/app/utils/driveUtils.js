/**
 * Utility functions for working with Google Drive image URLs
 */

/**
 * Converts a Google Drive shareable URL to direct image URLs
 * @param {string} shareableUrl - The Google Drive shareable link
 * @returns {Object|null} Object containing different URL formats or null if invalid
 */
export const convertDriveUrl = (shareableUrl) => {
    // Return null if no URL provided
    if (!shareableUrl) return null;
  
    // Extract file ID from various Google Drive URL formats:
    // 1. https://drive.google.com/file/d/FILE_ID/view
    // 2. https://drive.google.com/open?id=FILE_ID
    // 3. https://drive.google.com/uc?id=FILE_ID
    const match = shareableUrl.match(/(?:\/file\/d\/|id=)([\w-]+)(?:\/|$)/);
    const fileId = match ? match[1] : null;
  
    // Return null if no file ID found
    if (!fileId) return null;
  
    // Return all possible URL formats
    return {
      // High-quality thumbnail (adjust 'w1000' for different sizes)
      thumbnailUrl: `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`,
      
      // Direct download URL
      directUrl: `https://drive.google.com/uc?export=view&id=${fileId}`,
      
      // Google user content URL (works for some file types)
      googleusercontentUrl: `https://lh3.googleusercontent.com/d/${fileId}=s0`,
      
      // Original file ID for reference
      fileId
    };
  };
  
  /**
   * Gets the best available image URL from a Google Drive shareable link
   * @param {string} shareableUrl - The Google Drive shareable link
   * @param {string} fallbackUrl - Fallback URL if conversion fails
   * @returns {string} The best available image URL
   */
  export const getBestDriveImageUrl = (shareableUrl, fallbackUrl) => {
    const urls = convertDriveUrl(shareableUrl);
    
    // Try different URL formats in order of preference
    return urls?.thumbnailUrl || 
           urls?.directUrl || 
           urls?.googleusercontentUrl || 
           fallbackUrl;
  };
  
  /**
   * Handles image loading errors by trying alternative sources
   * @param {Event} e - The error event
   * @param {Array<string>} sources - Array of image sources to try
   * @param {HTMLElement} imgElement - The image element
   */
  export const handleDriveImageError = (e, sources, imgElement) => {
    if (!e.target || !sources) return;
  
    const currentSrc = e.target.src;
    const currentIndex = sources.indexOf(currentSrc);
  
    if (currentIndex < sources.length - 1) {
      // Try the next source in the array
      e.target.src = sources[currentIndex + 1];
    } else {
      // Last resort: apply error styling
      if (imgElement) {
        imgElement.style.objectFit = 'contain';
        imgElement.style.backgroundColor = '#f8f9fa';
      }
    }
  };
  
  // Optional: Utility to create a sources array for an image component
  export const createDriveImageSources = (driveUrl, fallbackUrl) => {
    const urls = convertDriveUrl(driveUrl) || {};
    return [
      urls.thumbnailUrl,
      urls.directUrl,
      urls.googleusercontentUrl,
      fallbackUrl
    ].filter(Boolean); // Remove any undefined/null values
  };