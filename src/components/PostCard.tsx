// src/components/PostCard.tsx
interface PostCardProps {
    title: string;
    summary: string;
    image?: string;
  }
  
  export default function PostCard({ title, summary, image }: PostCardProps) {
    return (
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "8px",
          overflow: "hidden",
          marginBottom: "20px",
          backgroundColor: "#fff",
        }}
      >
        {image && <img src={image} alt={title} style={{ width: "100%", height: "200px", objectFit: "cover" }} />}
        <div style={{ padding: "15px" }}>
          <h2 style={{ margin: "0 0 10px 0" }}>{title}</h2>
          <p>{summary}</p>
        </div>
      </div>
    );
  }
  