export class SloganGenerator{
    private static slogans: string[] = [
        'Welcome and Enjoy!',
        "Hello",
        "World Famous YouTuber",
        "A Tatterdemalion 🐛 🎺",
        "More than a website, a websperiance! 😆",
        "Close up I am big 🧍 but far away I'm small 🌍 and hardly here at all 🌌",
        "This is it",
        "Is this it?",
        "My Art",
        "Lead Developer",
        "More website than website is our motto"
    ];

    public static getRandomSlogan() : string{
        return this.slogans[Math.floor(Math.random()*this.slogans.length)]
    }
}