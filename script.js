let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");

let clickCount = 0;  // 记录点击 No 的次数

// No 按钮的文字变化
const noTexts = [
    "不是牢底？你认真的吗…", 
    "要不再想想臭贝贝？", 
    "我讨厌泥，不许选这个！ ", 
    "我会很伤心的…", 
    "补药！不可以！"
];

// No 按钮点击事件
noButton.addEventListener("click", function() {
    clickCount++;

    // 让 Yes 变大，每次放大 2 倍
    let yesSize = 1 + (clickCount * 1.2);
    yesButton.style.transform = `scale(${yesSize})`;

    // 挤压 No 按钮，每次右移 100px
    let noOffset = clickCount * 50;
    noButton.style.transform = `translateX(${noOffset}px)`;

    // **新增：让图片和文字往上移动**
    let moveUp = clickCount * 25; // 每次上移 20px
    mainImage.style.transform = `translateY(-${moveUp}px)`;
    questionText.style.transform = `translateY(-${moveUp}px)`;

    // No 文案变化（前 5 次变化）
    if (clickCount <= 5) {
        noButton.innerText = noTexts[clickCount - 1];
    }

    // 图片变化（前 5 次变化）
    if (clickCount === 1) mainImage.src = "1.jpeg"; // 震惊
    if (clickCount === 2) mainImage.src = "2.jpeg";   // 思考
    if (clickCount === 3) mainImage.src = "4.jpeg";   // 生气
    if (clickCount === 4) mainImage.src = "3.jpeg";  // 哭
    if (clickCount >= 5) mainImage.src = "3.jpeg";  // 之后一直是哭
});


yesButton.addEventListener("click", function() {
    document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text">!!!哇咔咔，窝就知道，窝喜欢你!! ( >᎑<)♡︎ᐝ</h1>
            <img src="1.jpeg" alt="爱你" class="yes-image">
        </div>
    `;

    document.body.style.overflow = "hidden";
});