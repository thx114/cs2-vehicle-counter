if (document.querySelectorAll('#I18nCN_JS').length === 0) {
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/gh/thx114/I18nCN_update_files@latest/I18nCN.js"
    script.id = 'I18nCN_JS'
    document.head.appendChild(script);
}
