
  function submit () {
    var inputURL = document.getElementById("inputURL").value;
    var inputText = document.getElementById("inputText").value;
    var inputTitle = document.getElementById("inputText").value;

    var outputValue = `[${inputText}](${inputURL} "${inputTitle}")`;

    document.getElementById("output").innerHTML = outputValue;
  }

  function copy() {
    // Get the text field
    var outputText = document.getElementById("output").innerHTML;
    var output = document.getElementById("output");

    // Select the text field

    output.select;
    // Copy the text inside the text field
    navigator.clipboard.writeText(output.innerHTML);
  }

    var pageContent = document.getElementById("pageContent");
    pageContent.addEventListener("keydown", function (e) {
        if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
            submit(e);
        }
    });
