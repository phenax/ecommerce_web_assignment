
import * as loader from './loading';

import { Canvas } from './Canvas';

const $overlay= $('.js-overlay');
const $authBox= $overlay.find('.js-auth');
const $optionBtn= $authBox.find('.js-option-btn');
const $authBtns= $authBox.find('.js-auth-type');
const $textInput= $authBox.find('.js-input');

const $modalToggleBtn= $('.js-modal-btn');


function optionBtnClickHandler() {
    const optionTarget= $(this).data('option');
    changeAuthType(optionTarget);
}

function changeAuthType(optionTarget) {
    $authBtns.removeClass('show-auth');

    const $target= $authBox.find(`.js-${optionTarget}`);
    $target.addClass('show-auth');

    $optionBtn.removeClass('selected');
    $authBox.find(`[data-option="${optionTarget}"]`).addClass('selected');

    $authBox.css('height', ($target.height() + 80)+'px');
}


function closeOverlay() {
    $overlay.removeClass('overlay__visible');
}


function showOverlay() {
    const currentTarget= $(this).data('modal');
    changeAuthType(currentTarget);
    $overlay.addClass('overlay__visible');
}


function inputOnFocusHandler() {
    $(this).parent().addClass('on-focus');
}

function inputOnBlurHandler() {
    const $this= $(this);

    if($this.val() == "" || $this.val() == " ")
        $this.parent().removeClass('on-focus');
}


$(document).ready(()=> {
    const canvas= new Canvas({
        canvasSelector: '.js-canvas',
    });

    canvas.handlers.mousemove= (e)=> {

    };

    $optionBtn.on('click', optionBtnClickHandler);
    $overlay.find('.js-close-overlay').on('click', closeOverlay);
    $modalToggleBtn.on('click', showOverlay);
    $textInput.on('focus', inputOnFocusHandler);
    $textInput.on('blur', inputOnBlurHandler);

    loader.stopLoading();
});
