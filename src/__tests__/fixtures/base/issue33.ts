declare const styled: any;
declare const $: any;
declare const jQuery: any;
declare const _: any;

declare const Button: any;

const Button1 = Button.extend` color: red `;

const Button2 = $.extend` color: red `;
const Button3 = jQuery.extend` color: red `;
const Button4 = _.extend` color: red `;
