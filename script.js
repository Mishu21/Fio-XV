const eventDate = new Date("March 20, 2027 22:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = eventDate - now;

    if (distance <= 0) {
        document.getElementById("countdown").innerHTML =
            "<h2>¡Llegó el gran día! 💙</h2>";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        /(1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        /(1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        /1000
    );

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

setInterval(updateCountdown, 1000);

updateCountdown();

function copyAlias() {

    navigator.clipboard.writeText("fiorella.duarte.xv");

    alert("Alias copiado ✅");
}
