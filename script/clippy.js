function clippyload() {
    clippy.load({
        name: 'Clippy',
        selector: 'myclippy',
        successCb: (agent) => {
            console.log("Loaded!");
            agent.show();
            agent.speak("I see you are visiting lyra’s website! would you like some help?");
            setTimeout(function () {
                setInterval(function () {
                    agent.animate();
                }, 8000);
            }, 1000);
        },
        failCb: (e) => {
            console.error(e)
        }
    })
}
