<input type="text" id="searchBox" placeholder="Search with regex...">
<ul id="resultList">
    <li>Windows 10 Pro</li>
    <li>Windows 11 Home</li>
    <li>Office 2021</li>
    <li>Visual Studio 2022</li>
</ul>

<script>
document.getElementById("searchBox").addEventListener("input", function() {
    let regexPattern = this.value;
    let regex = new RegExp(regexPattern, "i"); // Tạo regex, không phân biệt hoa thường
    let items = document.querySelectorAll("#resultList li");

    items.forEach(item => {
        item.style.display = regex.test(item.textContent) ? "block" : "none";
    });
});
</script>
