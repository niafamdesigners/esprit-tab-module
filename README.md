Tab List Scroll Enhancements
----------------------------

This JavaScript script improves the user experience for horizontal scrolling in a tab list container. It provides several features to make navigation smoother and more intuitive.

### Features

✅ **Smooth Horizontal Scrolling**

-   Enables horizontal scrolling with the mouse wheel.

-   Allows smooth drag-to-scroll using the mouse.

✅ **Auto-Scroll When Near Edges**

-   When the cursor moves close to the left or right edge of the tab list, it triggers automatic scrolling.

-   The speed and threshold can be adjusted as needed.

✅ **Click to Center the Tab**

-   When a user clicks on a tab, the script ensures that the tab moves to the center of the container.

-   This improves visibility and accessibility.

✅ **Subtle Scroll Animation on Hover**

-   When the mouse enters the tab list, a slight 20px scroll effect occurs.

-   This gives a visual cue that the section is scrollable.

-   The effect is smooth for a better user experience.

### Usage

Simply include this JavaScript in your project and ensure your tab list has the correct class structure:

```
<div class="esprit-tab-container">
  <div class="esprit-tab-list">
    <div class="esprit-tab active" data-tab="tab1">All</div>
    <div class="esprit-tab" data-tab="tab2">Conferences</div>
    <div class="esprit-tab" data-tab="tab3">Technology</div>
  </div>
</div>
```

### Configuration

The following values can be adjusted within the script:

-   `scrollSpeed`: Controls the auto-scroll speed when the mouse is near edges.

-   `threshold`: Determines how close the mouse should be to the edge before triggering auto-scroll.

-   `hoverScrollDistance`: Defines how much the tab list moves when hovered over.

-   `scrollToCenter`: Ensures that a clicked tab moves to the center of the screen.

### Demo

For a live demonstration, check out the GitHub repository or the deployed version.

### License

This script is open-source and available under the MIT License.
