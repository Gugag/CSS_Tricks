const tricks = [
            {
                title: "CSS Grid Auto-Fit",
                description: "Create responsive layouts without media queries using auto-fit.",
                code: `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));`
            },
            {
                title: "Smooth Scrolling",
                description: "Add smooth scrolling behavior to your entire page.",
                code: `html { scroll-behavior: smooth; }`
            },
            {
                title: "Custom Scrollbar",
                description: "Style webkit scrollbars with custom colors and shapes.",
                code: `::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-thumb { background: #888; border-radius: 4px; }`
            },
            {
                title: "Truncate Text",
                description: "Truncate overflowing text with ellipsis.",
                code: `white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;`
            },
            {
                title: "Backdrop Filter",
                description: "Create frosted glass effects behind elements.",
                code: `backdrop-filter: blur(10px);
background: rgba(255, 255, 255, 0.1);`
            },
            {
                title: "CSS Variables",
                description: "Use custom properties for dynamic theming.",
                code: `:root { --primary-color: #3498db; }
.button { background: var(--primary-color); }`
            },
            {
                title: "Flexbox Centering",
                description: "Center elements both horizontally and vertically.",
                code: `display: flex;
justify-content: center;
align-items: center;`
            },
            {
                title: "Aspect Ratio",
                description: "Maintain aspect ratio for responsive elements.",
                code: `aspect-ratio: 16 / 9;`
            },
            {
                title: "Clamp Function",
                description: "Fluid typography that scales between min and max values.",
                code: `font-size: clamp(1rem, 2.5vw, 2rem);`
            },
            {
                title: "Object Fit",
                description: "Control how images fit within their containers.",
                code: `object-fit: cover;
object-position: center;`
            },
            {
                title: "CSS Transforms",
                description: "Rotate, scale, and translate elements smoothly.",
                code: `transform: rotate(45deg) scale(1.2) translateX(10px);`
            },
            {
                title: "Transition Timing",
                description: "Create smooth animations with custom timing functions.",
                code: `transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);`
            },
            {
                title: "Box Shadow Layers",
                description: "Create depth with multiple box shadows.",
                code: `box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);`
            },
            {
                title: "Gradient Borders",
                description: "Create colorful borders using gradients.",
                code: `border: 2px solid;
border-image: linear-gradient(45deg, #ff6b6b, #4ecdc4) 1;`
            },
            {
                title: "CSS Shapes",
                description: "Create geometric shapes with CSS only.",
                code: `.triangle {
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 50px solid #3498db;
}`
            },
            {
                title: "Sticky Footer",
                description: "Keep footer at bottom of page with flexbox.",
                code: `body { display: flex; flex-direction: column; min-height: 100vh; }
.footer { margin-top: auto; }`
            },
            {
                title: "Hover Effects",
                description: "Create engaging hover animations.",
                code: `.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}`
            },
            {
                title: "CSS Counters",
                description: "Automatically number elements with CSS counters.",
                code: `counter-reset: section;
h2::before { counter-increment: section; content: counter(section) ". "; }`
            },
            {
                title: "Text Gradient",
                description: "Apply gradients to text for colorful effects.",
                code: `background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;`
            },
            {
                title: "Filter Effects",
                description: "Apply visual filters to elements.",
                code: `filter: blur(5px) brightness(0.8) contrast(1.2);`
            },
            {
                title: "CSS Grid Areas",
                description: "Create complex layouts with named grid areas.",
                code: `grid-template-areas: 
  "header header"
  "sidebar main"
  "footer footer";`
            },
            {
                title: "Placeholder Styling",
                description: "Style input placeholder text.",
                code: `::placeholder {
  color: #999;
  font-style: italic;
}`
            },
            {
                title: "Multi-line Truncation",
                description: "Truncate text after multiple lines.",
                code: `display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
overflow: hidden;`
            },
            {
                title: "CSS Logical Properties",
                description: "Use logical properties for better internationalization.",
                code: `margin-inline-start: 1rem;
padding-block-end: 2rem;`
            },
            {
                title: "Focus Visible",
                description: "Style focus indicators only when needed.",
                code: `button:focus-visible {
  outline: 2px solid #4285f4;
  outline-offset: 2px;
}`
            },
            {
                title: "Container Queries",
                description: "Responsive design based on container size.",
                code: `@container (min-width: 400px) {
  .card { display: flex; }
}`
            },
            {
                title: "Scroll Snap",
                description: "Create smooth scrolling experiences.",
                code: `scroll-snap-type: x mandatory;
.item { scroll-snap-align: start; }`
            },
            {
                title: "CSS Masks",
                description: "Create complex shapes and cutouts.",
                code: `mask: radial-gradient(circle, transparent 50%, black 50%);`
            },
            {
                title: "Blend Modes",
                description: "Blend elements with different modes.",
                code: `mix-blend-mode: multiply;
background-blend-mode: overlay;`
            },
            {
                title: "CSS Animations",
                description: "Create keyframe animations.",
                code: `@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}
.element { animation: bounce 2s infinite; }`
            },
            {
                title: "Subgrid",
                description: "Align nested grid items with parent grid.",
                code: `.child {
  display: grid;
  grid-template-columns: subgrid;
}`
            },
            {
                title: "CSS Nesting",
                description: "Nest CSS rules for better organization.",
                code: `.card {
  padding: 1rem;
  
  &:hover {
    transform: scale(1.05);
  }
}`
            },
            {
                title: "Scroll-driven Animations",
                description: "Animate elements based on scroll position.",
                code: `animation-timeline: scroll();
animation-range: 0% 100%;`
            },
            {
                title: "CSS Layers",
                description: "Control cascade order with layers.",
                code: `@layer base, components, utilities;
@layer base { body { font-family: sans-serif; } }`
            },
            {
                title: "Gap Property",
                description: "Add spacing between flex and grid items.",
                code: `display: flex;
gap: 1rem 2rem; /* row-gap column-gap */`
            },
            {
                title: "Inset Property",
                description: "Shorthand for top, right, bottom, left.",
                code: `position: absolute;
inset: 0; /* top: 0; right: 0; bottom: 0; left: 0; */`
            },
            {
                title: "CSS Houdini",
                description: "Create custom CSS properties and animations.",
                code: `@property --rotation {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}`
            },
            {
                title: "Text Decorations",
                description: "Advanced text decoration options.",
                code: `text-decoration: underline wavy red;
text-decoration-thickness: 2px;
text-underline-offset: 5px;`
            },
            {
                title: "CSS Grid Masonry",
                description: "Create Pinterest-style masonry layouts.",
                code: `display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
grid-template-rows: masonry;`
            },
            {
                title: "Color Functions",
                description: "Use modern CSS color functions.",
                code: `color: hsl(210 50% 60%);
background: oklch(0.7 0.15 180);`
            },
            {
                title: "CSS Containment",
                description: "Optimize rendering with containment.",
                code: `contain: layout style paint;`
            },
            {
                title: "View Transitions",
                description: "Smooth transitions between page states.",
                code: `view-transition-name: main-content;`
            },
            {
                title: "Scroll Margins",
                description: "Add margins to scroll snap positions.",
                code: `scroll-margin-top: 100px;
scroll-padding: 1rem;`
            },
            {
                title: "CSS Toggles",
                description: "Create toggle states with CSS.",
                code: `toggle-root: sidebar --open;
toggle-trigger: sidebar;`
            },
            {
                title: "Accent Color",
                description: "Style form controls with accent color.",
                code: `accent-color: #ff6b6b;`
            },
            {
                title: "Color Scheme",
                description: "Indicate supported color schemes.",
                code: `color-scheme: light dark;`
            },
            {
                title: "CSS Env Variables",
                description: "Use environment variables for device-specific styling.",
                code: `padding-top: env(safe-area-inset-top);`
            },
            {
                title: "Forced Colors",
                description: "Respect user's forced color preferences.",
                code: `@media (forced-colors: active) {
  .card { border: 1px solid ButtonText; }
}`
            },
            {
                title: "CSS Regions",
                description: "Flow content across multiple regions.",
                code: `flow-into: article-flow;
flow-from: article-flow;`
            },
            {
                title: "CSS Exclusions",
                description: "Wrap content around arbitrary shapes.",
                code: `wrap-flow: both;
wrap-through: none;`
            },
            {
                title: "Flexbox Gap",
                description: "Add gaps between flex items.",
                code: `display: flex;
gap: 20px;`
            },
            {
                title: "Overscroll Behavior",
                description: "Control scrolling behavior at boundaries.",
                code: `overscroll-behavior: contain;`
            },
            {
                title: "CSS Zoom",
                description: "Scale elements while maintaining layout.",
                code: `zoom: 1.5;`
            },
            {
                title: "Resize Property",
                description: "Make elements resizable by users.",
                code: `resize: both;
overflow: auto;`
            },
            {
                title: "User Select",
                description: "Control text selection behavior.",
                code: `user-select: none; /* Disable text selection */`
            },
            {
                title: "Pointer Events",
                description: "Control element interaction.",
                code: `pointer-events: none; /* Disable all interactions */`
            },
            {
                title: "CSS Columns",
                description: "Create multi-column layouts.",
                code: `column-count: 3;
column-gap: 2rem;
column-rule: 1px solid #ccc;`
            },
            {
                title: "Writing Mode",
                description: "Change text direction and orientation.",
                code: `writing-mode: vertical-rl;
text-orientation: mixed;`
            },
            {
                title: "CSS Quotes",
                description: "Add custom quotation marks.",
                code: `quotes: "«" "»" "‹" "›";
q::before { content: open-quote; }
q::after { content: close-quote; }`
            },
            {
                title: "List Style",
                description: "Customize list markers.",
                code: `list-style: none;
li::before { content: "→ "; color: #3498db; }`
            },
            {
                title: "CSS Calc",
                description: "Perform calculations in CSS.",
                code: `width: calc(100% - 2rem);
font-size: calc(1rem + 0.5vw);`
            },
            {
                title: "Min/Max Functions",
                description: "Use min, max, and clamp for responsive values.",
                code: `width: min(90%, 600px);
height: max(200px, 50vh);`
            },
            {
                title: "CSS Conic Gradients",
                description: "Create circular gradients.",
                code: `background: conic-gradient(from 0deg, red, orange, yellow, green, blue, purple, red);`
            },
            {
                title: "Isolation",
                description: "Create new stacking contexts.",
                code: `isolation: isolate;`
            },
            {
                title: "Outline Offset",
                description: "Add space between element and outline.",
                code: `outline: 2px solid blue;
outline-offset: 4px;`
            },
            {
                title: "CSS Prefers",
                description: "Respect user preferences.",
                code: `@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; }
}`
            },
            {
                title: "CSS Supports",
                description: "Feature detection in CSS.",
                code: `@supports (display: grid) {
  .container { display: grid; }
}`
            },
            {
                title: "CSS Math Functions",
                description: "Use mathematical functions in CSS.",
                code: `transform: rotate(calc(45deg * var(--multiplier)));
width: min(100%, max(300px, 50vw));`
            },
            {
                title: "CSS Anchor Positioning",
                description: "Position elements relative to anchors.",
                code: `anchor-name: --my-anchor;
position-anchor: --my-anchor;`
            },
            {
                title: "CSS Scroll Timeline",
                description: "Create scroll-based animations.",
                code: `scroll-timeline: --my-timeline block;
animation-timeline: --my-timeline;`
            },
            {
                title: "CSS Cascade Layers",
                description: "Control cascade with layers.",
                code: `@layer reset, base, components;
@layer components { .btn { padding: 10px; } }`
            },
            {
                title: "CSS Container Units",
                description: "Size relative to container.",
                code: `font-size: 5cqw; /* 5% of container width */
height: 50cqh; /* 50% of container height */`
            },
            {
                title: "CSS Discrete Properties",
                description: "Animate discrete properties.",
                code: `transition: display 0.3s allow-discrete;`
            },
            {
                title: "CSS Popover",
                description: "Style popover elements.",
                code: `::backdrop {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}`
            },
            {
                title: "CSS Selectmenu",
                description: "Style custom select menus.",
                code: `selectmenu::part(button) {
  background: #f0f0f0;
  border: 1px solid #ccc;
}`
            },
            {
                title: "CSS Highlight",
                description: "Style text highlights.",
                code: `::highlight(search-result) {
  background: yellow;
  color: black;
}`
            },
            {
                title: "CSS Marker",
                description: "Style list markers.",
                code: `::marker {
  color: red;
  font-size: 1.2em;
}`
            },
            {
                title: "CSS Cue",
                description: "Style video captions.",
                code: `::cue {
  background: rgba(0, 0, 0, 0.8);
  color: white;
}`
            },
            {
                title: "CSS Slotted",
                description: "Style slotted content in web components.",
                code: `::slotted(p) {
  color: blue;
  font-weight: bold;
}`
            },
            {
                title: "CSS Part",
                description: "Style parts of web components.",
                code: `my-component::part(button) {
  background: #007bff;
  color: white;
}`
            },
            {
                title: "CSS Target",
                description: "Style targeted elements.",
                code: `:target {
  background: #ffffcc;
  border: 2px solid #ffcc00;
}`
            },
            {
                title: "CSS Is/Where",
                description: "Use logical selectors.",
                code: `:is(h1, h2, h3) {
  color: #333;
}
:where(.btn) {
  padding: 10px;
}`
            },
            {
                title: "CSS Has",
                description: "Select parent elements based on children.",
                code: `.card:has(img) {
  border: 2px solid #ddd;
}`
            },
            {
                title: "CSS Not",
                description: "Exclude elements from selection.",
                code: `button:not(.disabled) {
  cursor: pointer;
}`
            },
            {
                title: "CSS Nth",
                description: "Select elements by position.",
                code: `tr:nth-child(even) {
  background: #f5f5f5;
}`
            },
            {
                title: "CSS Empty",
                description: "Style empty elements.",
                code: `.message:empty::before {
  content: "No messages";
  color: #999;
}`
            },
            {
                title: "CSS Valid/Invalid",
                description: "Style form validation states.",
                code: `input:valid {
  border-color: green;
}
input:invalid {
  border-color: red;
}`
            },
            {
                title: "CSS In Range",
                description: "Style inputs within valid range.",
                code: `input:in-range {
  border-color: green;
}
input:out-of-range {
  border-color: red;
}`
            },
            {
                title: "CSS Optional/Required",
                description: "Style form field requirements.",
                code: `input:required {
  border-left: 3px solid red;
}
input:optional {
  border-left: 3px solid #ccc;
}`
            },
            {
                title: "CSS Checked",
                description: "Style checked form elements.",
                code: `input:checked + label {
  color: #007bff;
  font-weight: bold;
}`
            },
            {
                title: "CSS Disabled",
                description: "Style disabled form elements.",
                code: `input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}`
            },
            {
                title: "CSS Hover/Focus",
                description: "Style interactive states.",
                code: `a:hover, a:focus {
  color: #007bff;
  text-decoration: underline;
}`
            },
            {
                title: "CSS Active",
                description: "Style active elements.",
                code: `button:active {
  transform: scale(0.98);
}`
            },
            {
                title: "CSS Visited",
                description: "Style visited links.",
                code: `a:visited {
  color: #6f42c1;
}`
            },
            {
                title: "CSS First/Last Child",
                description: "Style first and last children.",
                code: `.item:first-child {
  margin-top: 0;
}
.item:last-child {
  margin-bottom: 0;
}`
            },
            {
                title: "CSS Before/After",
                description: "Add content with pseudo-elements.",
                code: `.icon::before {
  content: "★";
  color: gold;
  margin-right: 5px;
}`
            },
            {
                title: "CSS Root",
                description: "Style the root element.",
                code: `:root {
  --primary: #007bff;
  --secondary: #6c757d;
}`
            },
            {
                title: "CSS Fullscreen",
                description: "Style fullscreen elements.",
                code: `:fullscreen {
  background: black;
  color: white;
}`
            },
            {
                title: "CSS Picture in Picture",
                description: "Style picture-in-picture elements.",
                code: `:picture-in-picture {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}`
            },
            {
                title: "CSS Autofill",
                description: "Style autofilled form inputs.",
                code: `input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0 30px white inset;
}`
            },
            {
                title: "CSS Placeholder Shown",
                description: "Style inputs with visible placeholders.",
                code: `input:placeholder-shown {
  border-color: #ccc;
}`
            },
            {
                title: "CSS Read Only/Write",
                description: "Style editable states.",
                code: `input:read-only {
  background: #f5f5f5;
}
input:read-write {
  background: white;
}`
            },
            {
                title: "CSS Default",
                description: "Style default form elements.",
                code: `input:default {
  box-shadow: 0 0 2px blue;
}`
            },
            {
                title: "CSS Indeterminate",
                description: "Style indeterminate checkboxes.",
                code: `input:indeterminate {
  opacity: 0.5;
}`
            },
            {
                title: "CSS Blank",
                description: "Style blank input elements.",
                code: `input:blank {
  border-color: #ff6b6b;
}`
            },
            {
                title: "CSS User Invalid",
                description: "Style user-interacted invalid inputs.",
                code: `input:user-invalid {
  border-color: #dc3545;
  background: #fff5f5;
}`
            }
        ];

       let currentPage = 1;
const tricksPerPage = 9;
let filteredTricks = tricks;
let currentSearchTerm = '';

function highlightText(text, searchTerm) {
    if (!searchTerm || !searchTerm.trim()) return text;
    const cleanTerm = searchTerm.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Escape special regex chars
    try {
        const regex = new RegExp(`(${cleanTerm})`, 'gi');
        return text.replace(regex, '<span class="highlight">$1</span>');
    } catch (e) {
        console.error('Regex error:', e);
        return text;
    }
}


        function searchTricks(searchTerm) {
            console.log('Search function called with:', searchTerm); // Debug log
            currentSearchTerm = searchTerm.toLowerCase().trim();
            
            if (!currentSearchTerm) {
                filteredTricks = [...tricks]; // Create a copy
                console.log('No search term, showing all tricks:', filteredTricks.length);
            } else {
                filteredTricks = tricks.filter(trick => {
                    const titleMatch = trick.title.toLowerCase().includes(currentSearchTerm);
                    const descMatch = trick.description.toLowerCase().includes(currentSearchTerm);
                    const codeMatch = trick.code.toLowerCase().includes(currentSearchTerm);
                    return titleMatch || descMatch || codeMatch;
                });
                console.log('Filtered tricks:', filteredTricks.length); // Debug log
            }
            
            currentPage = 1; // Reset to first page
            updateSearchResults();
            displayTricks(currentPage);
            updatePagination();
        }

        function updateSearchResults() {
            const searchResultsInfo = document.getElementById('search-results-info');
            const clearBtn = document.getElementById('clear-search');
            
            if (currentSearchTerm) {
                searchResultsInfo.style.display = 'block';
                clearBtn.style.display = 'block';
                
                if (filteredTricks.length === 0) {
                    searchResultsInfo.innerHTML = `No results found for "<strong>${currentSearchTerm}</strong>"`;
                } else {
                    searchResultsInfo.innerHTML = `Found ${filteredTricks.length} trick${filteredTricks.length !== 1 ? 's' : ''} for "<strong>${currentSearchTerm}</strong>"`;
                }
            } else {
                searchResultsInfo.style.display = 'none';
                clearBtn.style.display = 'none';
            }
        }

        function displayTricks(page) {
            const container = document.getElementById('tricks-container');
            const totalPages = Math.ceil(filteredTricks.length / tricksPerPage);
            
            if (filteredTricks.length === 0) {
                container.innerHTML = `
                    <div class="no-results">
                        <h3>No tricks found</h3>
                        <p>Try adjusting your search terms or browse all tricks.</p>
                    </div>
                `;
                return;
            }
            
            const startIndex = (page - 1) * tricksPerPage;
            const endIndex = startIndex + tricksPerPage;
            const pageTricks = filteredTricks.slice(startIndex, endIndex);

            container.innerHTML = pageTricks.map(trick => `
                <div class="trick-card">
                    <h3>${highlightText(trick.title, currentSearchTerm)}</h3>
                    <p>${highlightText(trick.description, currentSearchTerm)}</p>
                    <div class="code-block">${highlightText(trick.code, currentSearchTerm)}</div>
                </div>
            `).join('');
        }

        function updatePagination() {
            const totalPages = Math.ceil(filteredTricks.length / tricksPerPage);
            const pageNumbers = document.getElementById('page-numbers');
            const pageInfo = document.getElementById('page-info');
            const prevBtn = document.getElementById('prev-btn');
            const nextBtn = document.getElementById('next-btn');
            const paginationContainer = document.querySelector('.pagination');

            // Hide pagination if no results or only one page
            if (filteredTricks.length === 0 || totalPages <= 1) {
                paginationContainer.style.display = 'none';
                return;
            } else {
                paginationContainer.style.display = 'flex';
            }

            // Update page info
            pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;

            // Update navigation buttons
            prevBtn.disabled = currentPage === 1;
            nextBtn.disabled = currentPage === totalPages;

            // Create page number buttons
            let pageNumbersHTML = '';
            const maxVisiblePages = 5;
            let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
            let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

            if (endPage - startPage + 1 < maxVisiblePages) {
                startPage = Math.max(1, endPage - maxVisiblePages + 1);
            }

            for (let i = startPage; i <= endPage; i++) {
                pageNumbersHTML += `
                    <button onclick="goToPage(${i})" class="${i === currentPage ? 'active' : ''}">${i}</button>
                `;
            }

            pageNumbers.innerHTML = pageNumbersHTML;
        }

        function changePage(direction) {
            const totalPages = Math.ceil(filteredTricks.length / tricksPerPage);
            const newPage = currentPage + direction;
            if (newPage >= 1 && newPage <= totalPages) {
                currentPage = newPage;
                displayTricks(currentPage);
                updatePagination();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }

        function goToPage(page) {
            const totalPages = Math.ceil(filteredTricks.length / tricksPerPage);
            if (page >= 1 && page <= totalPages) {
                currentPage = page;
                displayTricks(currentPage);
                updatePagination();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }

        // Initialize the page
        filteredTricks = [...tricks]; // Initialize with all tricks
        displayTricks(currentPage);
        updatePagination();
        
        console.log('Page initialized with', tricks.length, 'tricks'); // Debug log

        // Search functionality
        const searchInput = document.getElementById('search-input');
        const clearBtn = document.getElementById('clear-search');
        
        // Add event listeners after DOM is ready
        if (searchInput) {
            searchInput.addEventListener('input', function(e) {
                console.log('Searching for:', e.target.value); // Debug log
                searchTricks(e.target.value.trim());
            });
        }
        
        if (clearBtn) {
            clearBtn.addEventListener('click', function() {
                searchInput.value = '';
                searchTricks('');
                searchInput.focus();
            });
        }

        // Add keyboard navigation
        document.addEventListener('keydown', function(e) {
            // Don't interfere with typing in search input
            if (e.target === searchInput) return;
            
            const totalPages = Math.ceil(filteredTricks.length / tricksPerPage);
            
            if (e.key === 'ArrowLeft' && currentPage > 1) {
                changePage(-1);
            } else if (e.key === 'ArrowRight' && currentPage < totalPages) {
                changePage(1);
            } else if (e.key === '/' && !e.ctrlKey && !e.metaKey) {
                e.preventDefault();
                searchInput.focus();
            } else if (e.key === 'Escape' && searchInput.value) {
                searchInput.value = '';
                searchTricks('');
            }
        });
