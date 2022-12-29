const Data = {
    content: [
        {
            type: "p",
            content: `When you think of building a web application, you can think of many different technologies to use. Will React.JS be a good choice for the UI design? Maybe Django will do a better job than Node.js or Laravel? Nevertheless, there will be some must-have solutions that you’ll have to encounter. Among them, there is HTML – a markup language with which you’ll build your app wireframe. If you dive deep into the HTML, you’ll notice there are dozens of tags you can use. You may think: „What do I need all of them for? Can I use only one tag?”. Well, there are some reasons why it’s not an as good idea as it sounds. Today, we'll take a deeper look at one of these reasons - something that I use to call "the Divology".`
        },
        {
            type: "heading",
            content: "I can’t see anything"
        },
        {
            type: "p",
            content: `You won’t be surprised when I tell you that the code you write is executed later by the machine. After you get rid of all errors, a computer can understand the instructions in your program. However, modern coding is not only about writing programs – but it’s also about sharing your code with other people. And this is the point where things are getting complicated. Imagine that you have to scrape through a code where every variable has a weird name. Now I think you can understand why you shouldn’t use only a div tag when you're building your web application. `
        },
        {
            type: "p",
            content: `Although it’s a simple way, you’ll find it harder to read your final code. Moreover, some tags are better for specific purposes than div – for example, you can use some of the header tags to make a good looking header. You can also consider using a nav tag for building the website menu. The only limit is your imagination – and the number of HTML tags.`
        },
        {
            type: "heading",
            content: "SEO and its wonders"
        },
        {
            type: "p",
            content: `The code readability is not the only reason you should use multiple tags. The appropriate use of HTML can also lead your website higher in browsers search results. How is that even possible? The short answer is SEO. The long one is Search Engine Optimization.`
        },
        {
            type: "image",
            title: "SEO is important - but what is it?",
            src: "seo.webp",
        },
        {
            type: "p",
            content: `What we mean by SEO are all of the measures we take to make our website appear higher in browsers search results. There is a lot of ways how to achieve this. One of them is improving your on-site factors. Okay, but what are these on-site factors? When we talk about them, we mean all website stuff, like content optimization, internal linking strategy, or website construction.`
        },
        {
            type: "p",
            content: `You may think: „Oh, come on, Simon, you’re just over worshipping the website construction. How on Earth does it affect search results?”. To be honest, it affects the results a lot. This happens because of the web crawlers that Google and other browsers use. Web crawlers are robots that browse the network and prepare the browser index. One of the factors they are concerned about is website construction. If a robot sees that you’re using only the div tag, it’ll quickly get lost. As a result, the traffic on your website can get lower and lower. But, if a web crawler discovers that you use different header tags, text tags, and so on, it knows how to go through your website. Eventually, there is a chance your web app will be ranked higher in the google rankings – and that’s what you want, don't you?`
        },
        {
            type: "p",
            content: `As you can see, there are some good reasons why using only the div tag can be damaging to your web application. I know that it’s easier to use no other tags, but you may end up encountering the problems I’ve mentioned above. Thank you guys for reading and see you next time 😉`
        },
        {
            type: "blogLinking",
            links: [
                {
                    type: "internal",
                    to: "/blog/react-worth-to-learn-our-not",
                    content: "React - worth to learn it or not?"
                },
                {
                    type: "internal",
                    to: "/blog/how-to-step-into-the-programming",
                    content: "How to step into the programming?"
                }
            ]
        }
    ]
};

export default Data;