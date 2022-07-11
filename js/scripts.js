jQuery(function () {
  if ($(window).width() <= "600") {
    new jBox("Modal", {
      attach: "#modal-1",
      title: "",
      overlay: false,
      maxWidth: 665,
      closeButton: "title",
      adjustDistance: { top: 30, right: 45, bottom: 30, left: 30 },
      content: $("#grab-1"),
    });

    new jBox("Modal", {
      attach: "#modal-2",
      title: "",
      overlay: false,
      maxWidth: 665,
      closeButton: "title",
      adjustDistance: { top: 30, right: 45, bottom: 30, left: 30 },
      content: $("#grab-2"),
    });

    new jBox("Modal", {
      attach: "#modal-3",
      title: "",
      overlay: false,
      maxWidth: 665,
      closeButton: "title",
      adjustDistance: { top: 30, right: 45, bottom: 30, left: 30 },
      content: $("#grab-3"),
    });

    new jBox("Modal", {
      attach: "#modal-4",
      title: "",
      overlay: false,
      maxWidth: 665,
      closeButton: "title",
      adjustDistance: { top: 30, right: 45, bottom: 30, left: 30 },
      content: $("#grab-4"),
    });

    new jBox("Modal", {
      attach: "#modal-5",
      title: "",
      overlay: false,
      maxWidth: 665,
      closeButton: "title",
      adjustDistance: { top: 30, right: 45, bottom: 30, left: 30 },
      content: $("#grab-5"),
    });

    new jBox("Modal", {
      attach: "#modal-6",
      title: "",
      overlay: false,
      maxWidth: 665,
      closeButton: "title",
      adjustDistance: { top: 30, right: 45, bottom: 30, left: 30 },
      content: $("#grab-6"),
    });

    new jBox("Modal", {
      attach: "#modal-7",
      title: "",
      overlay: false,
      maxWidth: 665,
      closeButton: "title",
      adjustDistance: { top: 30, right: 45, bottom: 30, left: 30 },
      content: $("#grab-7"),
    });

    new jBox("Modal", {
      attach: "#modal-8",
      title: "",
      overlay: false,
      maxWidth: 665,
      closeButton: "title",
      adjustDistance: { top: 30, right: 45, bottom: 30, left: 30 },
      content: $("#grab-8"),
    });
  } else {
    new jBox("Tooltip", {
      attach: "#modal-1",
      title: "",
      position: { x: "left", y: "bottom" },
      outside: "xy",
      maxWidth: 500,
      adjustDistance: { top: 30, right: 30, bottom: 30, left: 30 },
      content: $("#grab-1"),
    });

    new jBox("Tooltip", {
      attach: "#modal-2",
      title: "",
      position: { x: "left", y: "bottom" },
      outside: "xy",
      maxWidth: 500,
      adjustDistance: { top: 30, right: 30, bottom: 30, left: 30 },
      content: $("#grab-2"),
    });

    new jBox("Tooltip", {
      attach: "#modal-3",
      title: "",
      position: { x: "left", y: "bottom" },
      outside: "xy",
      maxWidth: 500,
      adjustDistance: { top: 30, right: 30, bottom: 30, left: 30 },
      content: $("#grab-3"),
    });

    new jBox("Tooltip", {
      attach: "#modal-4",
      title: "",
      position: { x: "left", y: "bottom" },
      outside: "xy",
      maxWidth: 500,
      adjustDistance: { top: 30, right: 30, bottom: 30, left: 30 },
      content: $("#grab-4"),
    });

    new jBox("Tooltip", {
      attach: "#modal-5",
      title: "",
      position: { x: "left", y: "bottom" },
      outside: "xy",
      maxWidth: 500,
      adjustDistance: { top: 30, right: 30, bottom: 30, left: 30 },
      content: $("#grab-5"),
    });

    new jBox("Tooltip", {
      attach: "#modal-6",
      title: "",
      position: { x: "left", y: "bottom" },
      outside: "xy",
      maxWidth: 500,
      adjustDistance: { top: 30, right: 30, bottom: 30, left: 30 },
      content: $("#grab-6"),
    });

    new jBox("Tooltip", {
      attach: "#modal-7",
      title: "",
      position: { x: "left", y: "bottom" },
      outside: "xy",
      maxWidth: 500,
      adjustDistance: { top: 30, right: 30, bottom: 30, left: 30 },
      content: $("#grab-7"),
    });

    new jBox("Tooltip", {
      attach: "#modal-8",
      title: "",
      position: { x: "left", y: "bottom" },
      outside: "xy",
      maxWidth: 500,
      adjustDistance: { top: 30, right: 30, bottom: 30, left: 30 },
      content: $("#grab-8"),
    });
  }
});
