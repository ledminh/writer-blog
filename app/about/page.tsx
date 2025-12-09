export const metadata = {
  title: 'About | Writer\'s Nook',
  description: 'Learn more about the writer behind Writer\'s Nook.',
};

export default function AboutPage() {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <h1>About Me</h1>
      <p>
        Hello! I’m a writer based in South Carolina with a love for stories in all
        their forms. From poetry scribbled in the margins of notebooks to
        long-form essays exploring life’s complexities, writing has always been
        my way of making sense of the world.
      </p>
      <p>
        This blog is my digital journal — a place to share drafts, musings, and
        finished pieces with anyone who happens upon it. I believe in the power
        of words to connect us, to heal, and to inspire. Whether you’re a
        fellow writer or simply someone who enjoys reading, I hope you find
        something here that resonates.
      </p>
      <p>
        When I’m not writing, you’ll find me curled up with a book, walking
        through Greenville’s parks, or daydreaming over a cup of coffee. Thanks
        for stopping by — and please feel free to leave a comment or send a
        message. I’d love to hear from you.
      </p>
    </div>
  );
}
