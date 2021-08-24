import "./app4.css";
import $ from "jquery";

const $ellipse = $("#app4 .ellipse");

$ellipse
  .on("mouseenter", () => {
    $ellipse.addClass("active");
  })
  .on("mouseleave", () => {
    $ellipse.removeClass("active");
  });
