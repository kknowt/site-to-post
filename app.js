(function () {
  const views = {
    welcome: document.getElementById('welcome'),
    categories: document.getElementById('categories'),
    gallery: document.getElementById('gallery')
  };

  const galleryTitle = document.getElementById('gallery-title');
  const galleryGrid = document.getElementById('gallery-grid');

  const videoModal = document.getElementById('video-modal');
  const videoPlayer = document.getElementById('video-player');
  const videoTitle = document.getElementById('video-title');
  const videoWrapper = videoPlayer.closest('.video-wrapper');

  const pdfModal = document.getElementById('pdf-modal');
  const pdfViewer = document.getElementById('pdf-viewer');
  const pdfTitle = document.getElementById('pdf-title');

  const imageModal = document.getElementById('image-modal');
  const imageViewer = document.getElementById('image-viewer');
  const imageTitle = document.getElementById('image-title');
  const imageWrapper = imageViewer.closest('.image-wrapper');

  let currentView = 'welcome';
  let currentCategory = null;

  function sizeMediaFrame(wrapper, mediaW, mediaH) {
    if (!mediaW || !mediaH) return;

    const ratio = mediaW / mediaH;
    const maxW = Math.min(window.innerWidth * 0.9, 920);
    const maxH = window.innerHeight * 0.78 - 72;

    let width;
    let height;

    if (ratio >= maxW / maxH) {
      width = maxW;
      height = width / ratio;
    } else {
      height = maxH;
      width = height * ratio;
    }

    wrapper.style.width = `${Math.round(width)}px`;
    wrapper.style.height = `${Math.round(height)}px`;
    wrapper.style.aspectRatio = `${mediaW} / ${mediaH}`;
  }

  function resetMediaFrame(wrapper) {
    wrapper.style.width = '';
    wrapper.style.height = '';
    wrapper.style.aspectRatio = '';
  }

  function navigateTo(viewName) {
    if (viewName === currentView) return;

    const from = views[currentView];
    const to = views[viewName];

    from.classList.add('view-exit');
    from.classList.remove('view-active');

    setTimeout(() => {
      from.classList.remove('view-exit');
      to.classList.add('view-active');
      currentView = viewName;
    }, 300);
  }

  function openCategory(categoryKey) {
    const category = PORTFOLIO[categoryKey];
    if (!category) return;

    currentCategory = categoryKey;
    galleryTitle.textContent = category.title;
    renderGallery(category, categoryKey);
    navigateTo('gallery');
  }

  function renderGallery(category, categoryKey) {
    galleryGrid.innerHTML = '';

    if (!category.items.length) {
      galleryGrid.innerHTML = `
        <div class="empty-state glass-card">
          <p>Пока нет работ в этой категории.<br>Добавьте файлы в папку assets/ и обновите js/data.js</p>
        </div>`;
      return;
    }

    category.items.forEach((item) => {
      const el = document.createElement('article');
      el.className = 'gallery-item';
      el.dataset.id = item.id;

      let thumbClass = '';
      let thumbContent = '';

      if (categoryKey === 'magazines') {
        thumbClass = 'pdf-thumb';
        thumbContent = '📄';
        if (item.thumb) {
          thumbContent = `<img src="${item.thumb}" alt="${item.title}">`;
        }
      } else if (categoryKey === 'videos') {
        thumbClass = 'video-thumb';
        thumbContent = '▶';
        if (item.thumb) {
          thumbContent = `<img src="${item.thumb}" alt="${item.title}">`;
        }
      } else {
        if (item.thumb) {
          thumbContent = `<img src="${item.thumb}" alt="${item.title}">`;
        } else {
          thumbContent = item.type === 'vector' ? '✦' : '🖼';
        }
      }

      el.innerHTML = `
        <div class="gallery-thumb ${thumbClass}">${thumbContent}</div>
        <div class="gallery-info">
          <h4>${item.title}</h4>
          <p>${item.description || ''}</p>
        </div>`;

      el.addEventListener('click', () => openItem(item, categoryKey));
      galleryGrid.appendChild(el);
    });
  }

  function openVideo(item) {
    videoTitle.textContent = item.title;
    resetMediaFrame(videoWrapper);
    videoPlayer.src = item.file;

    const applySize = () => {
      sizeMediaFrame(videoWrapper, videoPlayer.videoWidth, videoPlayer.videoHeight);
    };

    videoPlayer.onloadedmetadata = applySize;
    videoModal.showModal();
    videoPlayer.load();
    videoPlayer.play().catch(() => {});

    if (videoPlayer.readyState >= 1) applySize();
  }

  function openImage(item) {
    imageTitle.textContent = item.title;
    imageViewer.alt = item.title;
    resetMediaFrame(imageWrapper);

    const applySize = () => {
      sizeMediaFrame(imageWrapper, imageViewer.naturalWidth, imageViewer.naturalHeight);
    };

    imageViewer.onload = applySize;
    imageViewer.src = item.file;
    imageModal.showModal();

    if (imageViewer.complete && imageViewer.naturalWidth) applySize();
  }

  function openItem(item, categoryKey) {
    if (categoryKey === 'videos') {
      openVideo(item);
    } else if (categoryKey === 'magazines') {
      pdfTitle.textContent = item.title;
      pdfViewer.src = item.file;
      pdfModal.showModal();
    } else {
      const ext = item.file.split('.').pop().toLowerCase();
      if (ext === 'pdf') {
        pdfTitle.textContent = item.title;
        pdfViewer.src = item.file;
        pdfModal.showModal();
      } else {
        openImage(item);
      }
    }
  }

  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.close();

    if (modalId === 'video-modal') {
      videoPlayer.pause();
      videoPlayer.onloadedmetadata = null;
      videoPlayer.removeAttribute('src');
      videoPlayer.load();
      resetMediaFrame(videoWrapper);
    } else if (modalId === 'pdf-modal') {
      pdfViewer.removeAttribute('src');
    } else if (modalId === 'image-modal') {
      imageViewer.onload = null;
      imageViewer.removeAttribute('src');
      resetMediaFrame(imageWrapper);
    }
  }

  window.addEventListener('resize', () => {
    if (videoModal.open && videoPlayer.videoWidth) {
      sizeMediaFrame(videoWrapper, videoPlayer.videoWidth, videoPlayer.videoHeight);
    }
    if (imageModal.open && imageViewer.naturalWidth) {
      sizeMediaFrame(imageWrapper, imageViewer.naturalWidth, imageViewer.naturalHeight);
    }
  });

  document.querySelectorAll('[data-nav]').forEach((btn) => {
    btn.addEventListener('click', () => navigateTo(btn.dataset.nav));
  });

  document.querySelectorAll('.category-card').forEach((card) => {
    card.addEventListener('click', () => openCategory(card.dataset.category));
  });

  document.querySelectorAll('[data-close]').forEach((btn) => {
    btn.addEventListener('click', () => closeModal(btn.dataset.close));
  });

  [videoModal, pdfModal, imageModal].forEach((modal) => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal(modal.id);
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      [videoModal, pdfModal, imageModal].forEach((modal) => {
        if (modal.open) closeModal(modal.id);
      });
    }
  });
})();
