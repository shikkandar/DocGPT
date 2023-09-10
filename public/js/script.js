function showAndCloseSideBar() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('showSideBar');
}
const onEmailClick = document.getElementById('on_email_click');
function emailClick() {
    onEmailClick.classList.toggle('remove-on-email-click');
}
