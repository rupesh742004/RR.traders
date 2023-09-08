console.log(
    "script running..."
)

document.querySelector('.crosspng').style.display='none'
document.querySelector('.crosspng').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if( document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.hampng').style.display='inline'
        document.querySelector('.crosspng').style.display='none'
    }
    else{
        document.querySelector('.crosspng').style.display='inline'
        document.querySelector('.hampng').style.display='none'
    }
})