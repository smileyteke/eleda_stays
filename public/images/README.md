# Background Images Directory

Place your background images in this folder and update the CSS accordingly.

## Recommended Image Specifications:

### File Formats:
- **JPG** - Best for photographs with many colors
- **PNG** - Best for images with transparency or fewer colors
- **WebP** - Modern format with better compression (if supported)

### Dimensions:
- **Minimum**: 1920x1080px (Full HD)
- **Recommended**: 2560x1440px or higher
- **Aspect Ratio**: 16:9 or 16:10 works best

### File Sizes:
- **Target**: 200KB - 500KB per image
- **Maximum**: 1MB (to maintain fast loading)

## File Naming Convention:
- `home-background.jpg` - Home page background
- `about-background.jpg` - About page background  
- `services-background.jpg` - Services page background
- `contact-background.jpg` - Contact page background

## How to Add Your Images:

1. **Save your images** in this `/public/images/` folder
2. **Update the CSS** in `src/App.css` or `src/backgrounds.css`
3. **Replace the background-image URLs**:
   ```css
   .home-background {
     background-image: url('/images/your-image-name.jpg');
   }
   ```

## Image Optimization Tips:
- Compress images before uploading
- Consider using tools like TinyPNG or ImageOptim
- Test on different screen sizes
- Ensure images look good with the overlay effect

## Current Placeholder Images:
The pages currently use SVG placeholders that will be replaced when you add your images.