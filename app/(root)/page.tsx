import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(
        Date.now() - Math.floor(Math.random() * 10 * 24 * 60 * 60 * 1000)
      ),
      views: 55,
      author: { _id: 1, name: "Alice Johnson" },
      _id: 1,
      description: "This is a description",
      image: "https://picsum.photos/id/80/800/600",
      category: "Robots",
      title: "We Robots",
    },
    {
      _createdAt: new Date(
        Date.now() - Math.floor(Math.random() * 10 * 24 * 60 * 60 * 1000)
      ),
      views: 120,
      author: { _id: 2, name: "Bob Smith" },
      _id: 2,
      description: "Exploring the future of AI",
      image: "https://picsum.photos/id/85/800/600",
      category: "AI",
      title: "The Rise of AI",
    },
    {
      _createdAt: new Date(
        Date.now() - Math.floor(Math.random() * 10 * 24 * 60 * 60 * 1000)
      ),
      views: 230,
      author: { _id: 3, name: "Catherine Lee" },
      _id: 3,
      description: "Understanding the universe",
      image: "https://picsum.photos/id/885/800/600",
      category: "Space",
      title: "Mysteries of the Cosmos",
    },
    {
      _createdAt: new Date(
        Date.now() - Math.floor(Math.random() * 10 * 24 * 60 * 60 * 1000)
      ),
      views: 78,
      author: { _id: 4, name: "David Nguyen" },
      _id: 4,
      description: "A glimpse into robotics",
      image: "https://picsum.photos/id/75/800/600",
      category: "Technology",
      title: "Advances in Robotics",
    },
    {
      _createdAt: new Date(
        Date.now() - Math.floor(Math.random() * 10 * 24 * 60 * 60 * 1000)
      ),
      views: 95,
      author: { _id: 5, name: "Emily Chen" },
      _id: 5,
      description: "Learning from nature",
      image: "https://picsum.photos/id/65/800/600",
      category: "Nature",
      title: "Nature's Influence on Tech",
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your StartUp, <br /> Connect With Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard, index: number) => (
              <StartupCard key={post._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
