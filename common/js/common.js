$(document).ready(function() {
  // 페이지 이동
  $('button').on('click',(e)=>{
    let $this = $(e.currentTarget);
    let get_page = $this.attr('next-page');
    move_page(get_page);
  })
})

function move_page(target){
  window.location.href = target;
}
