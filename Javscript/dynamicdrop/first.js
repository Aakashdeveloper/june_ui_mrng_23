const showCoupons = () => {
    document.getElementById('coupons').style.display = "block"
    document.getElementById('search').style.opacity = "0.7"
}

function closeCoupon(){
    document.getElementById('coupons').style.display = "none"
    document.getElementById('search').style.opacity = "1"
}