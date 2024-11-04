const addScrollspy = (
  defalutClass = "scroll nav-link",
  linksContainer = ".scrollSpyLinks",
  activeClass = "active"
) => {
  var section = document.querySelectorAll(".scrollSpySection");
  // console.log(section);

  var sections = {};
  var i = 0;

  Array.prototype.forEach.call(section, function (e) {
    sections[e.id] = e.offsetTop - 40;
  });
  var scrollPosition =
    document.documentElement.scrollTop || document.body.scrollTop;

  for (i in sections) {
    if (sections[i] <= scrollPosition) {
      document
        .querySelector(linksContainer + ` .${activeClass}`)
        ?.setAttribute("class", "scroll nav-link");
      const navLink = document.querySelector(
        linksContainer + " a[href*=" + i + "]"
      );

      navLink?.setAttribute("class", `${`scroll nav-link`} ${activeClass}`);
    }
  }
};
export default addScrollspy;
