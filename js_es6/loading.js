
const $spinner= $('.js-loading');

export function startLoading() {
    $spinner.removeClass('hidden');
}

export function stopLoading() {
    $spinner.addClass('hidden');
}
