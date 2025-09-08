// Model page interactive functionality

let currentModel = null;
let selectedVariant = 0;
let selectedImageIndex = 0;
let selectedColorIndex = 0;

function initModelPage(modelId) {
    currentModel = sideBySideModels[modelId];
    if (!currentModel) {
        console.error('Model not found:', modelId);
        return;
    }
    
    selectedVariant = 0;
    selectedImageIndex = 0;
    selectedColorIndex = 0;
    
    populateModelData();
    setupEventListeners();
    updateDisplay();
}

function populateModelData() {
    // Set basic model info
    document.getElementById('model-name').textContent = currentModel.name;
    document.getElementById('model-price').textContent = currentModel.price;
    
    // Populate variants
    const variantsContainer = document.getElementById('variants-container');
    variantsContainer.innerHTML = '';
    currentModel.variants.forEach((variant, index) => {
        const variantButton = document.createElement('button');
        variantButton.className = `variant-btn p-3 text-left border-2 rounded-lg transition-colors ${
            index === selectedVariant 
                ? 'border-red-500 bg-red-50' 
                : 'border-gray-200 hover:border-gray-300 bg-white'
        }`;
        variantButton.innerHTML = `
            <div class="font-medium text-gray-900">${variant.name}</div>
            <div class="text-sm text-gray-500 mt-1">${variant.description}</div>
        `;
        variantButton.addEventListener('click', () => selectVariant(index));
        variantsContainer.appendChild(variantButton);
    });
    
    // Populate colors
    const colorsContainer = document.getElementById('colors-container');
    colorsContainer.innerHTML = '';
    currentModel.colors.forEach((color, index) => {
        const colorButton = document.createElement('button');
        colorButton.className = `color-btn w-8 h-8 rounded-full border-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors ${
            index === selectedColorIndex ? 'border-red-500' : 'border-gray-300'
        }`;
        colorButton.style.backgroundColor = color.value;
        colorButton.title = color.name;
        colorButton.innerHTML = `
            <span class="sr-only">${color.name}</span>
            ${index === selectedColorIndex ? '<div class="w-full h-full rounded-full border-2 border-white"></div>' : ''}
        `;
        colorButton.addEventListener('click', () => selectColor(index));
        colorsContainer.appendChild(colorButton);
    });
    
    // Populate features
    const featuresList = document.getElementById('features-list');
    featuresList.innerHTML = '';
    currentModel.features.forEach(feature => {
        const featureItem = document.createElement('li');
        featureItem.className = 'flex items-start';
        featureItem.innerHTML = `
            <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span class="text-gray-700">${feature}</span>
        `;
        featuresList.appendChild(featureItem);
    });
    
    // Populate specifications
    const specsTable = document.getElementById('specs-table');
    specsTable.innerHTML = '';
    Object.entries(currentModel.specs).forEach(([key, value]) => {
        const row = document.createElement('tr');
        row.className = 'hover:bg-gray-50';
        row.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${key}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${value}</td>
        `;
        specsTable.appendChild(row);
    });
}

function setupEventListeners() {
    // No additional setup needed as event listeners are added during population
}

function updateDisplay() {
    const currentVariantData = currentModel.variants[selectedVariant];
    const currentColor = currentModel.colors[selectedColorIndex];
    
    // Update variant name display
    document.getElementById('variant-name').textContent = `(${currentVariantData.name})`;
    
    // Update selected color name
    document.getElementById('selected-color-name').textContent = currentColor.name;
    
    // Update CTA section
    document.getElementById('cta-model-name').textContent = currentModel.name;
    document.getElementById('cta-variant-name').textContent = currentVariantData.name;
    document.getElementById('cta-variant-name-2').textContent = currentVariantData.name;
    document.getElementById('cta-color-name').textContent = currentColor.name;
    
    // Update main image
    const currentImage = selectedImageIndex < currentModel.images.length 
        ? currentModel.images[selectedImageIndex] 
        : currentVariantData.image;
    document.getElementById('main-image').src = currentImage;
    document.getElementById('main-image').alt = `${currentModel.name} - ${currentVariantData.name}`;
    
    // Update thumbnail gallery
    const thumbnailGallery = document.getElementById('thumbnail-gallery');
    thumbnailGallery.innerHTML = '';
    
    // Add model images as thumbnails
    currentModel.images.forEach((image, index) => {
        const thumbnailButton = document.createElement('button');
        thumbnailButton.className = `relative h-24 bg-gray-100 rounded-md overflow-hidden border-2 transition-colors ${
            selectedImageIndex === index ? 'border-red-500' : 'border-gray-200 hover:border-gray-300'
        }`;
        thumbnailButton.innerHTML = `
            <img src="${image}" alt="${currentModel.name} view ${index + 1}" class="w-full h-full object-cover">
        `;
        thumbnailButton.addEventListener('click', () => selectImage(index));
        thumbnailGallery.appendChild(thumbnailButton);
    });
    
    // Add variant image as additional thumbnail
    const variantThumbnailButton = document.createElement('button');
    variantThumbnailButton.className = `relative h-24 bg-gray-100 rounded-md overflow-hidden border-2 transition-colors ${
        selectedImageIndex === currentModel.images.length ? 'border-red-500' : 'border-gray-200 hover:border-gray-300'
    }`;
    variantThumbnailButton.innerHTML = `
        <img src="${currentVariantData.image}" alt="${currentModel.name} - ${currentVariantData.name}" class="w-full h-full object-cover">
    `;
    variantThumbnailButton.addEventListener('click', () => selectImage(currentModel.images.length));
    thumbnailGallery.appendChild(variantThumbnailButton);
    
    // Update variant buttons styling
    const variantButtons = document.querySelectorAll('.variant-btn');
    variantButtons.forEach((btn, index) => {
        btn.className = `variant-btn p-3 text-left border-2 rounded-lg transition-colors ${
            index === selectedVariant 
                ? 'border-red-500 bg-red-50' 
                : 'border-gray-200 hover:border-gray-300 bg-white'
        }`;
    });
    
    // Update color buttons styling
    const colorButtons = document.querySelectorAll('.color-btn');
    colorButtons.forEach((btn, index) => {
        btn.className = `color-btn w-8 h-8 rounded-full border-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors ${
            index === selectedColorIndex ? 'border-red-500' : 'border-gray-300'
        }`;
        btn.innerHTML = `
            <span class="sr-only">${currentModel.colors[index].name}</span>
            ${index === selectedColorIndex ? '<div class="w-full h-full rounded-full border-2 border-white"></div>' : ''}
        `;
    });
}

function selectVariant(index) {
    selectedVariant = index;
    selectedImageIndex = currentModel.images.length; // Show variant image when selecting variant
    updateDisplay();
}

function selectImage(index) {
    selectedImageIndex = index;
    updateDisplay();
}

function selectColor(index) {
    selectedColorIndex = index;
    updateDisplay();
}