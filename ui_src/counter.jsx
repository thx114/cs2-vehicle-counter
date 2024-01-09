const loadScript = async (url, err, claer = false) => {
    if (claer) { document.head.removeChild(document.getElementById('I18nCN_JS')) }
    let scriptElement = document.createElement('script');
    scriptElement.src = url || "https://cdn.jsdelivr.net/gh/thx114/I18nCN_update_files@latest/I18nCN.js";
    scriptElement.id = 'I18nCN_JS';
    scriptElement.onerror = err
    document.head.appendChild(scriptElement);
}

const clearError = async (errText) => {
    function delay(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }
    function click(em) {
        const allProps = Object.keys(em);
        for (const prop of allProps) {
            if (prop.startsWith('__reactProps')) {
                try { em[prop].onClick() } catch { }
            }
        }
    }
    let clearTime = 0
    while (clearTime < 20) {
        await delay(100)
        try {
            let error = document.querySelectorAll('.panel_YqS.error-dialog_iaV')[0]
            if (error && error.innerHTML.includes(errText)) {
                Array.from(document.querySelectorAll('.button_HeP.button_gJo')).filter(item => (item.innerHTML.includes('继续'))).forEach(e => { click(e) })
            }
        } catch { }
        clearTime +=1
    }
}
if (document.querySelectorAll('#I18nCN_JS').length === 0) {
    loadScript("https://cdn.jsdelivr.net/gh/thx114/I18nCN_update_files@latest/I18nCN.js",
        err => {
            clearError('jsdelivr.net:443/​gh/​thx114/​I18nCN_update_files@latest/​I18nCN.js')
            loadScript("https://fastly.jsdelivr.net/gh/thx114/I18nCN_update_files@latest/I18nCN.js",
                err => {
                    loadScript("https://cdn.jsdelivr.net/gh/thx114/I18nCN_update_files@latest/I18nCN.js",
                        err => {
                            loadScript("https://fastly.jsdelivr.net/gh/thx114/I18nCN_update_files@latest/I18nCN.js",
                                err => {
                                    console.error('在重试了3次后，汉化仍然未能加载，可以点击继续以继续游戏')
                                }, true); return true
                        }, true); return true
                }, true); return true
        }, false)
}


