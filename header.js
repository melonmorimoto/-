document.addEventListener("DOMContentLoaded", function() {
    const headerHTML = `
        <header>
            <div class="logo">
                <img src="logo.png" alt="コンギョ教会のロゴ" class="logo-img">
                <span>コンギョ教会〜金と共に歩む〜</span>
            </div>
            <nav>
                <ul class="menu">
                    <li><a href="index.html">ホーム</a></li>
                    <li><a href="about.html">教会について</a>
                        <ul class="submenu">
                            <li><a href="history.html">私たちの歴史</a></li>
                            <li><a href="vision.html">ビジョン</a></li>
                        </ul>
                    </li>
                    <li><a href="schedule.html">スケジュール</a></li>
                    <li><a href="contact.html">お問い合わせ</a></li>
                </ul>
            </nav>
        </header>
    `;
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
});
