const Data = {
    content: [
        {
            type: "p",
            content: "For a moment, let’s go back in time to school. What can you remember from that time? Some friendships, perhaps suffering – it depends on you. I don’t know what you did in school. However, I’m sure you remember some stuff that your parents, teachers and other adults repeated all the time. For example, they told you that laziness didn’t pay off. Well, generally, that’s true – but not necessarily in the IT world! Among many different programming terms, one of them is crucial when it comes to loading app resources. Today, we’ll take a closer look at this process – a process named lazy loading."
        },
        {
            type: "p",
            content: "But, first things first – what is lazy loading? Generally, it’s a concept of managing static resources that their loading is optimal for the performance of an application. The eventual goal of lazy loading is to make this process comfortable both for a client machine and the app user.How does it apply to the real world? "
        },
        {
            type: "p",
            content: "Imagine you have a web application like Instagram. After fetching the data from the server, you've got a lot of images that have to be rendered. However, if you try to load it all at once, you’ll end up with your machine on fire 🔥"
        },
        {
            type: "image",
            title: "And your computer will look like this, trust me",
            src: "fire.webp"
        },
        {
            type: "p",
            content: "Of course, I’m kidding. It won’t be that bad. Nevertheless, loading like that will take a lot of time. Moreover, your users won’t be satisfied and will stop using your app. So, what to do now? Is there any way to go around this dramatic end and avoid crying under the blanket? Well, it’s time to use the design pattern I’m telling you about – the lazy loading concept."
        },
        {
            type: "p",
            content: "How can you implement that in an Instagram-like app? Firstly, let’s take a deeper look at which images your app has to load. In the beginning, the user only sees the first loaded post with photos – why not load the rest simultaneously to the user’s speed of scrolling? You’ll save an enormous amount of time by that. Now, let’s go back to the first post. Even though we don’t bother about the rest of the posts now, we still have to deal with the photos that are about to be displayed. What to do now? Of course, use the lazy loading concept. Your app can display a preloader while it will be loading the image files. And now that’s it! You’ve just improved the loading of your application – simple, isn’t it?"
        },
        {
            type: "p",
            content: "As you can see, I’ve just shown what lazy loading is. Now the question is if this concept is useful. Especially after presenting you the example above, to my mind, the answer is simple – it is! With lazy loading, your programmes that use some static data will be more user-friendly. It will be hard for you to disagree that seeing images and videos loading all at once and rendering part-by-part is not a pleasant view. Moreover, it will also hurt other aspects of your application. When it comes to desktop apps and games, it will affect your servers’ condition and client app performance. The lazy loading concept is also important in the mobile development segment, as mobile apps use more and more images and icons nowadays. Therefore, we need an effective method of managing resources like these to make the performance as impressive as possible. There are still loads of examples to mention here. Among them is one field of IT that I adore and explore in my free time - I would say it is a hobby, but it won't be the appropriate word. For me, it's something more."
        },
        {
            type: "p",
            content: "The last but not least example is web development. The speed of loading is crucial for this part of the IT world. If you take a look at public polls related to the speed of a website, you may get shocked by the results. The majority of internauts expect a web page to load at most for 2 or 3 seconds! This means that loading your app’s resources should be rapid and almost instant. Otherwise, you risk the audience bouncing off your page, which will affect your PageRank results. Also, if you would like to be a front-end developer, I have a piece of advice for you, my friend. Get used to lazy loading as quickly as possible! Without that, you won't be able to get a job without knowing this concept. I mean, you still can pass the job interview, but later you'll find it a bit tough to work like that. You'll be anxious about your web's performance. This will make your manager unsatisfied with the page speed, just like your clients. Briefly, modern web applications simply cannot exist without lazy loading!"
        },
        {
            type: "image",
            title: "Are you tired? Let's sum up!",
            src: "laziness.webp"
        },
        {
            type: "p",
            content: "As you know now, lazy loading is a topic you cannot omit nowadays. Even if you consider it useless, it would be hard for you to say that a preloader looks worse than a partially loaded image. Nevertheless, the idea of lazy loading and implementing it are cornerstones of several IT projects. Moreover, we can be sure that it will be even more crucial in the future. Now you can see that in terms of loading, laziness is not always bad – until next time 😉"
        },
        {
            type: "blogLinking",
            links: [
                {
                    type: "internal",
                    to: "/blog/react-worth-to-learn-our-not",
                    content: "React - worth to learn or not?"
                },
                {
                    type: "internal",
                    to: "/blog/the-divology",
                    content: "The Divology – what is that and why should you avoid it?"
                },
                {
                    type: "internal",
                    to: "/blog/how-to-step-into-the-programming",
                    content: "How to step into the programming?"
                }
            ]
        }
    ]
}

export default Data;