# Images for CSS Background References

This folder contains images that are referenced directly in CSS files.

## Current Images:
- `website-pic-1.jpg` - Home page background

## Why src/images instead of public/images?

When images are referenced in CSS files (like App.css), they need to be:
1. **Processed by Webpack** - Images in src/ are processed and optimized
2. **Properly resolved** - Webpack can resolve relative paths from src/
3. **Cache-busted** - Webpack adds hashes to filenames for better caching

## File Naming:
- Use hyphens instead of spaces: `my-image.jpg` not `my image.jpg`
- Use lowercase for consistency
- Keep names descriptive but concise

## To Add New Background Images:
1. Copy image to this `src/images/` folder
2. Update CSS with: `background-image: url('./images/your-image.jpg');`
3. The relative path `./images/` starts from the CSS file location

## Image Optimization:
- Recommended size: 1920x1080px or larger
- Format: JPG for photos, PNG for graphics with transparency
- File size: Keep under 500KB for web performance