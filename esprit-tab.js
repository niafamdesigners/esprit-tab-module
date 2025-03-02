document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".esprit-tab-container").forEach((container) => {
    let tabs = container.querySelectorAll(".esprit-tab");
    let contents = container.querySelectorAll(".esprit-tab-content");

    tabs.forEach((tab) => {
      tab.addEventListener("click", function () {
        let tabId = this.getAttribute("data-tab");

        // حذف کلاس active از تمام تب‌ها
        tabs.forEach((t) => t.classList.remove("active"));
        this.classList.add("active");

        // مخفی کردن تمام محتواها و نمایش محتوای مرتبط
        contents.forEach((content) => {
          content.classList.toggle("active", content.getAttribute("data-content") === tabId);
        });
      });
    });
  });

  const tabList = document.querySelector(".esprit-tab-list");
  const tabs = document.querySelectorAll(".esprit-tab");

  if (tabList && tabs.length > 0) {
    let isDragging = false;
    let startX;
    let scrollLeft;
    let autoScrollInterval;

    tabList.style.cursor = "grab";

    // اسکرول با چرخ ماوس
    tabList.addEventListener("wheel", function (event) {
      event.preventDefault();
      tabList.scrollLeft += event.deltaY * 2;
    });

    // رویدادهای درگ موس
    tabList.addEventListener("mousedown", function (event) {
      isDragging = true;
      tabList.style.cursor = "grabbing";
      startX = event.pageX - tabList.offsetLeft;
      scrollLeft = tabList.scrollLeft;
    });

    tabList.addEventListener("mouseleave", function () {
      isDragging = false;
      tabList.style.cursor = "grab";
      clearInterval(autoScrollInterval);
    });

    tabList.addEventListener("mouseup", function () {
      isDragging = false;
      tabList.style.cursor = "grab";
    });

    tabList.addEventListener("mousemove", function (event) {
      if (!isDragging) return;
      event.preventDefault();
      const x = event.pageX - tabList.offsetLeft;
      const walk = (x - startX) * 2;
      tabList.scrollLeft = scrollLeft - walk;
    });

    // حرکت تب انتخابی به مرکز صفحه هنگام کلیک
    tabs.forEach((tab) => {
      tab.addEventListener("click", function () {
        const tabRect = tab.getBoundingClientRect();
        const listRect = tabList.getBoundingClientRect();

        // محاسبه مقدار اسکرول به گونه‌ای که تب دقیقاً وسط قرار بگیرد
        const scrollAmount = tabList.scrollLeft + (tabRect.left - listRect.left) - (listRect.width / 2 - tabRect.width / 2); // تنظیم برای وسط‌چین شدن

        tabList.scrollTo({
          left: scrollAmount,
          behavior: "smooth",
        });
      });
    });

    // اسکرول خودکار هنگام نزدیک شدن موس به لبه‌های تب لیست
    tabList.addEventListener("mousemove", function (event) {
      const rect = tabList.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;

      const scrollSpeed = 3;
      const threshold = 24;

      clearInterval(autoScrollInterval);

      if (mouseX < threshold) {
        autoScrollInterval = setInterval(() => {
          tabList.scrollLeft -= scrollSpeed;
        }, 10);
      } else if (mouseX > rect.width - threshold) {
        autoScrollInterval = setInterval(() => {
          tabList.scrollLeft += scrollSpeed;
        }, 10);
      }
    });

    // بهبود افکت اسکرول هنگام ورود موس به لیست تب‌ها
    tabList.addEventListener("mouseenter", function () {
      tabList.scrollBy({ left: 30, behavior: "smooth" });

      setTimeout(() => {
        tabList.scrollBy({ left: -30, behavior: "smooth" });
      }, 400); // زمان انیمیشن را کمی افزایش دادیم تا نرم‌تر شود
    });
  }
});
