function checkBooking() {
    // 1. نجلب الاسم من الصندوق
    var dogName = document.getElementById("dogName").value;
    // 2. نجلب المكان الذي ستظهر فيه الرسالة 
    var resultArea = document.getElementById("resultMessage");

    if (dogName == "") {
        // إذا كان الصندوق فارغاً
        resultArea.innerHTML = "من فضلك اكتب اسم الكلب أولاً!";
        resultArea.style.color = "red";
    } else {
        // إذا كتب الاسم بنجاح
        resultArea.innerHTML = "تم إرسال طلبك بنجاح للكلب: " + dogName;
        resultArea.style.color = "green";
        
        // مسح النص من الصندوق بعد الإرسال 
        document.getElementById("dogName").value = "";
    }
}