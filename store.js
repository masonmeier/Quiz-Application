const STORE = {
  questions: [//1
    {
      question: "Open the abbreviation HTML",
      options: [
        "Hyper Text Module Language",
        "Hyper Text Markup Language",
        "Hyper Test Markup Language",
        "Hyperlink Markup Language"
      ],
      answer: "Hyper Text Markup Language"
    },
    //2
    {
      question: "What is the correct HTML tag for a new paragraph?",
      options: [
        "paragraph",
        "p",
        "pre",
        "para"
      ],
      answer: "p"
    },
    //3
    {
      question: "What is the HTML attribute to reference the location of an image inside the image tag?",
      options: [
        "src",
        "href",
        "link",
        "Location"
      ],
      answer: "src"
    },
    //4
    {
      question: "Which tag would you use to create a hyperlink?	",
      options: ["a", "img", "dl", "h1"],
      answer: "a"
    },
    //5
    {
      question: "How to write HTML Comment?",
      options: [
        "// This is HTML comment",
        "/* This is HTML comment */",
        "< !-- This is HTML comment -->",
        "**"
      ],
      answer: "< !-- This is HTML comment -->"
    },
    //6
    {
      question: "What property would you use to create space between the element's border and inner content?",
      options: [
        "margin",
        "padding",
        "border",
        "Spacing"
      ],
      answer: "padding"
    },
    //7
    {
      question: 'How to set the style for a specific HTML element with an id of "special"?',
      options: [
        "#special{ }",
        ".special{ }",
        "id.special{ }",
        "element.id.special{ }"
      ],
      answer: "#special{ }"
    },
    //8
    {
      question: "How to remove underline from hyperlinks using CSS?",
      options: [
        "a {underline:none;}",
        "a {decoration:no underline;}",
        "a {text-decoration:no underline;}",
        "a {text-decoration:none;}"
      ],
      answer: "a {text-decoration:none;}"
    },
    //9
    {
      question: "Which CSS property controls the text size?",
      options: [
        "text-height",
        "font-size",
        "text-style",
        "text-size"
      ],
      answer: "font-size"
    },
    //10
    {
      question: "Which snippet of CSS is commonly used to center a website horizontally?",
      options: [
        "margin: 0 auto;",
        "margin: auto 0;",
        "site-align: center;",
        "margin: center;"
      ],
      answer: "margin: 0 auto;"
    },
    //11
    {
      question: "Which built-in method returns the characters in a string beginning at the specified location?",
      options: [
        "getSubstring()",
        "slice()",
        "substr()",
        "None of the above"
      ],
      answer: "substr()"
    },
    //12
    {
      question: "How we can call myFunction function in javascript?",
      options: [
        "call function myFunction(...)",
        "funcall myFunction(...)",
        "myFunction(...)",
        "call myFunction(...)"
      ],
      answer: "myFunction(...)"
    },
    //13
    {
      question: "Which one is correct?",
      options: [
        "i =+ 1;",
        "i += 1;",
        "i = i++1;",
        "+i+;"
      ],
      answer: "i += 1;"
    },
    //14
    {
      question: "How you can Write 'Hello W3docs' with alert?",
      options: [
        "alertBox('Hello W3docs');",
        "alert('Hello W3docs');",
        "msg('Hello W3docs');",
        "msgBox('Hello W3docs');"
      ],
      answer: "alert('Hello W3docs');"
    },
    //15
    {
      question: "Which event occurs when the user clicks on an HTML element?",
      options: [
        "onmouseover",
        "onhover",
        "onsubmit",
        "onclick"
      ],
      answer: "onclick"
    }
  ],
  currentQuestion: 0,
  score: 0
};
