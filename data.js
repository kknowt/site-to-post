/**
 * Данные портфолио — файлы из Google Drive (папка «Мої работи»)
 */
const PORTFOLIO = {
  magazines: {
    title: 'Журналы',
    items: [
      { id: 'mag-hort', title: 'Текст рыба', description: 'PDF-публикация', file: 'assets/magazines/hort.pdf', thumb: null },
      { id: 'mag-r', title: 'Текст рыба', description: 'PDF-публикация', file: 'assets/magazines/r.pdf', thumb: null },
      { id: 'mag-prezentachiya-al', title: 'Ювелирка', description: 'журнал', file: 'assets/magazines/prezentachiya-al.pdf', thumb: null },
      { id: 'mag-veloria', title: 'Veloria косметкиа', description: 'бренд', file: 'assets/magazines/veloria-prezentation.pdf', thumb: null }
    ]
  },

  videos: {
    title: 'Видео',
    items: [
      { id: 'vid-render', title: 'Ретро', description: 'Видеоролик', file: 'assets/videos/render.mp4', thumb: null },
      { id: 'vid-earth', title: 'Earth', description: 'Видеоролик', file: 'assets/videos/earth.mp4', thumb: null },
      { id: 'vid-bycle', title: 'Bycle', description: 'Видеоролик', file: 'assets/videos/bycle.mp4', thumb: null },
      { id: 'vid-avia', title: 'Авиа', description: 'Видеоролик', file: 'assets/videos/avia-not-fully.mp4', thumb: null }
    ]
  },

  works: {
    title: 'Векторные и растровые работы',
    items: [
      { id: 'work-arina-kursovaya-zakaz', title: 'Arina Kursovaya Zakaz', description: '\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430', file: 'assets/works/arina-kursovaya-zakaz.pdf', thumb: null, type: 'vector' },
      { id: 'work-boyko-kirill-compressed', title: 'Лира шоколад', description: '\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430', file: 'assets/works/boyko-kirill-compressed.pdf', thumb: null, type: 'vector' },
      { id: 'work-brosh', title: 'Brosh', description: '\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430', file: 'assets/works/brosh.pdf', thumb: null, type: 'vector' },
      { id: 'work-fabryka-logotyp', title: 'Рандом лого', description: '\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430', file: 'assets/works/fabryka-logotyp.pdf', thumb: null, type: 'vector' },
      { id: 'work-fashion', title: 'Fashion ребрендинг', description: '\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430', file: 'assets/works/fashion.pdf', thumb: null, type: 'vector' },
      { id: 'work-fastway', title: 'Fastway лого', description: '\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430', file: 'assets/works/fastway.pdf', thumb: null, type: 'vector' },
      { id: 'work-insomnia-kreativ', title: 'Инсомния', description: '\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430', file: 'assets/works/insomnia-kreativ.pdf', thumb: null, type: 'vector' },
      { id: 'work-izometriya', title: 'Изометрия', description: '\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430', file: 'assets/works/izometriya.pdf', thumb: null, type: 'vector' },
      { id: 'work-kontrastna-metodyka', title: 'Градиент', description: '\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430', file: 'assets/works/kontrastna-metodyka.pdf', thumb: null, type: 'vector' },
      { id: 'work-lighthouse', title: 'Маяк', description: '\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430', file: 'assets/works/lighthouse.jpg', thumb: 'assets/works/lighthouse.jpg', type: 'raster' },
      { id: 'work-perekhid-grafika', title: 'Градиент (поломанный)', description: '\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430', file: 'assets/works/perekhid-grafika.pdf', thumb: null, type: 'vector' },
      { id: 'work-pixel-art', title: 'Pixel Art', description: '\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430', file: 'assets/works/pixel-art.pdf', thumb: null, type: 'vector' },
      { id: 'work-polozhennya-komunikatsiya', title: 'Бусик тцк', description: '\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430', file: 'assets/works/polozhennya-komunikatsiya.jpg', thumb: 'assets/works/polozhennya-komunikatsiya.jpg', type: 'raster' },
      { id: 'work-pomusic', title: 'Popmusic', description: '\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430', file: 'assets/works/pomusic.pdf', thumb: null, type: 'vector' },
      { id: 'work-portret-1', title: 'Пустыня 1', description: '\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430', file: 'assets/works/portret-1.pdf', thumb: null, type: 'vector' },
      { id: 'work-portret-2', title: 'Пустыня 2', description: '\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430', file: 'assets/works/portret-2.pdf', thumb: null, type: 'vector' },
      { id: 'work-skyjoy-poster', title: 'Skyjoy заготовки', description: '\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430', file: 'assets/works/skyjoy-poster.pdf', thumb: null, type: 'vector' },
      { id: 'work-telefon', title: 'Календарь', description: '\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430', file: 'assets/works/telefon.pdf', thumb: null, type: 'vector' },
      { id: 'work-work-1-rh-ugu', title: 'Мокап roses', description: '\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430', file: 'assets/works/work-1_Rh_uGu.jpg', thumb: 'assets/works/work-1_Rh_uGu.jpg', type: 'raster' },
      { id: 'work-work-1c8k0zyx', title: 'Мокап sandalwood2', description: '\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430', file: 'assets/works/work-1C8K0zYx.jpg', thumb: 'assets/works/work-1C8K0zYx.jpg', type: 'raster' },
      { id: 'work-work-1esqzhmj', title: 'Aurabloom', description: '\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430', file: 'assets/works/work-1esQZHMJ.pdf', thumb: null, type: 'vector' },
      { id: 'work-work-1fsdiscf', title: 'Постер розы', description: '\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430', file: 'assets/works/work-1FsdIscf.jpg', thumb: 'assets/works/work-1FsdIscf.jpg', type: 'raster' },
      { id: 'work-work-1gd3vaen', title: 'Мокап sandalwood', description: '\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430', file: 'assets/works/work-1gD3vAEn.jpg', thumb: 'assets/works/work-1gD3vAEn.jpg', type: 'raster' },
      { id: 'work-work-1k-yuseb', title: 'Ретушь девушки', description: '\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430', file: 'assets/works/work-1k_yusEb.jpg', thumb: 'assets/works/work-1k_yusEb.jpg', type: 'raster' },
      { id: 'work-work-1um13b4y', title: 'Ручной мокап', description: '\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430', file: 'assets/works/work-1um13B4Y.jpg', thumb: 'assets/works/work-1um13B4Y.jpg', type: 'raster' },
      { id: 'work-work-1upztodc', title: 'Постер pineapple', description: '\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430', file: 'assets/works/work-1uPZtoDc.jpg', thumb: 'assets/works/work-1uPZtoDc.jpg', type: 'raster' },
      { id: 'work-work-1utze3fv', title: 'Постер sandalwood', description: '\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430', file: 'assets/works/work-1utZe3fv.jpg', thumb: 'assets/works/work-1utZe3fv.jpg', type: 'raster' },
      { id: 'work-work-1v0xvap9', title: 'Мокап pina colada', description: '\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430', file: 'assets/works/work-1v0xvAP9.jpg', thumb: 'assets/works/work-1v0xvAP9.jpg', type: 'raster' },
    ]
  }
};