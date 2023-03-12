// var element = document.getElementById("password");
// myFunction = (icon) => icon.classList.toggle('fa-eye'),
//     element.type = (element.type == "password") ? "password" : "text"
function showPassword(id, el) {
    let x = document.getElementById(id)
    if (x.type == "password") {
        x.type = "text";
        el.classList.toggle("fa-eye")

        console.log("if " + x.type)
        console.log("if " + el.classList[2])
    } else {
        x.type = "password";
        el.classList.toggle("fa-eye")
        console.log("else " + x.type);
        console.log("else " + el.classList)
    }
}

var typingEffect = new Typed(".multiText", {/*multiTextt düzgün çalışmıyor.*/
    strings: ["İstanbul Çikolataları; İstanbul Çikolataları’nın Türkiye’nin kakao, çikolata ve şekerleme sektöründeki en büyük markalardan biri olma yolundaki ilk adım Beyoğlu’ndaki ilk mağazası ile atılır. 200’ü aşkın ürün çeşidi ile, madlen, spesiyal, draje gibi klasikleşmiş çeşitleri, özel gün çikolataları ve hediye sepetlerinin yanı sıra şirketin altı şehir içi mağazası, büyük metropol havaalanlarında beş mağazası ve küçük bir posta siparişi şubesi ile sektöre öncülük edilmesinde Beyoğlu’ndaki bu ilk mağaza çok önemli bir adımdır. Çünkü Beyoğlu’ndaki bu ilk mağaza tatlı severlerle İstanbul Çikolataları’nın buluştuğu ilk mekandır."],
    loop: false,
    typeSpeed: 60,
})
