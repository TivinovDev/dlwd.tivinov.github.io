document.getElementById("searchBox").addEventListener("input", function() {
    let regexPattern = this.value;
    try {
        let regex = new RegExp(regexPattern, "i"); // Không phân biệt chữ hoa/thường
        document.querySelectorAll("#resultList li").forEach(item => {
            item.style.display = regex.test(item.textContent) ? "" : "none";
        });
    } catch (e) {
        console.error("Regex không hợp lệ:", e);
    }
});
