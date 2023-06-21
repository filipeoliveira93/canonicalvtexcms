document.addEventListener("DOMContentLoaded", function () {
	var n = window.location.href;
	applyCanonical(n), applyNoIndex(n);
});

function applyCanonical(e) {
	if (e.includes("map=") || e.includes("PS=")) {
		var n = document.querySelector('link[rel="canonical"]');
		const l = e.split("/");
		let t = "";
		return (
			(t =
				l.length >= 7
					? l.slice(0, 6).join("/")
					: l.length >= 5 && l.length <= 6
					? l.slice(0, l.length - 1).join("/")
					: l.slice(0, 4).join("/")),
			n.setAttribute("href", t),
			t
		);
	}
	return e;
}

function applyNoIndex(e) {
	if (e.indexOf("map=") > -1) {
		var n = document.querySelector('meta[name="robots"]');
		n
			? (n.content = "noindex, follow")
			: (((n = document.createElement("meta")).name = "robots"),
			  (n.content = "noindex, follow"),
			  document.head.appendChild(n));
	}
}
