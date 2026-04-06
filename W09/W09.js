function toggleNav() {
  const menuIcon = document.getElementById("menu-toggle");
  const sidebar = document.getElementById("sidebar");
  const page = document.querySelector(".page");

  menuIcon.classList.toggle("open");
  sidebar.classList.toggle("open");
  page.classList.toggle("nav-open");
}
