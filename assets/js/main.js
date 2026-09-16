document.getElementById("year").textContent = new Date().getFullYear();

const header = document.getElementById("siteHeader");
const onScroll = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 40);
};
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");

navToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(contactForm);
  const lines = [
    `お名前: ${data.get("name")}`,
    `会社名・店舗名: ${data.get("company") || "-"}`,
    `電話番号: ${data.get("tel")}`,
    `メールアドレス: ${data.get("email")}`,
    "",
    "お問い合わせ内容:",
    data.get("message"),
  ];
  const subject = encodeURIComponent("【HPより】お問い合わせ");
  const body = encodeURIComponent(lines.join("\n"));
  // TODO: replace with the business's real inbox address
  window.location.href = `mailto:REPLACE-WITH-YOUR-EMAIL@example.com?subject=${subject}&body=${body}`;
});
