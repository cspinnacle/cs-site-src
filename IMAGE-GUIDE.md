# Image Guide for CS Site

## 📸 How to Add Images to Articles and Newsletters

### **Method 1: Static Images (Recommended)**

1. **Add images to the `public/images/` folder:**
   ```
   public/
   ├── images/
   │   ├── articles/
   │   │   ├── my-diagram.png
   │   │   └── code-example.jpg
   │   └── newsletters/
   │       ├── classroom-photo.jpg
   │       └── assignment-screenshot.png
   ```

2. **Reference in markdown:**
   ```markdown
   ![Alt text](/images/articles/my-diagram.png)
   
   # With caption
   ![Code example](/images/articles/code-example.jpg)
   *This is a caption explaining the code example*
   ```

### **Method 2: External Images**

```markdown
![Description](https://example.com/image.jpg)
```

### **Method 3: Images with Links**

```markdown
[![Image description](/images/articles/diagram.png)](/articles/detailed-explanation)
```

### **Method 4: HTML for Advanced Styling**

```html
<img src="/images/articles/example.png" alt="Description" width="500" style="border-radius: 8px;" />

<figure>
  <img src="/images/newsletters/classroom.jpg" alt="Classroom" />
  <figcaption>Our computer science classroom</figcaption>
</figure>
```

## 🎨 **Image Best Practices**

### **File Organization**
- **Articles**: `/public/images/articles/`
- **Newsletters**: `/public/images/newsletters/`
- **General**: `/public/images/`

### **File Naming**
- Use lowercase, hyphens for spaces: `python-variables-example.png`
- Be descriptive: `week-1-classroom-setup.jpg`
- Include context: `sorting-algorithm-diagram.svg`

### **Image Formats**
- **Screenshots**: PNG (lossless)
- **Photos**: JPG (smaller file size)
- **Diagrams**: SVG (scalable) or PNG
- **Icons**: SVG preferred

### **Size Recommendations**
- **Width**: 800px max for articles
- **File size**: Under 500KB when possible
- **Responsive**: Images auto-resize in the design

## 📝 **Example Usage**

### In Articles:
```markdown
---
title: "Python Lists Explained"
date: "2024-09-10"
category: "fundamentals"
---

# Python Lists Explained

Lists are ordered collections of items in Python.

![Python list diagram](/images/articles/python-lists-diagram.png)
*Visual representation of how lists work in memory*

## Creating Lists

```python
fruits = ["apple", "banana", "orange"]
```

![Code example](/images/articles/list-creation-code.png)

## Common Operations

![List operations](/images/articles/list-operations.jpg)
*Common list operations and their results*
```

### In Newsletters:
```markdown
---
title: "Week 3 - Data Structures"
date: "2024-09-15"
week: 3
---

# Week 3 Newsletter

This week we explored data structures!

![Class working on laptops](/images/newsletters/week3-coding-session.jpg)

## What We Learned
- Lists and their operations
- Dictionaries and key-value pairs

![Whiteboard diagram](/images/newsletters/data-structures-whiteboard.jpg)
*Our whiteboard session explaining data structures*

## Assignment Results

Great work everyone! Here are the results:

![Assignment scores chart](/images/newsletters/week3-scores.png)
```

## 🔧 **Adding Images Workflow**

1. **Prepare your image**
   - Resize to appropriate dimensions
   - Optimize file size
   - Choose descriptive filename

2. **Add to project**
   ```bash
   # Copy to appropriate folder
   cp my-image.png /public/images/articles/
   ```

3. **Reference in markdown**
   ```markdown
   ![Description](/images/articles/my-image.png)
   ```

4. **Test locally**
   - Run `npm run dev`
   - Check image displays correctly
   - Verify on mobile/desktop

5. **Deploy**
   - Commit and push to GitHub
   - Images automatically deploy with site

## 🌐 **GitHub Integration**

When editing on GitHub.com:
1. Go to the `public/images/` folder
2. Click "Add file" → "Upload files"
3. Drag and drop your images
4. Edit your markdown files to reference them
5. Commit changes

The site will automatically rebuild and deploy!

## 🎯 **Pro Tips**

- **Alt text**: Always include descriptive alt text for accessibility
- **Captions**: Use *italics* below images for captions
- **File sizes**: Compress images before uploading
- **Consistent naming**: Use consistent naming conventions
- **Organization**: Keep related images in the same folder
- **Backup**: Keep original high-res versions elsewhere