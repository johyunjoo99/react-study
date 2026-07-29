const code = document.querySelector("#codeView");
const example = document.querySelector("#exampleCode");

if (code && example) {
    code.textContent = example.textContent;
}