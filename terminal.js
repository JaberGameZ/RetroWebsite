document.addEventListener("DOMContentLoaded", function ()
{
    const terminalInput = document.querySelector(".terminalinput");
    terminalInput.addEventListener("keydown", function (event)
    {
        if (event.key === "Enter")
        {
            EnterCommand(terminalInput.value); 
        }
    });

    function EnterCommand(command) {
        switch (command) {
            case "ls":
                terminalInput.value = " List of the games available\n Will u survive\n North or South\n Hide and Seak";
                break;
        
            case "user":
                terminalInput.value = "Arcade games fan";
                break;
        
            case "whoami":
                terminalInput.value = "Hasan Jaber 2nd year cs student";
                break;

            case "pwd":
                terminalInput.value = "Main page of the project";
                break;
            
            case "Play North or south":
                window.location.href = "Web Games/Game1/LaunchGame.html";
                break;

            case "Play Hide and seek":
                window.location.href = "Web Games/Game2/LaunchGame.html";
                break;

            case "Play Will you survive":
                window.location.href = "Web Games/Game3/LaunchGame.html";
                break;
        
            default:
                terminalInput.value = "Unknown command: " + command;
                break;
        }
    }
});
