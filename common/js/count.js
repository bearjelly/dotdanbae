const counter = ($counter, max) => {
  let now = max;

  const handle = setInterval(() => {
    $counter.innerHTML = add_comma(Math.ceil(max - now));
  
    // 목표수치에 도달하면 정지
    if (now < 1) {
      clearInterval(handle);
    } else {
      
    }
    
    // 증가되는 값이 계속하여 작아짐
    const step = now / 10;
    
    // 값을 적용시키면서 다음 차례에 영향을 끼침
    now -= step;
  }, 50);
}

window.onload = () => {
  // 카운트를 적용시킬 요소
  const $counter = document.querySelector(".count__number-text");
  
  // 목표 수치
  const max = 17249;
  
  setTimeout(() => counter($counter, max), 2000);
}

function add_comma(num) {
return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}