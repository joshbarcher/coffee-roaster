
function About() {
    return (
        <section className="grid items-center gap-10 py-12 md:grid-cols-2">
            <img
                src="/images/about.jpg"
                alt="Sacks of green coffee on the roastery shelves"
                className="w-full rounded-3xl"
            />
            <div>
                <h1 className="font-display text-4xl font-semibold">About us</h1>
                <p className="mt-6 leading-relaxed text-latte">
                    Ember &amp; Oak is two people, one roaster and a garage. We buy green
                    coffee from six farms, roast it every Monday and ship it the same
                    week.
                </p>
                <p className="mt-4 leading-relaxed text-latte">
                    We do not exist. This shop was made up for a React lab.
                </p>
            </div>
        </section>
    );
}

export default About;
