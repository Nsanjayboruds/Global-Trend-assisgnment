
        // Product images data - organized by color
        const productImagesByColor = {
            'Black': [
                'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800',
                'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800',
                'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800',
                'https://images.unsplash.com/photo-1622445275576-721325763afe?w=800',
                'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800',
                'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=800'
            ],
            'White': [
                'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=800',
                'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800',
                'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?w=800',
                'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800',
                'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800',
                'https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?w=800'
            ],
            'Navy': [
                'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800',
                'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800',
                'https://images.unsplash.com/photo-1580662775461-74e5f2d4a66d?w=800',
                'https://images.unsplash.com/photo-1622445275576-721325763afe?w=800',
                'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800',
                'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800'
            ],
            'Gray': [
                'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800',
                'https://images.unsplash.com/photo-1622445275576-721325763afe?w=800',
                'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=800',
                'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800',
                'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800',
                'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800'
            ],
            'Olive': [
                'https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?w=800',
                'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800',
                'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800',
                'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800',
                'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=800',
                'https://images.unsplash.com/photo-1622445275576-721325763afe?w=800'
            ]
        };

        let currentColor = 'Black';
        let productImages = productImagesByColor[currentColor];

        // Image Gallery
        const mainImage = document.getElementById('mainImage');
        const thumbnails = document.querySelectorAll('.thumbnail');
        const thumbnailsContainer = document.getElementById('thumbnails');

        function updateThumbnails(color) {
            const images = productImagesByColor[color];
            thumbnailsContainer.innerHTML = '';
            
            images.forEach((imgSrc, index) => {
                const thumbDiv = document.createElement('div');
                thumbDiv.className = 'thumbnail' + (index === 0 ? ' active' : '');
                thumbDiv.setAttribute('data-index', index);
                thumbDiv.innerHTML = `<img src="${imgSrc.replace('w=800', 'w=400')}" alt="Product ${index + 1}">`;
                
                thumbDiv.addEventListener('click', function() {
                    const idx = parseInt(this.getAttribute('data-index'));
                    
                    // Remove active class from all thumbnails
                    document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                    
                    // Add active class to clicked thumbnail
                    this.classList.add('active');
                    
                    // Update main image
                    mainImage.src = productImages[idx];
                });
                
                thumbnailsContainer.appendChild(thumbDiv);
            });
        }

        function changeProductColor(color) {
            currentColor = color;
            productImages = productImagesByColor[color];
            
            // Update main image to first image of selected color
            mainImage.src = productImages[0];
            
            // Update thumbnails
            updateThumbnails(color);
        }

        // Color Selection
        const colorSwatches = document.querySelectorAll('.color-swatch');
        const selectedColorText = document.getElementById('selectedColor');

        colorSwatches.forEach(swatch => {
            swatch.addEventListener('click', function() {
                const color = this.getAttribute('data-color');
                
                // Remove active class from all swatches
                colorSwatches.forEach(s => s.classList.remove('active'));
                
                // Add active class to clicked swatch
                this.classList.add('active');
                
                // Update selected color text
                selectedColorText.textContent = color;
                
                // Change product images based on color
                changeProductColor(color);
                
                // Store in memory (not localStorage as per restrictions)
                window.selectedColor = color;
            });
        });

        // Size Selection
        const sizeButtons = document.querySelectorAll('.size-btn');
        const selectedSizeText = document.getElementById('selectedSize');

        sizeButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                const size = this.getAttribute('data-size');
                
                // Remove active class from all buttons
                sizeButtons.forEach(b => b.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Update selected size text
                selectedSizeText.textContent = size;
                
                // Store in memory (not localStorage as per restrictions)
                window.selectedSize = size;
            });
        });

        // Size Chart Modal
        const sizeChartBtn = document.getElementById('sizeChartBtn');
        const sizeChartModal = document.getElementById('sizeChartModal');
        const closeSizeChart = document.getElementById('closeSizeChart');

        function openSizeChart() {
            sizeChartModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeSizeChartModal() {
            sizeChartModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        sizeChartBtn.addEventListener('click', openSizeChart);
        closeSizeChart.addEventListener('click', closeSizeChartModal);

        // Close modal when clicking overlay
        sizeChartModal.addEventListener('click', function(e) {
            if (e.target === sizeChartModal) {
                closeSizeChartModal();
            }
        });

        // Close modal with ESC key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                if (sizeChartModal.classList.contains('active')) {
                    closeSizeChartModal();
                }
                if (compareColorsModal.classList.contains('active')) {
                    closeCompareColorsModal();
                }
            }
        });

        // Compare Colors - Quick Popup Feature
        const compareColorsBtn = document.getElementById('compareColorsBtn');
        const quickComparePopup = document.getElementById('quickComparePopup');
        const closeQuickCompare = document.getElementById('closeQuickCompare');
        const quickCompareColors = document.getElementById('quickCompareColors');
        const viewAllColorsBtn = document.getElementById('viewAllColorsBtn');

        // Available colors data
        const colorsData = [
            { name: 'Black', bg: '#000', desc: 'Classic & Versatile', border: false },
            { name: 'White', bg: '#fff', desc: 'Clean & Fresh', border: true },
            { name: 'Navy', bg: '#1e3a8a', desc: 'Professional', border: false },
            { name: 'Gray', bg: '#6b7280', desc: 'Modern & Neutral', border: false },
            { name: 'Olive', bg: '#6b7247', desc: 'Earthy & Unique', border: false }
        ];

        // Show quick compare popup with all colors side-by-side
        compareColorsBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showQuickCompare();
        });

        function showQuickCompare() {
            quickComparePopup.classList.add('active');
            quickCompareColors.innerHTML = '';

            // Display all colors side-by-side in the popup
            colorsData.forEach(color => {
                const colorDiv = document.createElement('div');
                colorDiv.className = 'quick-compare-color';
                
                const borderStyle = color.border ? 'border: 2px solid #ddd;' : '';
                
                colorDiv.innerHTML = `
                    <div class="quick-compare-color-swatch" style="background: ${color.bg}; ${borderStyle}"></div>
                    <div class="quick-compare-color-name">${color.name}</div>
                    <div style="font-size: 12px; color: #666;">${color.desc}</div>
                `;
                
                // Make color selectable - clicking sets it as active
                colorDiv.style.cursor = 'pointer';
                colorDiv.addEventListener('click', function() {
                    // Find and click the corresponding main color swatch
                    const mainSwatch = Array.from(colorSwatches).find(
                        s => s.getAttribute('data-color') === color.name
                    );
                    if (mainSwatch) {
                        mainSwatch.click();
                    }
                    
                    // Visual feedback
                    document.querySelectorAll('.quick-compare-color').forEach(c => {
                        c.style.background = '#f9f9f9';
                    });
                    this.style.background = '#e8f5e9';
                });
                
                quickCompareColors.appendChild(colorDiv);
            });
        }

        function closeQuickComparePopup() {
            quickComparePopup.classList.remove('active');
        }

        closeQuickCompare.addEventListener('click', closeQuickComparePopup);

        // View all colors button opens the full modal
        viewAllColorsBtn.addEventListener('click', function() {
            closeQuickComparePopup();
            openCompareColors();
        });

        // Compare Colors Modal (Full Featured)
        const compareColorsModal = document.getElementById('compareColorsModal');
        const closeCompareColors = document.getElementById('closeCompareColors');
        const colorCompareItems = document.querySelectorAll('.color-compare-item');

        function openCompareColors() {
            compareColorsModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeCompareColorsModal() {
            compareColorsModal.classList.remove('active');
            document.body.style.overflow = 'auto';
            
            // Reset selections when closing
            colorCompareItems.forEach(item => {
                item.classList.remove('selected');
                const indicator = item.querySelector('.selection-indicator');
                if (indicator) indicator.style.opacity = '0';
            });
            selectedColors = [];
            selectedComparison.style.display = 'none';
            comparisonDisplay.innerHTML = '';
        }

        compareColorsBtn.addEventListener('click', openCompareColors);
        closeCompareColors.addEventListener('click', closeCompareColorsModal);

        // Color comparison selection with side-by-side display
        const selectedComparison = document.getElementById('selectedComparison');
        const comparisonDisplay = document.getElementById('comparisonDisplay');
        let selectedColors = [];

        colorCompareItems.forEach(item => {
            item.addEventListener('click', function() {
                const colorName = this.getAttribute('data-compare-color');
                const colorBg = this.getAttribute('data-bg');
                const colorDesc = this.getAttribute('data-desc');
                const hasBorder = this.getAttribute('data-border') === 'true';
                const indicator = this.querySelector('.selection-indicator');
                
                // Toggle selection
                if (this.classList.contains('selected')) {
                    // Deselect
                    this.classList.remove('selected');
                    indicator.style.opacity = '0';
                    selectedColors = selectedColors.filter(c => c.name !== colorName);
                } else {
                    // Select
                    this.classList.add('selected');
                    indicator.style.opacity = '1';
                    selectedColors.push({
                        name: colorName,
                        bg: colorBg,
                        desc: colorDesc,
                        border: hasBorder
                    });
                }
                
                // Update comparison display
                updateComparisonDisplay();
            });
        });

        function updateComparisonDisplay() {
            if (selectedColors.length < 2) {
                selectedComparison.style.display = 'none';
                comparisonDisplay.innerHTML = '';
                return;
            }
            
            selectedComparison.style.display = 'block';
            comparisonDisplay.innerHTML = '';
            
            selectedColors.forEach(color => {
                const compareCard = document.createElement('div');
                compareCard.style.cssText = `
                    flex: 1;
                    min-width: 150px;
                    max-width: 200px;
                    text-align: center;
                    padding: 20px;
                    background: white;
                    border-radius: 8px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                    transition: transform 0.3s ease;
                `;
                
                const borderStyle = color.border ? 'border: 2px solid #ddd;' : '';
                
                compareCard.innerHTML = `
                    <div style="width: 100px; height: 100px; background: ${color.bg}; ${borderStyle} border-radius: 50%; margin: 0 auto 15px;"></div>
                    <div style="font-weight: 700; font-size: 18px; margin-bottom: 8px;">${color.name}</div>
                    <div style="font-size: 14px; color: #666;">${color.desc}</div>
                `;
                
                compareCard.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-5px)';
                });
                
                compareCard.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
                
                comparisonDisplay.appendChild(compareCard);
            });
        }

        // Close modal when clicking overlay
        compareColorsModal.addEventListener('click', function(e) {
            if (e.target === compareColorsModal) {
                closeCompareColorsModal();
            }
        });

        // Tabs
        const tabs = document.querySelectorAll('.tab');
        const tabContents = document.querySelectorAll('.tab-content');

        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const targetTab = this.getAttribute('data-tab');
                
                // Remove active class from all tabs and contents
                tabs.forEach(t => t.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));
                
                // Add active class to clicked tab and corresponding content
                this.classList.add('active');
                document.getElementById(targetTab).classList.add('active');
            });
        });

        // Initialize memory storage for selected options
        window.selectedColor = 'Black';
        window.selectedSize = 'M';

        // Add to cart functionality (demo)
        document.querySelectorAll('.btn-primary').forEach(btn => {
            if (btn.textContent.includes('Add to Cart') || btn.textContent.includes('Add Bundle')) {
                btn.addEventListener('click', function() {
                    // Create a simple notification
                    const notification = document.createElement('div');
                    notification.style.cssText = `
                        position: fixed;
                        top: 20px;
                        right: 20px;
                        background: #28a745;
                        color: white;
                        padding: 16px 24px;
                        border-radius: 6px;
                        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                        z-index: 10000;
                        animation: slideIn 0.3s ease;
                    `;
                    notification.textContent = '✓ Added to cart!';
                    document.body.appendChild(notification);
                    
                    setTimeout(() => {
                        notification.style.animation = 'fadeOut 0.3s ease';
                        setTimeout(() => {
                            document.body.removeChild(notification);
                        }, 300);
                    }, 2000);
                });
            }
        });

        // Add CSS for notification animations
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes fadeOut {
                from {
                    opacity: 1;
                }
                to {
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    