function admin_shortKey(e: any) {
    if (e.shiftKey && e.code === 'ArrowDown') {
        window.location.hash = ''
        window.location.reload()
    }
    if (e.shiftKey && e.code === 'ArrowUp') {
        window.location.hash = '#ovWiki'
    }
}

const add_shortKeys = () => {
    document.addEventListener('keydown', admin_shortKey, false)
}

export { admin_shortKey, add_shortKeys }
