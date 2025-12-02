# Photos Folder

Place your wedding photos in this directory!

## File naming suggestions:
- engagement1.jpg, engagement2.jpg, etc.
- proposal1.jpg, proposal2.jpg, etc.
- family1.jpg, family2.jpg, etc.
- fun1.jpg, fun2.jpg, etc.

## Image guidelines:
- Use .jpg or .png format
- Recommended size: 800-1200px wide for best performance
- Try to use similar aspect ratios (like 4:3 or 16:9) for the best grid layout

## How to add photos:
1. Copy your image files to this `/public/photos/` folder
2. Update the `photos` array in `/src/pages/Photos.jsx` with your actual filenames
3. The photos will automatically appear on your website!

Example:
```javascript
const photos = [
  { src: '/photos/engagement1.jpg', alt: 'Our engagement', caption: 'The proposal moment' },
  { src: '/photos/date1.jpg', alt: 'First date', caption: 'Where it all began' },
  // ... add more photos
];
```