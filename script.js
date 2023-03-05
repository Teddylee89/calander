const currentDate = document.querySelector(".current-date");
daysTag = document.querySelector(".days"),
prevNextIcon = document.querySelectorAll(".icons span");
;

//새로운 날짜, 월, 연도 가져오기
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear,currMonth, 1).getDay(); 
    lastDateofMonth = new Date(currYear,currMonth +1, 0).getDate(); 
    lastDayofMonth = new Date(currYear,curMonth,lastDateofMonth).getDay(); //
    lastDateofLastMonth = new Date(currYear,currMonth, 0).getDate(); //

    let liTag = "";

    for (let i = firstDayofMonth; i>0 ; i--) {
        liTag += '<li class="inactive"> ${lastDateofLastMonth -i + 1} </li>' ;   
    } 
 
    for (let i = 1; i<=lastDateofMonth; i++) {
        let isToday = i === date.getDate() && currMonth === new Date().getMonth()
                && currYear === new Date().getFullYear() ? "active" :"";
        liTag += '<li class="${isToday}">${i} </1i>' ;   
    }

    for (let i = lastDayofMonth; i<6; i++) {
        liTag += '<li class = "inactive"> ${i - lastDateofLastMonth +1}</li>';
    }

    currentDate.innerText =  '$months[currMonth] ${currYear}';
    daysTag.innerHTML = liTag;
}
renderCalendar();

// 클릭시 다음 월 / 이전 월 호출 (12월 넘어가면 새로운 연도와 월 호출)

prevNextIcon.forEach(icon => {
    icon.addEventListener("click",()=>{
        currMonth = icon.id ==="prev" ? currMonth-1 : currMonth + 1;

        if(currMonth<0 || currMonth > 11) {
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear();
            currMonth = date.getMonth(); 
        } else {
            date = new Date ();
        }
        
        renderCalendar();
    });
});