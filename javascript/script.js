function showRouteResults() {
    const from = document.getElementById("fromInput").value;
    const to = document.getElementById("toInput").value;
    if (!from || !to) {
      alert("출발지와 도착지를 모두 입력해주세요.");
      return;
    }
    document.getElementById("routeResults").style.display = "block";
}
