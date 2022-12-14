let result_array = [];
let page_index_int;

$(document).ready(function() {
  // const get_data = sessionStorage.getItem('realData');
  // console.log("🚀get_data", get_data);

  // if(!get_data.length){
  //   return
  // }else {
  //   let make_arr = get_data.slice(1,-1);
  //   make_arr.split("");
  //   console.log("🚀make_arr", make_arr)
  //   result_array = [...make_arr];
  //   console.log("🚀result_array", result_array)
  // }

  let page_index = $('.pages').attr('class').split(' ').pop();
  let page_index_split = page_index.split("-")[1];
  page_index_int = parseInt(page_index_split);
  console.log("🚀 page_index_int", page_index_int)
  // alert(page_index_int);

  $('.btn-submit').on('click',(e)=>{
    get_value(e,page_index_int);
  });
  ;
})

async function get_value(e,page_index_int){
  let $this = $(e.currentTarget);
  let get_value = $this.attr('data-value');
  result_array[page_index_int -1] = get_value
  // console.log(result_array);
  sessionStorage.setItem('realData',JSON.stringify(result_array));
  move_page(`page${page_index_int+1}.html`)
}
