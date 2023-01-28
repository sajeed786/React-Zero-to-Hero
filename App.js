const loremIpsumText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

const heading = React.createElement(
    "h1",
    {
        id: "title",
        key: "title",
        style: {
            marginLeft: "0.5em",
        }
    },
    "Heading 1"
);

const heading3 = React.createElement(
    "h3",
    {
        id: "title3",
        key: "title3"
    },
    "Heading 3"
);

const paragraph = React.createElement(
    "p",
    {
        id: "para",
        key: "para",
        style: {
            textAlign: "justify",
        }
    },
    loremIpsumText
);

const content = React.createElement(
    "div",
    {
        id: "content",
        key: "nestedContent",
        style: {
            marginLeft: "1.5em",
            padding: "1em",
        }
    },
    [heading3, paragraph]
);

const container = React.createElement(
    "div",
    {
        id: "container",
    },
    [heading, content]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root
root.render(container);