import ReactMarkdown from "react-markdown";

export default function ClaudeRecipe(props) {
  return (
    <section className="suggested-recipe-container" aria-live="polite">
      <h2>Chef Claude Recommends:</h2>
      {props.isLoading ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Creating your perfect recipe...</p>
        </div>
      ) : (
        <ReactMarkdown>{props.recipe}</ReactMarkdown>
      )}
    </section>
  );
}
