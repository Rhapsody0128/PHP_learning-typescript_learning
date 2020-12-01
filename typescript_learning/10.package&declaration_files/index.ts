// declare const $:any ! 正常所有定義檔會額外放而不是放在主檔
// 有 declare 跟沒 declare 的差別在於，儘管 declare 的變數沒有指派任何東西進去，TypeScript 依然認定為該會由某個開發者不需要知道的地方提供出來，而這裡指的某個地方就可能存在於外來套件模組等等。

import $ from 'jquery'

$(document).ready(function(){
  const $btn = $('#main-btn');
  const $count = $('#count');
  let count = 0;

  $btn.click(()=>{
    console.log('object');
    count++
    $count.text(count);
  })
})