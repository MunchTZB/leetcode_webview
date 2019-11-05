import { editor } from 'monaco-editor';

editor.create(document.getElementById('container'), {
	value: "function hello() {\n\talert('Hello world!');\n}",
	language: "javascript"
})