(() => {
  "use strict";
  const config = window.U2_CONTACT || {};
  const email = typeof config.email === "string" && /^[^\s@?&#]+@[^\s@?&#]+\.[^\s@?&#]+$/.test(config.email) && !/\.(example|invalid|test|localhost)$/i.test(config.email) ? config.email : "";
  const telegram = typeof config.telegram === "string" && /^https:\/\/t\.me\/[a-zA-Z0-9_]{5,32}\/?$/.test(config.telegram) ? config.telegram : "";
  const channels = document.getElementById("contact-channels");
  for (const channel of [{href: email ? `mailto:${email}` : "", text: email}, {href: telegram, text: "Написать в Telegram"}]) {
    if (!channel.href) continue;
    const link = document.createElement("a");
    link.className = "contact-channel";
    link.href = channel.href;
    link.textContent = channel.text;
    if (channel.href.startsWith("https:")) { link.target = "_blank"; link.rel = "noopener noreferrer"; }
    channels.append(link);
  }
  if (!email && !telegram && typeof config.exampleEmail === "string") {
    const example = document.createElement("span");
    example.className = "contact-channel";
    example.textContent = config.exampleEmail;
    channels.append(example);
  }
  const menu = document.querySelector(".menu-toggle");
  const navigation = document.getElementById("navigation");
  function closeMenu() { menu.setAttribute("aria-expanded", "false"); navigation.classList.remove("is-open"); }
  menu.addEventListener("click", () => { const open = menu.getAttribute("aria-expanded") !== "true"; menu.setAttribute("aria-expanded", String(open)); navigation.classList.toggle("is-open", open); });
  navigation.addEventListener("click", (event) => { if (event.target.closest("a")) closeMenu(); });
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeMenu(); });
  window.matchMedia("(min-width: 801px)").addEventListener("change", closeMenu);
  document.getElementById("year").textContent = String(new Date().getFullYear());

  const dialog = document.getElementById("brief-dialog");
  const openBrief = document.getElementById("open-brief");
  const form = document.getElementById("brief-form");
  const status = document.getElementById("brief-status");
  if (email) {
    openBrief.textContent = "Написать о задаче";
    document.getElementById("brief-submit").textContent = "Открыть письмо";
    document.getElementById("brief-description").textContent = "Кратко опишите задачу. Откроем готовое письмо в вашей почтовой программе.";
    document.getElementById("form-note").textContent = "Сайт не сохраняет данные. Письмо отправляется вами из почтовой программы.";
  }
  function closeDialog() { dialog.close(); }
  openBrief.addEventListener("click", () => { status.textContent = ""; dialog.showModal(); document.body.classList.add("dialog-open"); });
  document.querySelector(".dialog-close").addEventListener("click", closeDialog);
  dialog.addEventListener("close", () => { document.body.classList.remove("dialog-open"); openBrief.focus(); });
  dialog.addEventListener("click", (event) => { const bounds = dialog.getBoundingClientRect(); if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) closeDialog(); });
  function getBrief() {
    const data = new FormData(form);
    return `Обращение в Ю2 Консалтинг\n\nКомпания: ${String(data.get("company")).trim()}\nНаправление: ${data.get("topic")}\n\nЗадача:\n${String(data.get("task")).trim()}\n`;
  }
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const brief = getBrief();
    if (email) {
      window.location.href = `mailto:${email}?subject=${encodeURIComponent("Обсуждение задачи — Ю2 Консалтинг")}&body=${encodeURIComponent(brief)}`;
      status.textContent = "Письмо подготовлено. Отправьте его из вашей почтовой программы. Если она не открылась, скопируйте текст и используйте адрес на сайте.";
      return;
    }
    const url = URL.createObjectURL(new Blob(["\uFEFF", brief], {type: "text/plain;charset=utf-8"}));
    const download = document.createElement("a");
    download.href = url; download.download = "Обращение-Ю2-Консалтинг.txt";
    document.body.append(download); download.click(); download.remove();
    setTimeout(() => URL.revokeObjectURL(url), 5000);
    status.textContent = "Файл подготовлен для скачивания. Обращение не отправлено.";
  });
})();
