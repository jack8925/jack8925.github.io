// 選單展開與收起
document.querySelectorAll('.menu-title').forEach(item => {
    item.addEventListener('click', function() {
        let parent = this.parentElement;
        parent.classList.toggle('active');
    });
});

// 變更 iframe 內容
function changeIframe(url) {
    document.getElementById("content-frame").src = url;
}
